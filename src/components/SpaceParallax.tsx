import React from 'react';

export const SpaceParallax = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Parallax Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Spaceship */}
      <div 
        className="absolute w-16 h-16 animate-float"
        style={{
          top: '20%',
          right: '10%',
          animationDuration: '6s',
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-space-purple/20 rounded-full blur-md animate-pulse" />
          <span className="absolute inset-0 flex items-center justify-center text-4xl">
            🚀
          </span>
        </div>
      </div>

      {/* Asteroids */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 animate-float"
          style={{
            top: `${20 + (i * 15)}%`,
            left: `${10 + (i * 20)}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '4s',
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-space-orange/20 rounded-full blur-sm" />
            <span className="absolute inset-0 flex items-center justify-center text-2xl">
              ☄️
            </span>
          </div>
        </div>
      ))}

      {/* Additional floating elements */}
      <div 
        className="absolute w-12 h-12 animate-orbit"
        style={{ top: '40%', left: '50%' }}
      >
        <span className="text-3xl">👨‍🚀</span>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker/50 via-transparent to-space-darker/50" />
    </div>
  );
};