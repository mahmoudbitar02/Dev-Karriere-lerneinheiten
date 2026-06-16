import { createContext } from "react";
import type { ClickerAction } from "../hook/ClickerReducer";

export const ClickerContext = createContext<{ count: number; setCount: React.Dispatch<ClickerAction> }>({ count: 0, setCount: () => {} });
