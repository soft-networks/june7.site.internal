"use client"

import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const LandscapeBackground = () => {
    const sketchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sketchRef.current) return;

        const sketch = (p: p5) => {
            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight);
                p.noLoop();
            };

            p.draw = () => {
                // Sky
                p.background(0, 180, 255);
                p.noStroke();
                // Clouds
                p.push();
                p.scale(1.5);
                cloud(p.width * 0.2, p.height * 0.15);
                cloud(p.width * 0.4, p.height * 0.2);
                cloud(p.width * 0.6, p.height * 0.25);
                cloud(p.width * 0.8, p.height * 0.18);
                cloud(p.width * 0.3, p.height * 0.3);
                p.pop();

                // Single rolling hill
                p.push();
                p.fill(76, 175, 80); // A nice green color
                p.beginShape();
                p.vertex(0, p.height);

                // Create a smooth, rolling hill
                for (let x = 0; x <= p.width; x += 10) {
                    let y = p.height * 0.6 + Math.sin(x * 0.005) * p.height * 0.1;
                    p.vertex(x, y);
                }

                p.vertex(p.width, p.height);
                p.endShape(p.CLOSE);
                p.pop();
            };

            function cloud(cloudx: number, cloudy: number) {
                p.fill(250)
                p.noStroke();
                const size = 50 + p.random(-10, 10);
                p.ellipse(cloudx, cloudy, size, size);
                p.ellipse(cloudx + 10 + p.random(-5, 5), cloudy + 10 + p.random(-5, 5), size * 0.9, size * 0.9);
                p.ellipse(cloudx - 20 + p.random(-5, 5), cloudy + 10 + p.random(-5, 5), size * 1.1, size * 1.1);
            }
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        };

        new p5(sketch, sketchRef.current);

        return () => {
            if (sketchRef.current) {
                sketchRef.current.innerHTML = '';
            }
        };
    }, []);

    return <div ref={sketchRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};
