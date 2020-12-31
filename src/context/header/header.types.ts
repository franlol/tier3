import { Dispatch, ReactNode, SetStateAction } from "react";

export type Props = {
  children?: ReactNode
}

export type THeaderState = {
  setBurgerOpen: Dispatch<SetStateAction<boolean>>;
  burgerOpen: boolean;
}
