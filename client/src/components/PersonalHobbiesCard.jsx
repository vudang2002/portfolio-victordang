import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiGrid, FiSettings } from "react-icons/fi";
import HobbyItem from "./HobbyItem";

export default function PersonalHobbiesCard() {
  const [activeTab, setActiveTab] = useState("Thể thao");
  const tabs = ["Thể thao", "Hoạt động Sáng tạo", "Trí tuệ"];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-mono p-6">
      <div className="max-w-3xl mx-auto border border-cyan-500/50 rounded-xl p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-base font-semibold flex items-center space-x-2">
            <FaHeart className="text-cyan-400" />
            <span>Sở Thích Cá Nhân</span>
          </div>
          <button className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-md text-sm hover:bg-cyan-800">
            🔧 Điều tôi thích ngoài lập trình
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
          <div className="flex space-x-4 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded ${
                  activeTab === tab
                    ? "bg-cyan-800 text-cyan-300 font-semibold"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-gray-500">
            <FiGrid className="hover:text-white cursor-pointer" />
            <FiSettings className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Hobbies List (tạm thời chưa filter theo tab) */}
        <div className="space-y-4">
          <HobbyItem
            src="https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif"
            alt="Bóng rổ"
            title="Bóng rổ"
            description="Chơi hàng tuần với bạn bè"
          />
          <HobbyItem
            src="https://media.giphy.com/media/3o7TKzS2l3XxhzKxEk/giphy.gif"
            alt="Bóng chuyền"
            title="Bóng chuyền"
            description="Bóng chuyền bãi biển vào mùa hè"
          />
          <HobbyItem
            src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
            alt="Đi bộ"
            title="Đi bộ"
            description="Tập thể dục thư giãn"
          />
          <HobbyItem
            src="https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif"
            alt="Ngủ"
            title="Ngủ"
            description="Sở thích yêu thích của mọi người"
          />
        </div>

        {/* Discovery Note */}
        <div className="bg-cyan-900/50 text-cyan-300 p-3 rounded-md text-sm">
          📣 Đang khám phá: Nhiếp ảnh thiên văn và quay video bằng drone
        </div>
      </div>
    </div>
  );
}
