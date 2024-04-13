import { useEffect, useMemo, useState } from "react";

function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isXL = useMemo((): boolean => {
    if (windowSize.width) return windowSize.width >= 1240;

    return false;
  }, [windowSize.width]);

  return { windowSize, isXL };
}

export default useWindowDimensions;
