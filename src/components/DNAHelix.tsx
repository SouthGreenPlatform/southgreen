import { useEffect, useState } from "react";

export function DNAHelix() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Stop animation after 4 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] opacity-20 transition-transform duration-1000 ${
        isAnimating ? 'animate-dna-spin' : ''
      }`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <svg
        viewBox="0 0 200 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* DNA Helix Strands */}
        {Array.from({ length: 20 }).map((_, i) => {
          const y = i * 20;
          const offset = Math.sin((i * Math.PI) / 5) * 40;
          const offset2 = Math.sin((i * Math.PI) / 5 + Math.PI) * 40;
          const opacity = 0.4 + Math.abs(Math.sin((i * Math.PI) / 5)) * 0.6;
          
          return (
            <g key={i}>
              {/* Left strand nodes */}
              <circle
                cx={100 + offset}
                cy={y + 10}
                r={6}
                className="fill-primary"
                style={{ opacity }}
              />
              {/* Right strand nodes */}
              <circle
                cx={100 + offset2}
                cy={y + 10}
                r={6}
                className="fill-accent"
                style={{ opacity }}
              />
              {/* Connecting bars (base pairs) */}
              <line
                x1={100 + offset}
                y1={y + 10}
                x2={100 + offset2}
                y2={y + 10}
                className="stroke-primary/40"
                strokeWidth={2}
                strokeLinecap="round"
              />
              {/* Strand connections */}
              {i < 19 && (
                <>
                  <line
                    x1={100 + offset}
                    y1={y + 10}
                    x2={100 + Math.sin(((i + 1) * Math.PI) / 5) * 40}
                    y2={y + 30}
                    className="stroke-primary/60"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <line
                    x1={100 + offset2}
                    y1={y + 10}
                    x2={100 + Math.sin(((i + 1) * Math.PI) / 5 + Math.PI) * 40}
                    y2={y + 30}
                    className="stroke-accent/60"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
