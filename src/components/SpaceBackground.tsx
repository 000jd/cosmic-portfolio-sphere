import React from 'react';

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Planets */}
      <div className="absolute top-1/4 -right-20 w-40 h-40 bg-space-purple/20 rounded-full blur-xl animate-spin-slow" />
      <div className="absolute bottom-1/4 -left-20 w-32 h-32 bg-space-cyan/20 rounded-full blur-xl animate-spin-slow" 
           style={{ animationDirection: 'reverse' }} />

      {/* Floating Astronaut */}
      <div className="absolute top-1/3 right-10 animate-float"
           style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
          👨‍🚀
        </div>
      </div>

      {/* Orbiting Satellite */}
      <div className="absolute left-1/2 top-1/2 w-2 h-2">
        <div className="absolute w-4 h-4 bg-space-orange/50 rounded-full animate-orbit">
          🛸
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-darker via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker via-transparent to-transparent" />
    </div>
  );
};