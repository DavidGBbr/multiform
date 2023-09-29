"use client";

import SelectOption from "@/components/SelectOption";
import Theme from "@/components/Theme";
import { FormActions, useForm } from "@/contexts/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const FormStep2 = () => {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      router.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      router.push("/formstep2");
    } else {
      alert("Preencha os dados.");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <div>
        <p className="text-sm text-[#B8B8D4]">Passo 2/3</p>
        <h1 className="m-0 p-0 text-2xl">
          {state.name}, o que melhor descreve você?
        </h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr className="h-[1px] border-none bg-[#16195C] my-7" />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link
          href="/"
          className="py-5 px-10 text-base no-underline text-[#B8B8D4]"
        >
          Voltar
        </Link>

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

export default FormStep2;
