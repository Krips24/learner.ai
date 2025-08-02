import { BrainCircuit, Zap, BarChart2, BookOpen } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-radium-400" />,
      title: "1-Minute AI Summaries",
      description:
        "Get the essence of any news story distilled into key points you can read in under a minute.",
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-blue-400" />,
      title: "Personalized Knowledge Quizzes",
      description:
        "Five progressive levels of quizzes tailored to your interests and reading history.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-radium-400" />,
      title: "Investment Insights",
      description:
        "AI-powered market analysis and suggestions based on the latest financial news.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-400" />,
      title: "Daily Learning Bites",
      description:
        "Curated 'Did You Know?' facts that expand your knowledge in your chosen topics.",
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-radium-500/10 blur-[80px]"></div>
      <div className="absolute bottom-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learn Smarter, Not Harder
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Learner.ai combines cutting-edge AI with cognitive science to
            deliver information in the most efficient way possible.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:bg-gray-900 hover:shadow-lg hover:shadow-radium-500/10"
            >
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold leading-7 text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
              <div className="absolute -left-px -top-px h-px w-0 bg-gradient-to-r from-blue-400/0 via-blue-400 to-radium-400/0 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
