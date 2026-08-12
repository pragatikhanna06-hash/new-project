import { useEffect, useRef } from "react";

// ── stylized world map ──────────────────────────────────────────────────
// Not geographically precise on purpose — a handful of lat/lon bounding
// boxes is enough to produce the classic low-poly "network globe" look
// used in tech/security stock footage, without shipping a real GeoJSON
// dataset into the bundle.
const LAND_REGIONS = [
  { latMin: 15, latMax: 72, lonMin: -168, lonMax: -52 },  // North America
  { latMin: -56, latMax: 13, lonMin: -82, lonMax: -34 },  // South America
  { latMin: 36, latMax: 71, lonMin: -10, lonMax: 40 },    // Europe
  { latMin: -35, latMax: 37, lonMin: -18, lonMax: 52 },   // Africa
  { latMin: 5, latMax: 77, lonMin: 40, lonMax: 180 },     // Asia
  { latMin: -44, latMax: -10, lonMin: 112, lonMax: 154 }, // Australia
];

function isRoughlyLand(lat, lon) {
  return LAND_REGIONS.some(
    (r) => lat >= r.latMin && lat <= r.latMax && lon >= r.lonMin && lon <= r.lonMax
  );
}

// Static dot cloud, built once per mount — [latRad, lonRad] pairs.
function buildLandDots() {
  const dots = [];
  for (let lat = -80; lat <= 80; lat += 5) {
    const rowRadius = Math.cos((lat * Math.PI) / 180);
    const step = Math.max(5, 5 / Math.max(rowRadius, 0.15));
    for (let lon = -180; lon < 180; lon += step) {
      // slight jitter so the grid doesn't read as mechanical
      const jLat = lat + (Math.random() - 0.5) * 2;
      const jLon = lon + (Math.random() - 0.5) * 2;
      if (isRoughlyLand(jLat, jLon)) {
        dots.push({ lat: (jLat * Math.PI) / 180, lon: (jLon * Math.PI) / 180 });
      }
    }
  }
  return dots;
}

/**
 * TechGlobe — a rotating, wireframed "network globe": land masses
 * rendered as a glowing dot-matrix, thin connecting lines between
 * nearby points, latitude/longitude wireframe, and an atmosphere rim.
 * Colors are pulled to match the Forfra navy/gold brand rather than
 * the blue typically seen in stock "digital earth" footage.
 */
export default function TechGlobe({ size = 230 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const dots = buildLandDots();
    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.46;

    let rotation = 0;
    let animId;
    let destroyed = false;

    function project(lat, lon, rot) {
      const adjLon = lon + rot;
      return {
        x: Math.cos(lat) * Math.sin(adjLon),
        y: Math.sin(lat),
        z: Math.cos(lat) * Math.cos(adjLon),
      };
    }

    function draw() {
      if (destroyed) return;
      ctx.clearRect(0, 0, size, size);

      // atmosphere rim
      const rim = ctx.createRadialGradient(cx, cy, R * 0.75, cx, cy, R * 1.14);
      rim.addColorStop(0, "rgba(245,166,35,0)");
      rim.addColorStop(1, "rgba(245,166,35,0.4)");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.1, 0, Math.PI * 2);
      ctx.strokeStyle = rim;
      ctx.lineWidth = 3;
      ctx.stroke();

      // sphere base shading (gives it volume even before dots are drawn)
      const base = ctx.createRadialGradient(
        cx - R * 0.3, cy - R * 0.35, R * 0.1,
        cx, cy, R
      );
      base.addColorStop(0, "rgba(245,166,35,0.10)");
      base.addColorStop(1, "rgba(6,14,28,0.92)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = base;
      ctx.fill();

      // latitude rings
      ctx.strokeStyle = "rgba(245,166,35,0.16)";
      ctx.lineWidth = 1;
      for (let i = -60; i <= 60; i += 30) {
        const ry = Math.cos((i * Math.PI) / 180) * R;
        const yOff = Math.sin((i * Math.PI) / 180) * R;
        ctx.beginPath();
        ctx.ellipse(cx, cy - yOff, ry, ry * 0.16, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      // longitude meridians (rotating)
      for (let i = 0; i < 6; i++) {
        const ang = rotation + (i * Math.PI) / 6;
        const rx = Math.abs(Math.cos(ang)) * R;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, R, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // project land dots — keep only the front-facing hemisphere
      const projected = [];
      dots.forEach((d) => {
        const p = project(d.lat, d.lon, rotation);
        if (p.z > 0.02) {
          projected.push({ x: cx + p.x * R, y: cy - p.y * R, z: p.z });
        }
      });

      // faint network lines between nearby dots
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i], b = projected[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 16) {
            const alpha = (1 - dist / 16) * 0.18 * ((a.z + b.z) / 2);
            ctx.strokeStyle = `rgba(245,166,35,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // the dots themselves — nearer (higher z) dots are brighter/bigger
      projected.forEach((p) => {
        const alpha = 0.35 + p.z * 0.65;
        const r = 1 + p.z * 1.2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,210,130,${alpha})`;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      rotation += 0.0032;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      destroyed = true;
      cancelAnimationFrame(animId);
    };
  }, [size]);

  return <canvas ref={canvasRef} className="tech-globe-canvas" aria-hidden="true" />;
}
