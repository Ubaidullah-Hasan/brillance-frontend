import FeaturesCard from "../ui/FeaturesCard";

export default function Features() {
  const featuresData = [
    {
      id: 1,
      title: "Plan your schedules",
      description:
        "Streamline customer subscriptions and billing with automated scheduling tools.",
      image: "./src/assets/images/services/plan-your-schedules.jpeg",
    },
    {
      id: 2,
      title: "Analytics & insights",
      description:
        "Transform your business data into actionable insights with real-time analytics.",
      image:
        "./src/assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg",
    },
    {
      id: 3,
      title: "Collaborate seamlessly",
      description:
        "Keep your team aligned with shared dashboards and collaborative workflows.",
      image:
        "./src/assets/images/services/data-visualization-dashboard-with-interactive-char.jpg",
    },
  ];

  return (
    <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
      {featuresData.map((feature) => (
        <FeaturesCard key={feature?.id} feature={feature} />
      ))}
    </div>
  );
}
