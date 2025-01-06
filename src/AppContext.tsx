import React from "react";
interface AppContextType {
    currentNumber: string,
    previousResult: number
    operator: string
}
type ActionType = { type: "INPUT", number: string }
    | { type: "ACTION", key: Operator }
    | { type: "DEL" }
    | { type: "RESET" }
    | { type: "RESULT" }

const appReducer = (data: AppContextType, action: ActionType): AppContextType => {
    switch (action.type) {
        case "ACTION": {
            return { ...data }
        }
        default: return { ...data };
    }
}
const initData: AppContextType = {
    currentNumber: "",
    previousResult: 0,
    operator: ""
}
export const AppContext = React.createContext<{ state: AppContextType, dispatch: React.Dispatch<ActionType> }>({ state: {} as AppContextType, dispatch: () => { } })

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer<React.Reducer<AppContextType, ActionType>>(appReducer, initData)
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}