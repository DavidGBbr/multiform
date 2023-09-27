"use client";

import Theme from "@/components/Theme";
import { FormActions, useForm } from "@/contexts/formContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      router.push("/formstep2");
    } else {
      alert("Preencha os dados.");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <div>
        <p className="text-sm text-[#B8B8D4]">Passo 1/3</p>
        <h1 className="m-0 p-0 text-2xl">Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr className="h-[1px] border-none bg-[#16195C] my-7" />

        <label className="text-sm">
          Seu nome completo
          <input
            type="text"
            autoFocus
            className="block mt-2 box-border w-full py-5 px-3 border-2 border-[#25CD89] rounded-xl text-white outline-none text-xl bg-[#02044A]"
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button
          onClick={handleNextStep}
          className="bg-[#25CD89] text-white text-xs font-bold py-5 px-10 border-none rounded-3xl cursor-pointer mt-8"
        >
          Próximo
        </button>
      </div>
    </Theme>
  );
};

export default Page;
