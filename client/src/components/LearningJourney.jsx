import React, { useState } from "react";
import { IoBulbOutline } from "react-icons/io5";

function TimelineItem({ year, icon, title, description }) {
  return (
    <div className="relative pl-6 border-l border-purple-500/50">
      <span className="absolute -left-[2.1rem] top-1 text-xs bg-purple-800/30 text-purple-300 px-2 py-0.5 rounded font-mono">
        {year}
      </span>
      <div className="flex items-start space-x-4 py-4">
        <div className="w-10 h-10 flex-shrink-0">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="font-semibold text-white">{title}</div>
          <div className="text-sm text-gray-400">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default function LearningJourney() {
  const [showTimeline, setShowTimeline] = useState(true);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-mono p-6">
      <div className="max-w-3xl mx-auto border border-purple-500/50 rounded-xl p-6">
        <div className="flex justify-between items-center">
          <div className="text-base font-semibold flex items-center space-x-2">
            <IoBulbOutline className="text-purple-400" />
            <span>Hành Trình Lập Trình Của Tôi</span>
          </div>
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="text-purple-300 text-sm hover:underline"
          >
            {showTimeline ? "^ Ẩn" : "˅ Hiện"}
          </button>
        </div>
        {showTimeline && (
          <div className="mt-4 space-y-2">
            <TimelineItem
              year="2024"
              icon="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              title="Bắt đầu hành trình lập trình"
              description="Trang web HTML/CSS đầu tiên"
            />
            <TimelineItem
              year="2024"
              icon="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              title="Học JavaScript"
              description="Xây dựng ứng dụng web tương tác"
            />
            <TimelineItem
              year="2024"
              icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              title="Khám phá React & Node.js"
              description="Tạo ứng dụng full-stack"
            />
            <TimelineItem
              year="2024"
              icon="https://www.python.org/static/community_logos/python-logo.png"
              title="Khám phá Python"
              description="Xây dựng công cụ tự động hóa"
            />
            <TimelineItem
              year="2025"
              icon="https://cdn-icons-png.flaticon.com/512/4149/4149634.png"
              title="Đi sâu vào AI & ML"
              description="Khám phá lĩnh vực mới"
            />
          </div>
        )}
      </div>
    </div>
  );
}
