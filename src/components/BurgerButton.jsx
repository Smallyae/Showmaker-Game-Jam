import React from "react";

const BurgerButton = () => {
  return (
    <button class="flex flex-col gap-1 justify-center items-center bg-[#222] text-[#f8f8f8] rounded-lg py-4 px-[13px]">
      <span class="w-5 h-0.5 bg-[#f8f8f8] rounded-full"></span>
      <span class="w-5 h-0.5 bg-[#f8f8f8] rounded-full"></span>
      <span class="w-5 h-0.5 bg-[#f8f8f8] rounded-full"></span>
    </button>
  );
};

export default BurgerButton;
