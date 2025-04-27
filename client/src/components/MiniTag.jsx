const MiniTag = ({ text, color = "emerald", backgroundColor }) => {
  const colors = {
    emerald: {
      textColor: "text-emerald-400",
      borderColor: "border-emerald-400",
      backgroundColor,
    },
    green: {
      textColor: "text-greenNeon",
      borderColor: "border-greenNeon",
      backgroundColor,
    },
    cyan: {
      textColor: "text-cyanNeon",
      borderColor: "border-cyanNeon",
    },
    purple: {
      textColor: "text-purpleNeon",
      borderColor: "border-purpleNeon",
    },
    pink: {
      textColor: "text-pinkNeon",
      borderColor: "border-pinkNeon",
    },
  };

  const { textColor, borderColor } = colors[color] || colors.emerald;

  return (
    <div
      className={`inline-flex items-center gap-2 px-2  border rounded-full ${borderColor}`}
      style={backgroundColor ? { backgroundColor } : {}}
    >
      <span
        className={`uppercase font-mono text-sm tracking-widest ${textColor}`}
      >
        {text}
      </span>
    </div>
  );
};

export default MiniTag;
