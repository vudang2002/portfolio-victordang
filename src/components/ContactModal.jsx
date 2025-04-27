import React, { useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  // Thêm sự kiện thoát khi click ra ngoài modal
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "modal-overlay") onClose();
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText("vudang30112002@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-[#0e0e1a] text-white p-6 rounded-lg border border-cyan-500 relative w-[90%] max-w-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-lg"
        >
          &times;
        </button>

        <h3 className="text-cyan-400 font-mono mb-2">
          Liên Hệ với tôi <span className="text-xs">✔️</span>
        </h3>
        <p className="text-sm text-gray-300 mb-6">
          Bạn có thể liên hệ với tôi qua email:{" "}
        </p>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            onClick={handleCopy}
            className="bg-cyan-400 text-black px-4 py-1 rounded-md text-sm font-medium hover:bg-cyan-300 transition"
          >
            vudang30112002@gmail.com
          </button>
        </div>
      </div>
    </div>
  );
}
