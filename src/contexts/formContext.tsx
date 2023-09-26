"use client";

import React, { createContext, useContext, useReducer } from "react";

interface IState {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}

interface IAction {
  type: FormActions;
  payload: any;
}

interface IContext {
  state: IState;
  dispatch: (action: IAction) => void;
}

const FormContext = createContext<IContext | undefined>(undefined);

const initialData: IState = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
  }
};

export const FormProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(formReducer, initialData);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
