const journey = [
  { date: "01/2024", text: "Bắt đầu học lập trình cơ bản", icon: "🧑‍💻" },
  { date: "02/2024", text: "Làm bài tập web đầu tiên", icon: "📄" },
  { date: "03/2024", text: "Dự án nhóm đầu tiên", icon: "👥" },
];

export default function CodingJourney() {
  return (
    <div className="mt-6 p-4 rounded-lg border border-indigo-600 bg-[#12121e]">
      <h3 className="text-indigo-400 font-semibold text-sm mb-2">
        🚶‍♂️ Coding Journey
      </h3>
      <ul className="space-y-3">
        {journey.map((item, i) => (
          <li key={i} className="flex items-start space-x-3">
            <span className="text-lg">{item.icon}</span>
            <div>
              <p className="text-sm text-gray-300">{item.text}</p>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
