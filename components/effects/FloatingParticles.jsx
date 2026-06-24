const buildParticles = (count, opacityScale = 1) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 13 + 5) % 96}%`,
    top: `${(i * 19 + 11) % 88}%`,
    delay: `${(i * 0.45) % 6}s`,
    duration: `${7 + (i % 8)}s`,
    size: 2 + (i % 3),
    opacity: (0.25 + (i % 4) * 0.15) * opacityScale,
  }));

const FloatingParticles = ({ count = 28, opacityScale = 1, className = "" }) => {
  const particles = buildParticles(count, opacityScale);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-particle absolute rounded-full bg-amber-400"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
