const ORBS = [
  {
    className:
      "neon-orb neon-orb-1 w-[280px] h-[280px] md:w-[420px] md:h-[420px] -left-[10%] top-[20%]",
    color: "rgba(251, 191, 36, 0.35)",
  },
  {
    className:
      "neon-orb neon-orb-2 w-[220px] h-[220px] md:w-[360px] md:h-[360px] right-[5%] top-[10%]",
    color: "rgba(217, 119, 6, 0.3)",
  },
  {
    className:
      "neon-orb neon-orb-3 w-[180px] h-[180px] md:w-[280px] md:h-[280px] left-[35%] bottom-[5%]",
    color: "rgba(251, 191, 36, 0.25)",
  },
];

const NeonLights = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className={orb.className}
          style={{
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
        />
      ))}
      <div className="neon-sweep absolute inset-0" />
    </div>
  );
};

export default NeonLights;
