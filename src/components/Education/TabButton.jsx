const TabButton = ({ id, activeTab, setActiveTab, icon, label }) => (
  <button
    onClick={() => setActiveTab(id)}
    class={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
      activeTab() === id
        ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/40"
        : "bg-blue-950/30 text-blue-200 border border-blue-400/30 hover:border-blue-400/60"
    }`}
  >
    <span class="flex items-center gap-2">
      {icon}
      {label}
    </span>
  </button>
);

export default TabButton;
