export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Learner.ai helped me stay informed during my commute. The 1-minute summaries are a game-changer!",
      author: "Sarah K.",
      role: "Financial Analyst",
    },
    {
      quote:
        "I've never retained so much current affairs knowledge. The daily quizzes make learning addictive.",
      author: "Raj P.",
      role: "Medical Student",
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Loved by <span className="text-primary">Learners</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-background border border-border rounded-xl p-6"
          >
            <p className="text-lg italic mb-6">{testimonial.quote}</p>
            <div>
              <p className="font-medium">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
