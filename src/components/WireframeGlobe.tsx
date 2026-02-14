import { useEffect, useRef } from "react";

interface Props {
  size?: number;
}

export default function WireframeGlobe({ size = 280 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.42;
    let angle = 0;
    let animId: number;

    function project(
      lat: number,
      lon: number,
      rotation: number,
    ): [number, number, number] {
      const phi = (lat * Math.PI) / 180;
      const theta = ((lon + rotation) * Math.PI) / 180;
      const x = r * Math.cos(phi) * Math.sin(theta);
      const y = r * Math.sin(phi);
      const z = r * Math.cos(phi) * Math.cos(theta);
      return [cx + x, cy - y, z];
    }

    function draw() {
      ctx!.clearRect(0, 0, size, size);

      for (let lon = 0; lon < 360; lon += 30) {
        ctx!.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 3) {
          const [x, y, z] = project(lat, lon, angle);
          const alpha = z > 0 ? 0.6 : 0.12;
          ctx!.strokeStyle = `rgba(74, 222, 128, ${alpha})`;
          if (!started) {
            ctx!.moveTo(x, y);
            started = true;
          } else {
            ctx!.lineTo(x, y);
          }
        }
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      for (let lat = -60; lat <= 60; lat += 30) {
        ctx!.beginPath();
        let started = false;
        for (let lon = 0; lon <= 360; lon += 3) {
          const [x, y, z] = project(lat, lon, angle);
          const alpha = z > 0 ? 0.6 : 0.12;
          ctx!.strokeStyle = `rgba(74, 222, 128, ${alpha})`;
          if (!started) {
            ctx!.moveTo(x, y);
            started = true;
          } else {
            ctx!.lineTo(x, y);
          }
        }
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      ctx!.beginPath();
      let started = false;
      for (let lon = 0; lon <= 360; lon += 3) {
        const [x, y, z] = project(0, lon, angle);
        const alpha = z > 0 ? 0.9 : 0.15;
        ctx!.strokeStyle = `rgba(74, 222, 128, ${alpha})`;
        if (!started) {
          ctx!.moveTo(x, y);
          started = true;
        } else {
          ctx!.lineTo(x, y);
        }
      }
      ctx!.lineWidth = 1.5;
      ctx!.stroke();

      ctx!.beginPath();
      ctx!.arc(cx, cy, r, 0, Math.PI * 2);
      ctx!.strokeStyle = "rgba(74, 222, 128, 0.5)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      angle += 0.3;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className="opacity-60"
    />
  );
}
