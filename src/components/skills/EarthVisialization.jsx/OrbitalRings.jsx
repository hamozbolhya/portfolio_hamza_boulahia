

const OrbitalRings = () => (
  <div class="absolute inset-0 flex items-center justify-center">
    <svg
      class="absolute w-full h-full"
      viewBox="0 0 800 800"
      style="filter: drop-shadow(0 0 4px rgba(34, 211, 238, 0.1))"
    >
      {[120, 160, 200, 240, 280, 320].map((radius, index) => (
        <circle
          cx="400"
          cy="400"
          r={radius}
          fill="none"
          stroke={
            index % 2 === 0
              ? "rgba(6, 182, 212, 0.1)"
              : "rgba(59, 130, 246, 0.08)"
          }
          stroke-width="0.5"
          stroke-dasharray="3,3"
        />
      ))}
    </svg>
  </div>
);

export default OrbitalRings;