import React from "react";
import Header from "./Header";
import SidebarItem from "./SidebarItem";
import { useForm } from "@/contexts/formContext";

const Theme = ({ children }: React.PropsWithChildren) => {
  const { state } = useForm();

  return (
    <div id="container" className="bg-[#02044A] text-white min-h-screen">
      <div
        id="area"
        className="m-auto max-w-[980px] min-h-screen flex flex-col"
      >
        <Header />

        <div id="steps" className="flex flex-1">
          <div
            id="sidebar"
            className="w-64 border-r border-solid border-[#16195C]"
          >
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/formstep2"
              active={state.currentStep === 2}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/formstep3"
              active={state.currentStep === 3}
            />
          </div>
          <div id="page" className="flex-1 pl-10 pt-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
