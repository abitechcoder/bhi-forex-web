import React from "react";

function TextInput(prop) {
  const { title, placeholder_text, type = "text" } = prop;
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={title}>{title}</label>
      <input
        type={type}
        placeholder={placeholder_text}
        id={title}
        className="w-full bg-gray-700 px-4 py-2 rounded-lg"
      />
    </div>
  );
}

export default TextInput;
