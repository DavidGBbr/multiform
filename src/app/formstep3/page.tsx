"use client";

import Theme from "@/components/Theme";
import { FormActions, useForm } from "@/contexts/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const FormStep3 = () => {
  const router = useRouter();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      router.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Preencha os dados");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <div>
        <p className="text-sm text-[#B8B8D4]">Passo 3/3</p>
        <h1 className="m-0 p-0 text-2xl">
          Legal {state.name}, onde te achamos?
        </h1>
        <p>Preencha com suas redes para conseguirmos entrar em contato.</p>

        <hr className="h-[1px] border-none bg-[#16195C] my-7" />

        <label className="text-sm block mb-5">
          Qual seu e-mail?
          <input
            type="email"
            autoFocus
            className="block mt-2 box-border w-full py-5 px-3 border-2 border-[#25CD89] rounded-xl text-white outline-none text-xl bg-[#02044A]"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label className="text-sm">
          Qual seu GitHub?
          <input
            type="email"
            autoFocus
            className="block mt-2 box-border w-full py-5 px-3 border-2 border-[#25CD89] rounded-xl text-white outline-none text-xl bg-[#02044A]"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link
          href="/formstep2"
          className="py-5 px-10 text-base no-underline text-[#B8B8D4]"
        >
          Voltar
        </Link>

        <button
          onClick={handleNextStep}
          className="bg-[#25CD89] text-white text-xs font-bold py-5 px-10 border-none rounded-3xl cursor-pointer mt-8"
        >
          Finalizar Cadastro
        </button>
      </div>
    </Theme>
  );
};

export default FormStep3;
