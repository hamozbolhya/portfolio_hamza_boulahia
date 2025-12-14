import { For, createSignal } from "solid-js";

const ProjectsShowcase = ({ projects }) => {
  const [hoveredId, setHoveredId] = createSignal(null);

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4">
      <For each={projects}>
        {(project, index) => (
          <div
            class="group relative h-96 cursor-pointer"
            style={{
              "animation-delay": `${index() * 100}ms`,
            }}
            onMouseEnter={() => setHoveredId(project.id || index())}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Card Container */}
            <div class="relative w-full h-full rounded-2xl overflow-hidden border border-blue-400/30 hover:border-blue-400/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/40 backdrop-blur-md">
              
              {/* Animated border glow */}
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-purple-400/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-20"></div>

              {/* Full Height Image Background */}
              <div class="absolute inset-0 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {!project.image && (
                  <div class="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950"></div>
                )}
              </div>

              {/* Overlay with gradient - Always present */}
              <div class="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/70 to-transparent"></div>

              {/* Content Overlay - Positioned at bottom */}
              <div class="absolute inset-0 flex flex-col justify-end p-5 md:p-6 z-10">
                
                {/* Header Section */}
                <div class="mb-4">
                  {/* Company/Type Badge */}
                  <div class="mb-3 inline-block">
                    <span class={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all backdrop-blur-sm ${
                      project.type === "company"
                        ? "bg-blue-500/50 text-blue-100 border border-blue-400/60"
                        : project.type === "freelance"
                        ? "bg-purple-500/50 text-purple-100 border border-purple-400/60"
                        : "bg-pink-500/50 text-pink-100 border border-pink-400/60"
                    } group-hover:scale-105 group-hover:border-current transition-all`}>
                      {project.type === "company" && (
                        <>
                          <span>🏢</span>
                          <span>{project.company}</span>
                        </>
                      )}
                      {project.type === "freelance" && (
                        <>
                          <span>👤</span>
                          <span>Freelance</span>
                        </>
                      )}
                      {project.type === "personal" && (
                        <>
                          <span>⭐</span>
                          <span>Personal</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 class="text-2xl md:text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors line-clamp-2">
                    {project.name}
                  </h3>

                  {/* Description */}
                  {project.description && (
                    <p class="text-blue-100/70 text-sm mb-3 line-clamp-2 group-hover:text-blue-100 transition-colors">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Skills Section */}
                <div class="mb-4">
                  <div class="flex flex-wrap gap-2">
                    <For each={project.skills.slice(0, 4)}>
                      {(skill) => (
                        <span class="px-2.5 py-1 bg-blue-500/40 border border-blue-400/50 text-blue-100 text-xs font-medium rounded-lg backdrop-blur-sm group-hover:bg-blue-500/60 group-hover:border-blue-400/70 transition-all">
                          {skill}
                        </span>
                      )}
                    </For>
                    {project.skills.length > 4 && (
                      <span class="px-2.5 py-1 bg-blue-500/40 border border-blue-400/50 text-blue-100 text-xs font-medium rounded-lg backdrop-blur-sm">
                        +{project.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Links/Actions */}
                {(project.github || (project.link && project.showLiveDemo)) && (
                  <div class="flex gap-3 pt-4 border-t border-blue-400/30">
                    {project.link && project.showLiveDemo && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 px-3 py-2 bg-blue-600/50 hover:bg-blue-600/70 border border-blue-400/60 hover:border-blue-300 text-white text-sm font-semibold rounded-lg transition-all duration-200 text-center group-hover:scale-105 backdrop-blur-sm"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 px-3 py-2 bg-purple-600/50 hover:bg-purple-600/70 border border-purple-400/60 hover:border-purple-300 text-white text-sm font-semibold rounded-lg transition-all duration-200 text-center group-hover:scale-105 backdrop-blur-sm"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default ProjectsShowcase;