import React from "react";

const MapEmbed = () => {
  return (
    <div className="map-container mb-10" style={{ width: "100%", height: "400px", borderRadius: "10px", overflow: "hidden", border: "1px solid #ddd" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.860239488802!2d3.281999916054403!3d6.570315895192168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9180f7b913c9%3A0x17f9c2fa189f65e7!2sD%20SQUARE%20EVENT%20CENTRE!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
