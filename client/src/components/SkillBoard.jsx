import React, { useState } from "react";
import { RiBarChart2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function SkillBar({ name, level, color }) {
  const { t } = useTranslation();
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm">
        <span>{t(name)}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-800 h-1 rounded">
        <div
          className={`h-1 rounded`}
          style={{ width: `${level}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}

function SkillCategory({ icon, title, color, skills }) {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="flex items-center space-x-2 mb-2">
        <div className="text-xl">{icon}</div>
        <div className={`font-semibold`} style={{ color }}>
          {t(title)}
        </div>
      </div>
      {skills.map((skill, idx) => (
        <SkillBar
          key={idx}
          name={skill.name}
          level={skill.level}
          color={color}
        />
      ))}
    </div>
  );
}

export default function SkillBoard() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);

  return (
    <div className="  text-white font-mono mb-6 ">
      <div
        className="max-w-5xl mx-auto border border-pinkNeon hover:bg-slate-800/30 border-opacity-30 
    hover:border-opacity-100 transition-all rounded-xl p-6 space-y-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-base font-semibold flex items-center space-x-2">
            <RiBarChart2Line className="text-pinkNeon" />
            <span>{t("skill_board")}</span>
          </div>
          <button
            className="text-pinkNeon text-sm hover:underline"
            onClick={() => setVisible(!visible)}
          >
            {visible ? t("hide") : t("show")}
          </button>
        </div>

        {/* Skills Grid */}
        {visible && (
          <div className="grid md:grid-cols-2 grid-cols-1  gap-6">
            <SkillCategory
              icon={
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb210aXJqejBwMjRibzF1NGZmdTl5MGlobWd3Ym8wazlkemtybjM2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vYTWX5ibxeNWvmD3rj/giphy.gif"
                  className="w-10 h-10 rounded-xl"
                />
              }
              title="frontend"
              color="#02DDF6"
              skills={[
                { name: "html_css", level: 95 },
                { name: "javascript", level: 85 },
                { name: "responsive_design", level: 90 },
                { name: "tailwind_css", level: 95 },
              ]}
            />

            <SkillCategory
              icon={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
                  className="w-10 h-10"
                />
              }
              title="backend"
              color="#7665E5"
              skills={[
                { name: "node_js", level: 75 },
                { name: "python", level: 88 },
                { name: "database", level: 70 },
                { name: "api_design", level: 85 },
              ]}
            />

            <SkillCategory
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
                  className="w-10 h-10"
                />
              }
              title="devops"
              color="#fb923c"
              skills={[
                { name: "git_github", level: 90 },
                { name: "docker", level: 65 },
                { name: "ci_cd", level: 70 },
              ]}
            />

            <SkillCategory
              icon={
                <img
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTl2MHZ4b29ydzhjY3Ixd2lnZnhuZHlhbDAzaWxla3d0cDhobTlhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dSetNZo2AJfptAk9hp/giphy.gif"
                  className="w-10 h-10"
                />
              }
              title="soft_skills"
              color="#F83E7D"
              skills={[
                { name: "problem_solving", level: 95 },
                { name: "communication", level: 85 },
                { name: "teamwork", level: 90 },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
