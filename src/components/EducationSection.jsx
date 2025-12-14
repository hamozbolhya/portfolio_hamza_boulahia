import { For, createSignal } from "solid-js";
import {
  Calendar,
  MapPin,
  School,
  BookOpen,
  Star,
  CheckCircle2,
  Clock,
  Flame,
} from "lucide-solid";
import { certifications, dailyLearning, educationData } from "../data/educationData";

export const EducationSection = () => {
  const [activeTab, setActiveTab] = createSignal("formal");

  return (
    <section
      id="education"
      class="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent"
    >
      <div class="max-w-7xl mx-auto">
        {/* Section Header */}
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-400/30">
            <BookOpen class="w-6 h-6 text-blue-400" />
            <span class="text-sm font-semibold text-blue-300">
              Learning & Growth
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Education{" "}
            <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p class="text-blue-100/70 max-w-3xl mx-auto text-lg">
            From formal education to continuous learning — preparing for
            industry's most prestigious certifications while mastering emerging
            technologies every single day
          </p>
        </div>

        {/* Tab Navigation */}
        {/* <div class="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("formal")}
            class={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab() === "formal"
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/40"
                : "bg-blue-950/30 text-blue-200 border border-blue-400/30 hover:border-blue-400/60"
            }`}
          >
            <span class="flex items-center gap-2">
              <GraduationCap class="w-5 h-5" />
              Formal Education
            </span>
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            class={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab() === "certifications"
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/40"
                : "bg-blue-950/30 text-blue-200 border border-blue-400/30 hover:border-blue-400/60"
            }`}
          >
            <span class="flex items-center gap-2">
              <Award class="w-5 h-5" />
              Professional Certifications
            </span>
          </button>
          <button
            onClick={() => setActiveTab("daily")}
            class={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab() === "daily"
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/40"
                : "bg-blue-950/30 text-blue-200 border border-blue-400/30 hover:border-blue-400/60"
            }`}
          >
            <span class="flex items-center gap-2">
              <Flame class="w-5 h-5" />
              Daily Learning
            </span>
          </button>
        </div> */}

        {/* Formal Education Cards */}
        {activeTab() === "formal" && (
          <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 animate-fadeIn">
            <For each={educationData}>
              {(edu) => (
                <div
                  class={`group relative ${edu.bgColor} rounded-2xl p-6 md:p-8 border ${edu.borderColor} hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 backdrop-blur-sm overflow-hidden`}
                >
                  {/* Decorative Corner */}
                  <div class="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      class={`absolute top-0 right-0 w-40 h-40 transform rotate-45 translate-x-10 -translate-y-10 bg-gradient-to-br ${edu.color} opacity-20 blur-2xl`}
                    ></div>
                  </div>

                  {/* Degree Icon */}
                  <div
                    class={`w-14 h-14 rounded-xl ${edu.bgColor} border ${edu.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  >
                    <edu.icon class={`w-7 h-7 ${edu.iconColor}`} />
                  </div>

                  {/* Degree Title */}
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-3 relative z-10">
                    {edu.degree}
                  </h3>

                  {/* Institution & Location */}
                  <div class="space-y-3 mb-6 relative z-10">
                    <div class="flex items-center gap-2">
                      <School class={`w-4 h-4 ${edu.iconColor}`} />
                      <span class="text-blue-200 font-medium">
                        {edu.institution}
                      </span>
                    </div>
                    <div class="flex items-center gap-2">
                      <MapPin class={`w-4 h-4 ${edu.iconColor}`} />
                      <span class="text-blue-100/80">{edu.location}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Calendar class={`w-4 h-4 ${edu.iconColor}`} />
                      <span class="text-blue-100/80 font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p class="text-blue-100/70 mb-6 leading-relaxed relative z-10">
                    {edu.description}
                  </p>

                  {/* Tags */}
                  <div class="flex flex-wrap gap-2 relative z-10">
                    <For each={edu.tags}>
                      {(tag) => (
                        <span
                          class={`px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 border ${edu.borderColor} text-blue-200 hover:bg-blue-500/30 transition-colors`}
                        >
                          {tag}
                        </span>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        )}

        {/* Professional Certifications */}
        {activeTab() === "certifications" && (
          <div class="space-y-6 mb-12 animate-fadeIn">
            <For each={certifications}>
              {(cert) => (
                <div
                  class={`group relative ${cert.bgColor} rounded-2xl p-6 md:p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/15 backdrop-blur-sm overflow-hidden`}
                >
                  <div class="flex flex-col md:flex-row gap-8 relative z-10">
                    {/* Icon Section */}
                    <div class="flex-shrink-0">
                      <div
                        class={`w-20 h-20 rounded-xl bg-gradient-to-br ${cert.color} p-0.5`}
                      >
                        <div class="w-full h-full rounded-lg bg-blue-950 flex items-center justify-center">
                          <cert.icon class={`w-10 h-10 ${cert.iconColor}`} />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div class="flex-1">
                      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 class="text-2xl font-bold text-white mb-2">
                            {cert.title}
                          </h3>
                          <p class="text-blue-200 font-medium mb-2">
                            {cert.provider}
                          </p>
                          <p class="text-blue-100/70">{cert.description}</p>
                        </div>
                        <div class="text-right">
                          <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 rounded-lg">
                            <Clock class="w-4 h-4 text-green-400" />
                            <span class="text-sm font-semibold text-green-300">
                              {cert.dueDate}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div class="flex flex-wrap gap-2 mb-6">
                        <For each={cert.skills}>
                          {(skill) => (
                            <span
                              class={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} bg-opacity-20 border border-blue-400/30 text-blue-200`}
                            >
                              {skill}
                            </span>
                          )}
                        </For>
                      </div>

                      {/* Progress Bar */}
                      <div class="w-full">
                        <div class="flex items-center justify-between mb-2">
                          <span class="text-sm font-semibold text-blue-300">
                            Preparation Progress
                          </span>
                          <span class="text-sm font-bold text-white">
                            {cert.progress}%
                          </span>
                        </div>
                        <div class="w-full h-2 bg-blue-950/50 rounded-full overflow-hidden border border-blue-400/20">
                          <div
                            class={`h-full bg-gradient-to-r ${cert.color} transition-all duration-500`}
                            style={{ width: `${cert.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        )}

        {/* Daily Learning Streams */}
        {activeTab() === "daily" && (
          <div class="space-y-8 mb-12 animate-fadeIn">
            <div class="bg-gradient-to-r from-blue-950/40 to-purple-950/40 rounded-2xl p-8 border border-blue-400/30 backdrop-blur-sm">
              <h3 class="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <Flame class="w-8 h-8 text-orange-400" />
                Daily Learning Commitment
              </h3>
              <p class="text-blue-100/80 mb-6">
                Every single day, I dedicate time to mastering different
                domains. These learning streaks represent consistent growth and
                preparation for major industry certifications.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <For each={dailyLearning}>
                {(learning) => (
                  <div
                    class={`group relative bg-gradient-to-br ${learning.color
                      .replace("from-", "from-opacity-10 ")
                      .replace(
                        " to-",
                        "/10 to-opacity-10 "
                      )}/10 rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm overflow-hidden`}
                  >
                    {/* Background Gradient */}
                    <div
                      class={`absolute inset-0 bg-gradient-to-br ${learning.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div class="relative z-10">
                      <div class="flex items-start justify-between mb-4">
                        <div
                          class={`w-12 h-12 rounded-lg bg-gradient-to-br ${learning.color} p-0.5`}
                        >
                          <div class="w-full h-full rounded-md bg-blue-950 flex items-center justify-center">
                            <learning.icon class="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div class="flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-400/40 rounded-full">
                          <Flame class="w-4 h-4 text-orange-400" />
                          <span class="text-sm font-bold text-orange-300">
                            {learning.streak} days
                          </span>
                        </div>
                      </div>

                      <h4 class="text-lg font-bold text-white mb-4">
                        {learning.category}
                      </h4>

                      <div class="space-y-2">
                        <For each={learning.topics}>
                          {(topic) => (
                            <div class="flex items-center gap-2">
                              <CheckCircle2 class="w-4 h-4 text-green-400" />
                              <span class="text-blue-200 text-sm">{topic}</span>
                            </div>
                          )}
                        </For>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        )}

        {/* Bottom Motivational Banner */}
        <div class="bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-pink-950/40 rounded-2xl p-8 md:p-10 border border-blue-400/30 backdrop-blur-sm mt-12">
          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">
              <Star class="w-10 h-10 text-yellow-400 animate-pulse" />
            </div>
            <div class="flex-1 text-center md:text-left">
              <h4 class="text-2xl font-bold text-white mb-2">
                Continuous Growth mindset
              </h4>
              <p class="text-blue-100/80 leading-relaxed">
                Education doesn't stop after graduation.
                {/* <span class="text-white font-semibold">AWS Solutions Architect</span>,
                 <span class="text-white font-semibold">Google Cloud Professional Data Engineer</span>,
                  and <span class="text-white font-semibold">CKAD</span> */}
                . Every day, I learn something new across cloud architecture,
                data engineering, DevOps, and machine learning. This commitment
                to continuous learning ensures I stay ahead of the curve and
                deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default EducationSection;
