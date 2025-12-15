const ProgressBar = ({ progress, color }) => (
    <div class="w-full">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-semibold text-blue-300">
          Preparation Progress
        </span>
        <span class="text-sm font-bold text-white">
          {progress}%
        </span>
      </div>
      <div class="w-full h-2 bg-blue-950/50 rounded-full overflow-hidden border border-blue-400/20">
        <div
          class={`h-full bg-gradient-to-r ${color} transition-all duration-500`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );

  export default ProgressBar;