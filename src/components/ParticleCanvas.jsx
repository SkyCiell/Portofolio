import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle setup: soft glowing ambient particles
    const particleCount = Math.floor(Math.min(width, 1400) / 28);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.4 + 0.1,
      maxAlpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.01 + 0.005,
      pulseDir: Math.random() > 0.5 ? 1 : -1,
      // Pale cyan (#B8F1E8) or Jade cyan (#5FA8A3) or Gold (#CDB47D)
      color: Math.random() > 0.15 ? 'rgba(95, 168, 163, ' : 'rgba(205, 180, 125, ',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Pulse alpha
        p.alpha += p.pulseSpeed * p.pulseDir;
        if (p.alpha >= p.maxAlpha || p.alpha <= 0.05) {
          p.pulseDir *= -1;
        }

        // Wrap around screen edges
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = '#5FA8A3';
        ctx.shadowBlur = p.size * 2;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
