import { useEffect, useRef } from "react";

const ColorEnhanched = () => {
  const btnChangeColorRef = useRef(null);
  // console.log(btnChangeColorRef);

  useEffect(() => {
    const btnEl = btnChangeColorRef.current;
    // console.log(btnEl);

    const handleClick = () => {
      document.body.style.backgroundColor = "violet";
    };

    btnEl.addEventListener("click", handleClick);

    return () => {
      btnEl.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      <button ref={btnChangeColorRef}>Color Change BG</button>
    </div>
  );
};

export default ColorEnhanched;
