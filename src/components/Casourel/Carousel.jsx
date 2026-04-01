import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const data = [
  {
    title: "HỆ THỐNG TRƯỜNG HỌC QUỐC TẾ",
    image: "/images/tienich/1.webp",
  },
  {
    title: "TRUNG TÂM TƯƠNG MẠI QUỐC TẾ 123.000 M2",
    image: "/images/tienich/2.webp",
  },
  {
    title: "KÊNH ĐÀO NHẠC NƯỚC LỚN NHẤT ĐÔNG NAM Á",
    image: "/images/tienich/3.webp",
  },
  {
    title: "HỆ THỐNG CÔNG VIÊN CÂY XANH",
    image: "/images/tienich/4.webp",
  },
  {
    title: "KHỐI ĐẾ THƯƠNG MẠI",
    image: "/images/tienich/5.webp",
  },
  {
    title: "KHU VỰC BBQ",
    image: "/images/tienich/6.webp",
  },
  {
    title: "KHÔNG GIAN CO-WORKING",
    image: "/images/tienich/7.webp",
  },
  {
    title: "HỒ BƠI VÔ CỰC CAO CẤP",
    image: "/images/tienich/8.webp",
  },
  {
    title: "PHÒNG GYM TRONG NHÀ",
    image: "/images/tienich/9.webp",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000); // 3s

    return () => clearInterval(interval);
  }, []);

  // Wrap around: khi index = data.length, jump về 0 không animation
  useEffect(() => {
    if (index === data.length) {
      // Cho animation transition xong rồi mới jump
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 800); // 0.8s transition time

      return () => clearTimeout(timer);
    } else if (index === 0 && !isTransitioning) {
      // Bật lại transition sau khi jump
      setIsTransitioning(true);
    }
  }, [index, isTransitioning]);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>TIỆN ÍCH NỔI BẬT</h2>

      <div className={styles.carousel}>
        <div
          className={styles.list}
          style={{
            transform: `translateX(calc(20% - ${index * 60}%))`,
            transition: isTransitioning ? "transform 0.8s ease" : "none",
          }}
        >
          {/* Render all data + clone first item at end */}
          {data.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.overlay}>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
          {/* Clone item đầu để transition smooth */}
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${data[0].image})` }}
          >
            <div className={styles.overlay}>
              <p>{data[0].title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicator */}
      <div className={styles.dot}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>/{String(data.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
