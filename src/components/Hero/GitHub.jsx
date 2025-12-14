import { For } from "solid-js";

const GitHub = ({loading, contributions,contributionGraph }) => {
  return (
    <>
      {!loading() && contributions() && (
        <div class="mb-16 relative">
          <div class="relative bg-gradient-to-br from-blue-950/50 to-purple-950/40 rounded-2xl p-6 md:p-8 border border-blue-400/40 hover:border-blue-400/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 backdrop-blur-md overflow-hidden group">
            {/* Animated border glow */}
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-purple-400/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-20"></div>

            <div class="flex flex-col md:flex-row items-start gap-6">
              {/* GitHub Avatar */}
              <div class="flex-shrink-0">
                <img
                  src={contributions().avatar}
                  alt={contributions().username}
                  class="w-24 h-24 md:w-28 md:h-28 rounded-xl border-2 border-blue-400/50 group-hover:border-blue-300 transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* GitHub Stats */}
              <div class="flex-1 text-center md:text-left">
                <div class="flex items-center gap-2 justify-center md:justify-start mb-3">
                  <h3 class="text-2xl md:text-3xl font-bold text-white">
                    {contributions().username}
                  </h3>
                  <a
                    href={`https://github.com/${contributions().username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-300 hover:text-blue-100 transition-colors"
                    title="Visit GitHub Profile"
                  >
                    <svg
                      class="w-6 h-6 md:w-7 md:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>

                {contributions().bio && (
                  <p class="text-blue-200 text-sm md:text-base mb-4">
                    {contributions().bio}
                  </p>
                )}

                {/* GitHub Stats Grid */}
                <div class="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div class="text-2xl md:text-3xl font-bold text-blue-300">
                      {contributions().totalContributions}
                    </div>
                    <p class="text-xs md:text-sm text-blue-200">
                      Contributions
                    </p>
                  </div>
                  <div>
                    <div class="text-2xl md:text-3xl font-bold text-purple-300">
                      {contributions().followers}
                    </div>
                    <p class="text-xs md:text-sm text-blue-200">Followers</p>
                  </div>
                  <div>
                    <div class="text-2xl md:text-3xl font-bold text-pink-300">
                      {contributions().following}
                    </div>
                    <p class="text-xs md:text-sm text-blue-200">Following</p>
                  </div>
                </div>

                {/* Contribution Calendar Grid */}
                {contributionGraph() && (
                  <div class="mt-8 pt-8 border-t border-blue-400/40">
                    <p class="text-xs text-blue-300 font-semibold mb-4 uppercase tracking-wider">
                      Contribution Activity (Last Year)
                    </p>

                    {/* Calendar Container with GitHub-like background */}
                    <div
                      class="p-4 rounded-lg border border-blue-400/30"
                      style={{
                        background:
                          "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgba(30, 41, 59, 0.97) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {/* Contribution squares */}
                      <div class="flex flex-wrap gap-1 w-full">
                        <For
                          each={
                            contributionGraph().weeks.flatMap(
                              (week) => week.contributionDays
                            ) || []
                          }
                        >
                          {(day) => {
                            const count = day.contributionCount;
                            let bgColor = "bg-slate-700/80";

                            if (count === 0) {
                              bgColor = "bg-slate-800/80";
                            } else if (count === 1) {
                              bgColor = "bg-green-900/60";
                            } else if (count <= 3) {
                              bgColor = "bg-green-700/70";
                            } else if (count <= 7) {
                              bgColor = "bg-green-600/80";
                            } else {
                              bgColor = "bg-green-500/90";
                            }

                            return (
                              <div
                                class="relative cursor-pointer inline-block"
                                style={{ position: "relative" }}
                              >
                                <button
                                  class={`w-4 h-4 rounded-sm ${bgColor} hover:ring-2 hover:ring-blue-300 transition-all`}
                                  type="button"
                                  data-tooltip={`${count} on ${day.date}`}
                                  onMouseEnter={(e) => {
                                    const tooltip = e.target.nextElementSibling;
                                    if (tooltip) tooltip.style.opacity = "1";
                                  }}
                                  onMouseLeave={(e) => {
                                    const tooltip = e.target.nextElementSibling;
                                    if (tooltip) tooltip.style.opacity = "0";
                                  }}
                                ></button>
                                {/* Simple Tooltip */}
                                <div
                                  style={{
                                    position: "absolute",
                                    bottom: "100%",
                                    left: "-10px",
                                    marginBottom: "8px",
                                    padding: "4px 8px",
                                    background: "#111827",
                                    border: "1px solid rgba(96, 165, 250, 0.5)",
                                    borderRadius: "4px",
                                    fontSize: "12px",
                                    color: "#bfdbfe",
                                    whiteSpace: "nowrap",
                                    zIndex: "9999",
                                    opacity: "0",
                                    transition: "opacity 0.2s ease",
                                    pointerEvents: "none",
                                  }}
                                >
                                  {count} on {day.date}
                                </div>
                              </div>
                            );
                          }}
                        </For>
                      </div>

                      {/* Legend */}
                      <div class="flex items-center gap-2 justify-end mt-6">
                        <p class="text-xs text-blue-300/60">Less</p>
                        <div class="flex gap-1">
                          <div class="w-3 h-3 bg-slate-800/80 rounded-sm"></div>
                          <div class="w-3 h-3 bg-green-900/60 rounded-sm"></div>
                          <div class="w-3 h-3 bg-green-700/70 rounded-sm"></div>
                          <div class="w-3 h-3 bg-green-600/80 rounded-sm"></div>
                          <div class="w-3 h-3 bg-green-500/90 rounded-sm"></div>
                        </div>
                        <p class="text-xs text-blue-300/60">More</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GitHub;