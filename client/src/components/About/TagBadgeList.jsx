const tags = ["JavaScript", "React", "TailwindCSS", "VSCode", "Git"];

export default function TagBadgeList() {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-xs bg-cyan-700/30 border border-cyan-600 text-cyan-300 px-2 py-0.5 rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
