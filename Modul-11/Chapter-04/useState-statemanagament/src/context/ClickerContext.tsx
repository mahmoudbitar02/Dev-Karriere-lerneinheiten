import { createContext } from "react";

export const ClickerContext = createContext<{ count: number; setCount: React.Dispatch<number> }>({ count: 0, setCount: () => {} });
