import {type ReactNode} from "react";
import {mathSpan} from "../../technical-components/Math/Math";

export function isNat0(variable: string): ReactNode {
  return mathSpan(`${variable} #in #mathbb{N}^+_0=\\{0, 1, 2, 3, ...\\}`);
}

export function isNat0WithoutDefinition(variable: string): ReactNode {
  return mathSpan(`${variable} #in #mathbb{N}^+_0`);
}

export function isNatPlus(variable: string): ReactNode {
  return mathSpan(`${variable} #in #mathbb{N}^+=\\{1, 2, 3, ...\\}`);
}

export function isNatPlusWithoutDefinition(variable: string): ReactNode {
  return mathSpan(`${variable} #in #mathbb{N}^+`);
}

export function isRealWithoutDefinition(variable: string): ReactNode {
  return mathSpan(`${variable} #in #mathbb{R}`);
}
