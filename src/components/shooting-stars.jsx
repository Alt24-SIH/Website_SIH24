"use client";

import { useEffect, useRef } from "react";

export default function ShootingStars() {
  const canvasRef = useRef < HTMLCanvasElement > null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const STAR_COUNT = 40; // Number of shooting stars
    let animationFrameId;

    // Function to resize the canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas(); // Initialize canvas size

    class Star {
      x;
      y;
      length;
      speed;
      size;
      angle; // Direction of the star

      constructor() {
        this.reset();
      }

      reset() {
        // Randomize starting position along the top or left edge of the screen
        if (Math.random() > 0.5) {
          // Start along the top edge
          this.x = Math.random() * canvas.width;
          this.y = -Math.random() * 50; // Slightly offscreen above
        } else {
          // Start along the left edge
          this.x = -Math.random() * 50; // Slightly offscreen to the left
          this.y = Math.random() * canvas.height;
        }
        this.length = Math.random() * 80 + 10;
        this.speed = Math.random() * 4 + 2;
        this.size = Math.random() * 1.5 + 0.5;
        this.angle = Math.PI / 8; // Adjust the angle to control trajectory
      }

      draw() {
        // Create a linear gradient for the star trail
        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x + Math.cos(this.angle) * this.length,
          this.y + Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, "rgba(0, 0, 139, 0.8)"); // Deep blue
        gradient.addColorStop(1, "rgba(138, 43, 226, 0.8)"); // Purple

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + Math.cos(this.angle) * this.length,
          this.y + Math.sin(this.angle) * this.length
        );
        ctx.lineWidth = this.size;
        ctx.strokeStyle = gradient;
        ctx.stroke();
      }

      move() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        // Reset star if it goes offscreen
        if (
          this.x > canvas.width + this.length ||
          this.y > canvas.height + this.length
        ) {
          this.reset();
        }
      }
    }

    let Star = [];

    // Initialize stars
    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
      }
    };

    initStars();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.draw();
        star.move();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      initStars(); // Reinitialize stars for the new canvas size
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId); // Stop the animation loop
      window.removeEventListener("resize", handleResize); // Remove event listener
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}
