const statsData = [
  {
    value: "4.2/5.0",
    label: "Flow State",
    description: "High productivity levels",
  },
  {
    value: "Work Tasks",
    label: "Top Category",
    description: "45% of total activity",
  },
  {
    value: "12 days",
    label: "Current Streak",
    description: "Zero missed daily goals",
  },
];

export default function LandingMetrics() {
  return (
    <div className="px-50">
      <div className="flex flex-row justify-between border-2 border-gray-200 rounded-xl p-4 px-30  ">
        {statsData.map((item, index) => (
          <div key={item.label} className="flex flex-row items-center">
            <div className="flex flex-col pr-16">
              <span className="font-semibold">{item.label}</span>
              <span className="font-bold  text-3xl">{item.value}</span>
              <span>{item.description}</span>
            </div>

            {index < statsData.length - 1 && (
              <div className="w-px h-16 bg-gray-300 mx-8"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
