import { createContext } from "react";
import type { ClickerAction } from "../hook/ClickerReducer";
import type { Action } from "../hook/ClickerReducer2";

export const ClickerContext = createContext<{ count: number; setCount: React.Dispatch<ClickerAction> }>({ count: 0, setCount: () => {} });

export const ClickerContext2 = createContext<{ count2: number; setCount2: React.Dispatch<Action> }>({ count2: 0, setCount2: () => {} });
