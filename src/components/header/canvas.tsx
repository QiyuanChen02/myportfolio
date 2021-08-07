import React, { useState, useRef, useEffect } from "react";
import "./header.css";

type Velocity = {
    x: number; 
    y: number;
};

type IsParticle = {
    x: number;
    y: number;
    radius: number;
    velocity: Velocity;
    colour: string;
    draw(c: CanvasRenderingContext2D): void;
    update(): void;
}

//Utility function
function randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Colours
const colourPalette: string[] = [
    "hsl(29, 86%, 77%)",
    "hsl(7, 86%, 77%)",
    "hsl(311, 86%, 77%)",
    "hsl(266, 86%, 77%)",
    "hsl(226, 86%, 77%)"
]

//Particle info
const velocityEl = 1;
const minRadiusEl = 1;
const maxRadiusEl = 1;
const noParticlesEl = 16;

const Canvas: React.FC = () => {
    
    //Getting info for canvas
    const canvasRef = useRef<HTMLCanvasElement>(null);

    //Reloading the canvas on window resize
    const [windowSize, setWindowSize] = useState<number[]>([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    //Defines particle objects
    class Particles{

        constructor(
            public radius: number,
            public x: number,
            public y: number,
            public velocity: Velocity,
            public colour: string,
        ){}

        //Draws particles
        draw(c: CanvasRenderingContext2D){
            
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            c.shadowColor = this.colour;
            c.shadowBlur = 40;
            c.fillStyle = this.colour;
            c.fill();
            c.closePath();
            c.shadowBlur = 0;
            
        }

        //Updates position of particles
        update(){
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            //Bounces particles off walls
            if (this.x - this.radius < 0 || this.x + this.radius > windowSize[0]){
                this.velocity.x = -1 * this.velocity.x;
                if (this.x - this.radius < 0){
                    this.x = this.radius + 0.1;
                } else {
                    this.x = windowSize[0] - this.radius - 0.1;
                }
            }

            if (this.y - this.radius < 0 || this.y + this.radius > windowSize[1]){
                this.velocity.y = -1 * this.velocity.y;
                if (this.y - this.radius < 0){
                    this.y = this.radius + 0.1;
                } else {
                    this.y = windowSize[1] - this.radius - 0.1;
                }
            } 
        }
    }

    //Initially defines the initial conditions
    let particles: IsParticle[];
    function init(){
        particles = [];
        const numberParticles = noParticlesEl;

        //Sets the position of the particles, making sure they're not generated on top of each other
        for (let i = 0; i < numberParticles; i++){
            const radius = randomInteger(minRadiusEl, maxRadiusEl);
            const x = randomInteger(radius, windowSize[0] - radius);
            const y = randomInteger(radius, windowSize[1] - radius);

            const colour = colourPalette[Math.floor(Math.random() * colourPalette.length)];

            const velocity: Velocity = {
                x: velocityEl,
                y: velocityEl
            }
            const particle: IsParticle = new Particles(radius, x, y, velocity, colour);
            particles.push(particle); 
        }
    }

    //Allows the canvas to re-run every time the window size is changed
    useEffect(() => {
        const canvas = canvasRef.current!;
        const c = canvas.getContext("2d")!;
        canvas.width = windowSize[0];
        canvas.height = windowSize[1];

        let animationID: number;
        const animate = () => {
            animationID = requestAnimationFrame(animate);
            c.fillStyle = "rgba(10,10,10, 0.3)";
            c.fillRect(0, 0, windowSize[0], windowSize[1]);
            for (var i = 0; i < particles.length; i++){
                particles[i].update();
                particles[i].draw(c);
            }
        }

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationID);
        }

    }, [windowSize]);

    return (
        <canvas ref={canvasRef}/>
    );
}

export default Canvas