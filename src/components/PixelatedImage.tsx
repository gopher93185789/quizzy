"use client";

import { useRef, useEffect, useState } from "react";

interface PixelImageProps {
  src: string;
  particleDiameter?: number;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
}

export function PixelImage({ src, particleDiameter = 6 }: PixelImageProps) {
  let particles = [];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

      const numRows = Math.round(img.height / particleDiameter);
      const numCols = Math.round(img.width / particleDiameter);

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const pi =
            (row * particleDiameter * img.width + col * particleDiameter) * 4;

          const red = imageData[pi];
          const green = imageData[pi + 1];
          const blue = imageData[pi + 2];
          const alpha = imageData[pi + 3];

          particles.push({
            x: col * particleDiameter + particleDiameter / 2,
            y: row * particleDiameter + particleDiameter / 2,
            originX: col * particleDiameter + particleDiameter / 2,
            originY: row * particleDiameter + particleDiameter / 2,
            color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`,
          });
        }
      }

      

      const drawParticles = () => {
        ctx?.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle: Particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particleDiameter / 2, 0, 2 * Math.PI);
          ctx.fillStyle = particle.color;
          ctx.fill();
        });
      };

      drawParticles();
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
    />
  );
}
