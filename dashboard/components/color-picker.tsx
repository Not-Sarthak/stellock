import React, { useState } from "react";

interface ColorPickerProps {
  onColorSelect: (background: string, accent: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorSelect }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [accentColor, setAccentColor] = useState<string>("");

  const backgroundColors: string[] = ["#ffffff", "#4f4f4f"];
  const accentColors: string[] = [
    "#6A5ACD",
    "#98FB98",
    "#ADD8E6",
  ];

  const handleBackgroundColorSelect = (color: string) => {
    setBackgroundColor(color);
    onColorSelect(color, accentColor);
  };

  const handleAccentColorSelect = (color: string) => {
    setAccentColor(color);
    onColorSelect(backgroundColor, color);
  };

  return (
    <div className="mt-4 flex w-full items-center gap-20">
      <div className="flex flex-col">
        <div>Background</div>
        <div className="flex gap-2 mt-2">
          {backgroundColors.map((color) => (
            <div
              key={color}
              onClick={() => handleBackgroundColorSelect(color)}
              style={{ backgroundColor: color }}
              className={`h-8 w-8 cursor-pointer rounded-full ${backgroundColor === color ? "border-2 border-black" : ""}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div>Accent</div>
        <div className="flex gap-2 mt-2">
          {accentColors.map((color) => (
            <div
              key={color}
              onClick={() => handleAccentColorSelect(color)}
              style={{ backgroundColor: color }}
              className={`h-8 w-8 cursor-pointer rounded-full ${accentColor === color ? "border-2 border-black" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
