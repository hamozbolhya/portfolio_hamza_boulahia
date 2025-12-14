import { For, createSignal, onMount } from "solid-js";
import CATBanner from "./Hero/CTABanner";
import GitHub from "./Hero/GitHub";
import StatsSection from "./Hero/Stats";
import { stats, titles } from "../data/hero";
import { contactInfo, skills } from "../data/nav";

export default function Hero() {
  const [scrollY, setScrollY] = createSignal(0);
  const [titleIndex, setTitleIndex] = createSignal(0);
  const [contributions, setContributions] = createSignal(null);
  const [contributionGraph, setContributionGraph] = createSignal(null);
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Rotate titles every 4 seconds
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);

    // Fetch GitHub contributions
    fetchGitHubContributions();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(titleInterval);
    };
  });

  // Fetch GitHub contributions data
  async function fetchGitHubContributions() {
    try {
      // Your GitHub username
      const response = await fetch("https://api.github.com/users/hamozbolhya");
      const data = await response.json();

      // Fetch contribution graph using GraphQL
      const graphQLQuery = {
        query: `
          query {
            user(login: "hamozbolhya") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
      };

      const graphQLResponse = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN || ""}`,
        },
        body: JSON.stringify(graphQLQuery),
      });

      const graphQLData = await graphQLResponse.json();

      let totalContributions = 0;
      if (
        graphQLData.data?.user?.contributionsCollection?.contributionCalendar
      ) {
        totalContributions =
          graphQLData.data.user.contributionsCollection.contributionCalendar
            .totalContributions;
        setContributionGraph(
          graphQLData.data.user.contributionsCollection.contributionCalendar
        );
      }

      setContributions({
        totalContributions: totalContributions,
        followers: data.followers,
        following: data.following,
        username: data.login,
        avatar: data.avatar_url,
        bio: data.bio,
        location: data.location,
        publicRepos: data.public_repos,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      setLoading(false);
      // Fallback data
      setContributions({
        totalContributions: 93,
        followers: 0,
        following: 0,
        username: "hamozbolhya",
        avatar: "https://avatars.githubusercontent.com/u/hamozbolhya?v=4",
        publicRepos: 0,
      });
    }
  }

  return (
    <section
      id="home"
      class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Animated gradient background orbs */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-purple-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div
            class="text-center mb-16"
            style={{
              opacity: Math.max(0.5, 1 - scrollY() / 400),
              transform: `translateY(${scrollY() * 0.1}px)`,
            }}
          >
            <div class="inline-block mb-6">
              <div class="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300">
                <p class="text-sm font-semibold text-blue-300">
                  👋 Welcome to my portfolio
                </p>
              </div>
            </div>

            {/* Animated Title */}
            <div class="h-48 md:h-56 flex items-center justify-center mb-8 relative">
              <For each={titles}>
                {(title, index) => (
                  <h1
                    class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold absolute text-center transition-all duration-700 leading-tight"
                    style={{
                      opacity: index() === titleIndex() ? 1 : 0,
                      transform:
                        index() === titleIndex()
                          ? "translateY(0) scale(1)"
                          : index() < titleIndex()
                          ? "translateY(-80px) scale(0.8)"
                          : "translateY(80px) scale(0.8)",
                      pointerEvents: index() === titleIndex() ? "auto" : "none",
                    }}
                  >
                    <span class="text-white block">
                      {title.split(" ").slice(0, -1).join(" ")}
                    </span>
                    <span class="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {title.split(" ").pop()}
                    </span>
                  </h1>
                )}
              </For>
            </div>

            <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
              Crafting scalable web & mobile applications with expertise in{" "}
              <span class="text-white font-bold">
                banking, fintech, retail, and enterprise
              </span>{" "}
              sectors
            </p>

            {/* Skills Badges */}
            <div class="flex flex-wrap justify-center gap-3">
              <For each={skills}>
                {(skill) => (
                  <div class="group px-4 py-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-400/50 rounded-full hover:from-blue-600/50 hover:to-purple-600/50 hover:border-blue-300/80 transition-all duration-200 backdrop-blur-sm cursor-default hover:scale-105">
                    <span class="text-sm font-medium text-blue-100 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </div>

          {/* GitHub Stats Card */}
          <GitHub
            loading={loading}
            contributions={contributions}
            contributionGraph={contributionGraph}
          />

          {/* Stats Grid */}
          <StatsSection stats={stats} />

          {/* CTA Banner */}
          <div class="relative overflow-hidden rounded-2xl">
            <CATBanner contactInfo={contactInfo} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
