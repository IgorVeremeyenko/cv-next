"use client"
import React, { useState, useEffect } from 'react';
import PercentageCircle from './percentageCircle';

function UploadPage({targetPercent}) {
  const [uploadPercent, setUploadPercent] = useState(0);

  useEffect(() => {
    // Пример: Обновляем процент каждые 500 миллисекунд (0.5 секунды) до достижения 80%.
    if (uploadPercent < targetPercent) {
      const interval = setInterval(() => {
        setUploadPercent(prevPercent => {
          const newPercent = prevPercent + 1;
          return newPercent > targetPercent ? targetPercent : newPercent;
        });
      }, 25);

      return () => {
        clearInterval(interval); // Остановка интервала при размонтировании компонента.
      };
    }
  }, [uploadPercent, targetPercent]);

  return (
    <div>
      <PercentageCircle percent={uploadPercent} />
    </div>
  );
}

export default UploadPage;