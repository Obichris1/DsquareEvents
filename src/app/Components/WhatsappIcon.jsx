import React from "react";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/2349165235934?text=Hello,%20I%20would%20like%20to%20make%20more%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 flex items-center bg-green-500 rounded-full px-3 py-1 shadow-lg hover:scale-105 transition-transform"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
      <span className="ml-2 text-white text-sm font-medium">Chat with us </span>
    </a>
  );
};

export default WhatsAppIcon;
