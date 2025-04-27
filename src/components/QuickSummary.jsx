import { useTranslation } from "react-i18next";

export default function QuickSummary() {
  const { t } = useTranslation(); // Add translation hook

  return (
    <div className=" border border-cyanNeon rounded-lg p-4 mb-6">
      <h4 className="text-md font-semibold font-mono mb-2 text-cyanNeon">
        {t("quick_summary")}
      </h4>
      <p className="text-sm text-gray-300 font-mono">
        {t("you_completed_projects", {
          projects: "5+",
          months: "11+",
          technologies: "5+",
          onlineCourse: "10+",
        })}
      </p>
    </div>
  );
}
