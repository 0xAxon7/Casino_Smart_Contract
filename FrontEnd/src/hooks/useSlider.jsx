import { useEffect, useRef, useState } from "react";

const useSlider = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();

    window.addEventListener("resize", updateContainerWidth);

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, [containerRef]);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: containerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  return { containerRef, scrollLeft, scrollRight };
};

export default useSlider;
