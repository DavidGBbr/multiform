import React from "react";

interface Props {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

const SelectOption = ({
  title,
  description,
  icon,
  selected,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex border-2 ${
        selected ? "border-[#25CD89]" : "border-[#16195C]"
      } rounded-xl p-5 mb-4 items-center cursor-pointer hover:border-[#496459] `}
    >
      <div className="flex justify-center items-center w-14 h-14 text-2xl rounded-[50%] bg-[#191A59]">
        {icon}
      </div>
      <div className="flex-1 ml-5">
        <div className="text-lg font-bold mb-2">{title}</div>
        <div className="text-sm text-[#B8B8D4]">{description}</div>
      </div>
    </div>
  );
};

export default SelectOption;
