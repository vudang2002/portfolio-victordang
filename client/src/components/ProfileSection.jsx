import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function CommunityItem({ role, place, link, icon }) {
  const { t } = useTranslation();
  return (
    <div className="text-sm">
      <span className="font-semibold">{t(role)}</span> {t("at")}{" "}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:underline inline-flex items-center"
      >
        {t(place)} {icon && <span className="ml-1">{icon}</span>}
      </a>
    </div>
  );
}

function ProjectItem({ name, description, icon }) {
  const { t } = useTranslation();
  return (
    <div className="text-sm">
      <span className="text-cyan-300 hover:underline cursor-pointer font-mono">
        {t(name)} {icon && <span className="ml-1">{icon}</span>}
      </span>
      <div className="text-gray-400">{t(description)}</div>
    </div>
  );
}

export default function ProfileSection() {
  const { t } = useTranslation();
  return (
    <div className="  text-white font-mono ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Communities */}
        <div className="relative rounded border-l-4 border-purpleNeon pl-6">
          <div className="flex items-center space-x-2 mb-4">
            <IoPeopleOutline className="text-purpleNeon text-lg" />
            <span className="text-[24px] font-semibold text-purpleNeon">
              {t("communities")}
            </span>
            <span className="bg-purple-700/30 text-purple-300 text-xs px-2 py-0.5 rounded font-mono">
              {t("active")}
            </span>
          </div>
          <div className="space-y-3">
            <CommunityItem
              role="student"
              place="huflit"
              link="https://huflit.edu.vn/"
              icon="🎓"
            />
            <CommunityItem
              role="developer"
              place="github"
              link="https://github.com"
              icon="💻"
            />
            <CommunityItem
              role="contributors"
              place="is_a_dev"
              link="#"
              icon="⚙️"
            />

            <div className="text-gray-500 text-xs mt-4">
              ⓘ {t("for_more_details")}
            </div>
          </div>
        </div>

        {/* Right: Projects */}
        <div className="relative rounded border-l-4 border-cyanNeon pl-6">
          <div className="flex items-center space-x-2 mb-4">
            <FaFolderOpen className="text-cyanNeon text-lg" />
            <span className="text-[24px] font-semibold text-cyanNeon">
              {t("projects")}
            </span>
            <span className="bg-cyan-700/30 text-cyanNeon text-xs px-2 py-0.5 rounded font-mono">
              {t("open_source")}
            </span>
          </div>
          <div className="space-y-3">
            <ProjectItem
              name="python_cli"
              icon="🐍"
              description="python_cli_description"
            />
            <ProjectItem
              name="ai_tools_hub"
              icon="🛠️"
              description="ai_tools_hub_description"
            />
            <ProjectItem
              name="vuonmaichinteo"
              icon="🧱"
              description="vuonmaichinteo_description"
            />
            <ProjectItem
              name="deeplook_image"
              icon="👁️"
              description="deeplook_image_description"
            />
            <ProjectItem
              name="all_my_website_projects"
              icon="📂"
              description="all_my_website_projects_description"
            />
            <ProjectItem
              name="all_my_chatbot_projects"
              icon="💬"
              description="all_my_chatbot_projects_description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
