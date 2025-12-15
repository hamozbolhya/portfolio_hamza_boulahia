const IconSection = ({ cert }) => (
    <div class="flex-shrink-0">
      <div
        class={`w-20 h-20 rounded-xl bg-gradient-to-br ${cert.color} p-0.5`}
      >
        <div class="w-full h-full rounded-lg bg-blue-950 flex items-center justify-center">
          <cert.icon class={`w-10 h-10 ${cert.iconColor}`} />
        </div>
      </div>
    </div>
  );

  export default IconSection;