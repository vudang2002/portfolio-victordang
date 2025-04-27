import React from "react";

export default function StatCard({
  icon,
  buttonTag,
  description,
  contentLeft,
  contentRight,
  color,
}) {
  return (
    <div
      className={`border-t-4 border border-${color}  p-4 rounded-lg shadow-md`}
    >
      <div className="flex items-center justify-between mb-2">
        <div> {icon}</div>
        <div className="text-[12px]">{buttonTag}</div>
      </div>
      <div className={`text-3xl text-${color} font-bold`}>
        {description.number}
      </div>
      <div className="  font-mono text-neutral-400 text-[12px] mb-2">
        {description.text}
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <div className=" font-mono text-neutral-400 text-[12px]">
            {contentLeft.title}
          </div>
          <div className={`text-[14px] text-${color} font-bold`}>
            {contentLeft.text}
          </div>
        </div>
        <div>
          <div className="font-mono text-neutral-400 text-[12px]">
            {contentRight.title}
          </div>
          <div className={`text-[14px] text-${color} font-bold`}>
            {contentRight.text}
          </div>
        </div>
      </div>
    </div>
  );
}
