const skills = [
  { label: "React", level: 90 },
  { label: "TailwindCSS", level: 85 },
  { label: "Git", level: 70 },
];

export default function SkillStats() {
  return (
    <div className="mt-6 p-4 border border-cyan-700 bg-[#11111b] rounded-lg">
      <h3 className="text-cyan-400 font-semibold text-sm mb-2">
        📊 Skill Stats
      </h3>
      {skills.map((s, i) => (
        <div key={i} className="mb-3">
          <div className="flex justify-between text-xs text-gray-300">
            <span>{s.label}</span>
            <span>{s.level}%</span>
          </div>
          <div className="w-full bg-gray-800 h-2 rounded-full mt-1">
            <div
              className="h-2 bg-cyan-500 rounded-full"
              style={{ width: `${s.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
