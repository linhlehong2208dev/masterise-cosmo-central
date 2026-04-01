import React from "react";
import "./TienIch.css";

function MapIcon({ number, top, left, color = "#ff7b1a" }) {
  return (
    <div className="map-icon" style={{ top: top, left: left }}>
      <div className="map-icon-circle" style={{ background: color }}>
        <span className="map-icon-number">{number}</span>
      </div>
    </div>
  );
}

export default function TienIch() {
  return (
    <div className="tien-ich-container">
      {/* Ví dụ vài icon, bạn thêm tiếp theo data */}

      <MapIcon number={1} top={158} left={397} />
      <MapIcon number={1} top={68} left={373} />
      <MapIcon number={1} top={195} left={247} />

      <MapIcon number={2} top={125} left={479} />
      <MapIcon number={2} top={75} left={539} />

      <MapIcon number={3} top={266} left={488} />
      <MapIcon number={3} top={241} left={537} />

      <MapIcon number={4} top={307} left={484} />
      <MapIcon number={4} top={274} left={535} />

      {/* màu xanh (khác nhóm) */}
      <MapIcon number={24} top={133} left={567} color="#004380" />
      <MapIcon number={27} top={169} left={569} color="#004380" />
    </div>
  );
}
