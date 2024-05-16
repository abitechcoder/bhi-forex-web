import React from "react";

const TextInput = React.forwardRef(function TextInput(props, ref) {
  const { title, placeholder_text, type = "text" } = props;
  return (
      <input
        type={type}
        placeholder={placeholder_text}
        id={title}
        className="w-full bg-gray-700 px-4 py-2 rounded-lg"
        {...props}
        ref={ref}
      />
  );
});

export default TextInput;
