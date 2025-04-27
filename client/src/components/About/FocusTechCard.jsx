import MiniTag from "../MiniTag";

export default function FocusTechCard({
  img,
  title,
  description,
  progress,
  tag,
}) {
  return (
    <div className="flex flex-row">
      <div className="flex-shrink-0 mr-4">
        <img
          src={img}
          alt="Focus Tech"
          className="w-[96px] h-[96px] rounded-lg object-cover mb-4"
        />
      </div>
      <div className="text-sm flex-grow text-gray-300 space-y-1">
        <h3 className="text-[14px] font-mono text-cyanNeon">{title}</h3>
        <p className="font-mono text-[14px] text-neutral-500">{description}</p>
        <div className="flex items-start justify-between mt-4">
          <p>Progress</p>
          <div>{progress}%</div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
          <div
            className="bg-cyanNeon h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div>
          {tag.map((tag, index) => (
            <MiniTag key={index} text={tag} color="cyan" />
          ))}
        </div>
      </div>
    </div>
  );
}
