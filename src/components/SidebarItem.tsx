import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

const SidebarItem = ({ title, description, icon, path, active }: Props) => {
  return (
    <div className="my-7 cursor-pointer">
      <Link href={path} className="flex items-center no-underline">
        <div id="info" className="flex-1 mr-5">
          <div
            id="title"
            className="text-right font-bold mb-1 text-base text-white"
          >
            {title}
          </div>
          <div id="description" className="text-right text-xs text-[#B8B8D4]">
            {description}
          </div>
        </div>
        <div
          id="iconArea"
          className={`w-12 h-12 rounded-[50%] ${
            active ? "bg-[#25CD89]" : "bg-[#494A7C]"
          } flex justify-center items-center`}
        >
          {icon === "profile" && (
            <Image
              src="/assets/profile.svg"
              width={24}
              height={24}
              alt="Pessoal"
            />
          )}
          {icon === "book" && (
            <Image
              src="/assets/book.svg"
              width={24}
              height={24}
              alt="Profissional"
            />
          )}
          {icon === "mail" && (
            <Image
              src="/assets/mail.svg"
              width={24}
              height={24}
              alt="Contatos"
            />
          )}
        </div>
        <div
          id="point"
          className={`w-3 h-3 border-[3px] border-[#494A7C] rounded-[50%] ml-[30px] mr-[-6px] ${
            active ? "bg-[#25CD89]" : "bg-[#02044A]"
          }`}
        ></div>
      </Link>
    </div>
  );
};

export default SidebarItem;
