// useClassData.js
import { useState, useEffect } from 'react';

export const useClassData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // 여기에 필요한 코드를 추가하여 데이터를 가져옵니다.
      // 예를 들어, notionData.props.project 값을 가져오기 위한 코드를 추가할 수 있습니다.
      const rawData = await fetch( /* ... */ );
      setData(rawData);
    };

    fetchData();
  }, []);

  return data;
};
