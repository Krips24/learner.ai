// app/dashboard/page.tsx
"use client";

import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import {
  Sparkles,
  BookOpen,
  Zap,
  User,
  Flame,
  Target,
  TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Dashboard() {
  const router = useRouter();

  const cards = [
    {
      title: "Latest News",
      description: "Stay updated with personalized news feed",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-500",
      onClick: () => router.push("/news"),
    },
    {
      title: "Daily Quiz",
      description: "Test your knowledge and earn points",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-purple-500",
      onClick: () => router.push("/quiz"),
    },
    {
      title: "AI Assistant",
      description: "Get summaries and insights instantly",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-green-500",
      onClick: () => router.push("/ai"),
    },
    {
      title: "My Profile",
      description: "View your progress and settings",
      icon: <User className="w-6 h-6" />,
      color: "bg-amber-500",
      onClick: () => router.push("/profile"),
    },
  ];

  // Stats with improved metrics
  const stats = [
    {
      name: "Active Streak",
      value: "7 days",
      icon: <Flame className="h-5 w-5 text-amber-500" />,
      trend: "up",
      change: "+2 days",
    },
    {
      name: "Weekly Engagement",
      value: "85%",
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
      trend: "up",
      change: "+5%",
    },
    {
      name: "Quiz Accuracy",
      value: "78%",
      icon: <Target className="h-5 w-5 text-blue-500" />,
      trend: "neutral",
      change: "±0%",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white mt-14">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, User!</h1>
          <p className="text-gray-400">
            Here&apos;s what&apos;s happening today
          </p>
        </section>

        {/* Quick Stats */}
        <section className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-700/50">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{stat.name}</p>
                    <p className="font-medium text-lg">{stat.value}</p>
                    <p
                      className={`text-xs mt-1 ${
                        stat.trend === "up"
                          ? "text-green-400"
                          : stat.trend === "down"
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                    >
                      {stat.change}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* New Section */}

        {/* Feature Cards */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={card.onClick}
                className={`group relative overflow-hidden rounded-xl p-6 text-left transition-all duration-300 hover:scale-[1.02] ${card.color}/10 hover:${card.color}/20 border border-gray-800`}
              >
                <div
                  className={`absolute -top-5 -right-5 w-20 h-20 rounded-full ${card.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>
                <div className={`p-3 rounded-lg w-fit mb-4 ${card.color}/20`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.description}</p>
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
