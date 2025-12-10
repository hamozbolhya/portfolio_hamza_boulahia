// src/components/Experience.jsx
import { For, Show } from 'solid-js';

export default function Experience() {
  const experienceData = [
    {
      title: 'Full Stack Engineer',
      company: 'Exia Technologies',
      location: 'Casablanca',
      period: 'Jul 2022 – Present',
      duration: '2+ years',
      isCurrentRole: true,
      technologies: ['React', 'React Native', 'Angular', 'Spring Boot', 'TypeScript', 'Node.js'],
      achievements: [
        'Architected full-stack solutions using React, Angular, React Native & Spring Boot',
        'Mentored junior developers through code reviews and best practices',
        'Led integration of advanced technologies including AI and OCR',
        'Reduced critical bugs by 25% through rigorous testing protocols'
      ]
    },
    {
      title: 'React & React Native Developer',
      company: '2WLS',
      location: 'Casablanca',
      period: 'Previous Position',
      duration: '2 years',
      isCurrentRole: false,
      technologies: ['React', 'React Native', 'Docker', 'JavaScript'],
      achievements: [
        'Optimized development workflows using Docker',
        'Maintained production applications supporting thousands of users',
        'Implemented responsive designs and improved performance metrics'
      ]
    }
  ];

  return (
    <section id="experience" class="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-x-1/2"></div>
        <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-15 translate-x-1/2"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          {/* Section Header */}
          <div class="text-center mb-16">
            <div class="inline-block mb-4">
              <div class="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full backdrop-blur-sm">
                <p class="text-sm font-semibold text-blue-300">💼 Professional Journey</p>
              </div>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">Work Experience</h2>
            <p class="text-lg text-blue-100/80 max-w-2xl mx-auto">4+ years of building scalable, enterprise-grade applications across various sectors</p>
          </div>

          {/* Timeline */}
          <div class="relative">
            {/* Timeline line */}
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 md:transform md:-translate-x-1/2 shadow-lg shadow-blue-500/50"></div>

            {/* Experience Cards */}
            <div class="space-y-12">
              <For each={experienceData}>
                {(exp, index) => (
                  <div class="relative">
                    {/* Timeline dot */}
                    <div class="absolute left-0 md:left-1/2 -top-0 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                      <div class={`w-5 h-5 rounded-full border-4 border-slate-900 ${
                        exp.isCurrentRole 
                          ? 'bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg shadow-blue-400/60' 
                          : 'bg-gradient-to-br from-gray-500 to-gray-600 shadow-lg shadow-gray-500/40'
                      } transition-all duration-300 hover:scale-125`}></div>
                    </div>

                    {/* Card */}
                    <div class={`md:w-1/2 ${index() % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'} ml-8 md:ml-0`}>
                      <div class="group relative bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-slate-950/40 rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm overflow-hidden">
                        {/* Glow effect on hover */}
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        
                        {/* Animated border glow */}
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-20"></div>

                        {/* Header */}
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                          <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                              <h3 class="text-2xl font-bold text-blue-100">{exp.title}</h3>
                              <Show when={exp.isCurrentRole}>
                                <span class="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/50">
                                  CURRENT
                                </span>
                              </Show>
                            </div>
                            <div class="space-y-1">
                              <p class="text-lg font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">{exp.company}</p>
                              <div class="flex flex-wrap items-center gap-2 text-blue-100/70">
                                <span class="inline-flex items-center gap-1">
                                  <span>📍</span>
                                  <span>{exp.location}</span>
                                </span>
                                <span class="text-blue-400/50">•</span>
                                <span class="inline-flex items-center gap-1">
                                  <span>⏱️</span>
                                  <span>{exp.duration}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="px-4 py-2 bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-400/40 text-blue-200 rounded-lg font-medium text-sm whitespace-nowrap backdrop-blur-sm">
                            {exp.period}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div class="mb-6 relative z-10">
                          <p class="text-xs font-semibold text-blue-300/70 mb-3 uppercase tracking-wider">Technologies</p>
                          <div class="flex flex-wrap gap-2">
                            <For each={exp.technologies}>
                              {(tech) => (
                                <span class="px-3 py-1.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 hover:border-blue-400/60 hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-200 cursor-default">
                                  {tech}
                                </span>
                              )}
                            </For>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div class="relative z-10">
                          <p class="text-xs font-semibold text-blue-300/70 mb-3 uppercase tracking-wider">Key Achievements</p>
                          <ul class="space-y-3">
                            <For each={exp.achievements}>
                              {(achievement) => (
                                <li class="flex items-start gap-3 group/item">
                                  <span class="text-blue-400 font-bold mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 group-hover/item:text-purple-400 transition-all duration-200">→</span>
                                  <span class="text-blue-100/80 leading-relaxed group-hover/item:text-blue-100 transition-colors duration-200">{achievement}</span>
                                </li>
                              )}
                            </For>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}