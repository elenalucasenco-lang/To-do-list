import {
  Activity,
  Clock,
  Flame,
  Layers,
  Sparkles,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function DailyTracks() {
  const stats = [
    {
      icon: Activity,
      badge: "Active",
      value: "24",
      unit: "tasks",
      title: "Tasks Completed",
      description: "Total items checked off your daily to-do list.",
      footer: { type: "trend", text: "+12% this week" },
    },
    {
      icon: Clock,
      badge: "Focused",
      value: "480",
      unit: "min",
      title: "Focus Minutes",
      description: "Time spent in deep work mode on your projects.",
      footer: { type: "trend", text: "+60 min vs avg" },
    },
    {
      icon: Flame,
      badge: "On Track",
      value: "85%",
      suffix: "target 80%",
      title: "Daily Goal",
      description: "Consistency in hitting your daily task targets.",
      footer: { type: "progress", percent: 85, text: "4 of 5 days met" },
    },
    {
      icon: Layers,
      badge: "Ongoing",
      value: "3/5",
      unit: "categories",
      title: "Active Projects",
      description: "Work, Personal, Health, Study, and Creative.",
      footer: {
        type: "tags",
        tags: ["Work", "Personal", "Health"],
        text: "Balanced flow",
      },
    },
  ];
  return (
    <div className="flex items-start gap-2 flex-col px-60">
      <div className="w-fit animate-[pulse_2s_ease-in-out_infinite] flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
        <Sparkles className="h-4 w-4 animate-pulse text-purple-600" />
        <span>Flowly Insights</span>
      </div>

      <span className="animate-[fadeIn_0.8s_ease-out] text-5xl font-bold">
        Track your daily flow and stay on
        <br />
        target.
      </span>
      <span className="pt-3">
        Monitor your task completion, focus time, and streaks to keep your
        momentum
        <br />
        steady every single day.
      </span>
      <div className="flex flex-row gap-5 w-full mt-10  ">
        {stats.map((item) => (
          <div
            key={item.title}
            className="border-2 border-gray-200 rounded-xl flex  flex-col w-100  h-auto p-4"
          >
            <div className="flex justify-between items-center w-full gap-2">
              <item.icon className="text-purple-600 size-10 bg-purple-100 p-2 rounded-lg  " />
              <span className="text-purple-600 bg-purple-100 p-1 rounded-xl px-2">
                {item.badge}
              </span>
            </div>

            <div className="flex flex-row gap-1 items-center pt-4">
              <span className="font-bold text-4xl">{item.value}</span>
              <span className="pt-2">{item.unit}</span>
            </div>
            <span className="font-bold pb-2">{item.title}</span>
            <span className="pb-15">{item.description}</span>

            <div className="bg-gray-300 w-full h-0.5"></div>

            {item.footer.type === "trend" && (
              <div className="flex flex-row items-center gap-2 mt-5">
                <TrendingUp size={14} className="text-purple-600" />
                <span>{item.footer.text}</span>
              </div>
            )}

            {item.footer.type === "progress" && (
              <div>
                <div className="flex mt-4 flex-row  justify-between">
                  <span>Goal Progress</span>
                  <span>{item.footer.percent}%</span>
                </div>

                <div className="rounded-xl mt-2 border-2  border-gray-100">
                  <div
                    className="bg-purple-400 h-2 rounded-xl"
                    style={{ width: `${item.footer.percent}%` }}
                  ></div>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <CheckCircle size={14} className="text-purple-600" />
                  <span>{item.footer.text}</span>
                </div>
              </div>
            )}

            {item.footer.type === "tags" && (
              <div className="mt-4">
                <div className="flex flex-row gap-3">
                  {item.footer.tags?.map((tag) => (
                    <span key={tag}  className="text-purple-600 bg-purple-100 p-1 rounded-xl px-2">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-row items-center gap-2 mt-5">
                <TrendingUp size={14} className="text-purple-600" />
                <span>{item.footer.text}</span>
              </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

