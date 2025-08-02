import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Learner.ai has completely changed how I stay informed. I get more value from 5 minutes with this app than 30 minutes scrolling news sites.",
      name: "Sarah K.",
      role: "Tech Entrepreneur",
      img: "/placeholder-avatar1.jpg",
    },
    {
      quote:
        "The investment insights alone are worth it. I've made better decisions thanks to the AI's analysis of market news.",
      name: "Michael T.",
      role: "Financial Analyst",
      img: "/placeholder-avatar2.jpg",
    },
    {
      quote:
        "As someone who hated quizzes in school, I'm shocked by how much I enjoy the knowledge challenges. They're actually fun!",
      name: "Priya M.",
      role: "UX Designer",
      img: "/placeholder-avatar3.jpg",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Knowledge Seekers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join thousands who are learning more in less time every day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:bg-gray-900 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gray-800 group-hover:text-radium-500/30" />
              <div className="relative">
                <p className="text-lg leading-relaxed text-gray-300">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-radium-500 p-0.5">
                    <div className="h-full w-full rounded-full bg-gray-900"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
