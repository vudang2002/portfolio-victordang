export default function DevelopmentEnvironment() {
  return (
    <div className="mt-6 border border-teal-700 rounded-lg p-4 bg-[#13131f] text-white">
      <h3 className="text-teal-400 font-semibold text-sm mb-2">
        💻 Development Environment
      </h3>
      <div className="flex gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
          alt="VS Code"
          className="w-24 h-24 rounded-lg"
        />
        <div className="text-sm text-gray-300 space-y-1">
          <p>
            <strong>Editor:</strong> VSCode
          </p>
          <p>
            <strong>Theme:</strong> Catppuccin
          </p>
          <p>
            <strong>Font:</strong> JetBrains Mono
          </p>
          <p>
            <strong>Extensions:</strong> Prettier, ESLint, Tailwind IntelliSense
          </p>
        </div>
      </div>
    </div>
  );
}
