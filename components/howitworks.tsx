import { User, Bookmark, Brain, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <User className="h-6 w-6 text-white" />,
      step: "Step 1",
      title: "Select Your Interests",
      description:
        "Choose from categories like technology, finance, sports, or science.",
    },
    {
      icon: <Bookmark className="h-6 w-6 text-white" />,
      step: "Step 2",
      title: "Receive Daily Briefings",
      description:
        "Get AI-curated 1-minute summaries of the most important news in your feed.",
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      step: "Step 3",
      title: "Test Your Knowledge",
      description:
        "Engage with adaptive quizzes that grow with your understanding.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      step: "Step 4",
      title: "Ask & Explore",
      description:
        "Use AI chat to dive deeper into any topic that catches your interest.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-green-500/10 blur-[100px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transform Your Learning
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            In just a few minutes a day, you&apos;ll build knowledge that
            normally takes hours of reading.
          </p>
        </div>

        <div className="mt-16 flow-root">
          <div className="-mx-4 -my-10 sm:-mx-6 lg:-mx-8">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-gray-800 via-gray-400/20 to-gray-800"></div>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                  <div key={index} className="relative pl-8 pr-6">
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500">
                      {step.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-400">
                        {step.step}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
