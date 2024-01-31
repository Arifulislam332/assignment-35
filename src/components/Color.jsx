import { useEffect } from "react";

const Color = () => {
  useEffect(() => {
    const btnBackgroundColor = document.querySelector(".btn__BG__Color");

    const handleColor = () => {
      document.body.style.backgroundColor = "Yellow";
    };

    btnBackgroundColor.addEventListener("click", handleColor);

    return () => {
      btnBackgroundColor.removeEventListener("click", handleColor);
    };
  }, []);
  return (
    <div>
      <button className="btn__BG__Color">ChangeBG Color</button>
    </div>
  );
};

export default Color;
