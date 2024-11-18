import React, { useState } from 'react';

function TextInput({ value, onChange }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  let [inputClass,setinputClass] = useState("bg-cinza-500 text-cinza-100 border-[1px] border-cinza-700 rounded-md h-12 p-4 leading-normal outline-none w-full")

  return (
    <input
      type="text"
      value={value}
      onChange={(event)=>{
        handleInputChange(event)
        event.target.value == "" ? setinputClass("bg-cinza-500 text-cinza-100 border-[1px] border-cinza-700 rounded-md h-12 p-4 leading-normal outline-none w-full") : setinputClass("bg-cinza-500 text-cinza-100 border-[1px] border-purple-600 rounded-md h-12 p-4 leading-normal outline-none w-full")
      }}
      className={inputClass}
      placeholder="Digite uma nova tarefa..."
    />
  );
}

export default TextInput;
