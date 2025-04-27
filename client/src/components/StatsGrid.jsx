import React from "react";
import StatCard from "./StatCard";
import { GoFileDirectory } from "react-icons/go";
import TagHeader from "./TagHeader";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosGitBranch } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function StatsGrid() {
  const { t } = useTranslation(); // Add translation hook

  const stats = [
    {
      icon: <GoFileDirectory className="text-2xl text-cyanNeon" />,
      buttonTag: (
        <TagHeader
          icon=<FaArrowTrendUp />
          text={t("active_projects")}
          color="cyan"
        />
      ),
      description: {
        number: "5+",
        text: t("projects"),
      },
      contentLeft: {
        title: t("projects_completed"),
        text: "2",
      },
      contentRight: {
        title: t("in_progress"),
        text: "4",
      },
      color: "cyanNeon",
    },
    {
      icon: <GoFileDirectory className="text-2xl text-pinkNeon" />,
      buttonTag: (
        <TagHeader
          icon=<CiCalendar />
          text={t("growing_projects")}
          color="pink"
        />
      ),
      description: {
        number: "11+",
        text: t("months_experience"),
      },
      contentLeft: {
        title: t("started"),
        text: "2024",
      },
      contentRight: {
        title: t("current"),
        text: "2025",
      },
      color: "pinkNeon",
    },
    {
      icon: <GoFileDirectory className="text-2xl text-purpleNeon" />,
      buttonTag: (
        <TagHeader
          icon=<AiOutlineThunderbolt />
          text={t("learning_technologies")}
          color="purple"
        />
      ),
      description: {
        number: "5+",
        text: t("technologies"),
      },
      contentLeft: {
        title: t("technologies_list"),
        text: t("react_tailwind_js"),
      },
      contentRight: {},
      color: "purpleNeon",
    },
    {
      icon: <GoFileDirectory className="text-2xl text-greenNeon" />,
      buttonTag: (
        <TagHeader
          icon=<IoIosGitBranch />
          text={t("open_source_projects")}
          color="green"
        />
      ),
      description: {
        number: "1",
        text: t("open_source"),
      },
      contentLeft: {
        title: t("completed"),
        text: "0",
      },
      contentRight: {
        title: t("in_progress"),
        text: "1",
      },
      color: "greenNeon",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  );
}
