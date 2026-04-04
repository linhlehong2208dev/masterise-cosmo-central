import { useState, useEffect } from "react";

// Giai đoạn 1: đọc từ JSON local
// Giai đoạn 2: sẽ swap sang Firebase, chỉ cần đổi hàm fetchData bên dưới

export function useSectionData(sectionId, localData) {
  const [data, setData] = useState(localData || null);
  const [loading, setLoading] = useState(!localData);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hiện tại dùng local JSON — sau này swap Firebase ở đây
    if (localData) {
      setData(localData);
      setLoading(false);
    }
  }, [sectionId]);

  return { data, loading, error };
}
