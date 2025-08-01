import {
  LightningBoltIcon,
  AcademicCapIcon,
  ChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

export function Features() {
  const features = [
    {
      icon: <LightningBoltIcon className="w-8 h-8" />,
      title: "1-Minute Reads",
      description: "AI-summarized news tailored to your interests",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: "Daily Knowledge Boost",
      description: "Learn something new with curated 'Did You Know' facts",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Smart Insights",
      description: "AI-powered analysis of market trends and news",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "Personalized Quizzes",
      description: "Reinforce learning with adaptive knowledge checks",
      gradient: "from-yellow-500 to-red-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-7xl py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-4">
          Supercharge Your Learning
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          AI-powered features designed to maximize your knowledge retention
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

            <div
              className={`flex items-center justify-center w-14 h-14 rounded-lg mb-6 bg-gradient-to-br ${feature.gradient} p-1`}
            >
              <div className="flex items-center justify-center w-full h-full bg-background rounded-md text-primary">
                {feature.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.gradient}" />
          </div>
        ))}
      </div>
    </div>
  );
}
