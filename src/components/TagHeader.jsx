const TagHeader = ({ icon, text, color = "emerald", backgroundColor }) => {
  const colors = {
    emerald: {
      textColor: "text-emerald-400",
      borderColor: "border-emerald-400",
      iconColor: "text-emerald-400",
      backgroundColor,
    },
    green: {
      textColor: "text-greenNeon",
      borderColor: "border-greenNeon",
      iconColor: "text-greenNeon",
      backgroundColor,
    },
    cyan: {
      textColor: "text-cyanNeon",
      borderColor: "border-cyanNeon",
      iconColor: "text-cyanNeon",
    },
    purple: {
      textColor: "text-purpleNeon",
      borderColor: "border-purpleNeon",
      iconColor: "text-purpleNeon",
    },
    pink: {
      textColor: "text-pinkNeon",
      borderColor: "border-pinkNeon",
      iconColor: "text-pinkNeon",
    },
  };

  const { textColor, borderColor, iconColor } = colors[color] || colors.emerald;

  return (
    <div
      className={`inline-flex items-center gap-2 px-2 border rounded-full ${borderColor}`}
      style={backgroundColor ? { backgroundColor } : {}}
    >
      <span className={`${iconColor}`}>{icon}</span>
      <span
        className={`uppercase font-mono text-[12px] tracking-widest ${textColor}`}
      >
        {text}
      </span>
    </div>
  );
};

export default TagHeader;
