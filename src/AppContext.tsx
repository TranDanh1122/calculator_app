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
const initData: AppContextType = {
    currentNumber: "0",
    previousResult: 0,
    operator: ""
}
const appReducer = (data: AppContextType, action: ActionType): AppContextType => { 
    switch (action.type) {
        case "ACTION": {
            if (data.currentNumber !== "0" && data.operator === "") {
                return {
                    ...data,
                    previousResult: parseFloat(data.currentNumber),
                    currentNumber: "0",
                    operator: action.key,
                };
            }
            return { ...data, operator: action.key };
        }

        case "INPUT": {
            if (action.number === "." && data.currentNumber.includes(".")) {
                return { ...data };
            }
            return {
                ...data,
                currentNumber: data.currentNumber === "0" && action.number !== "."
                    ? action.number
                    : data.currentNumber + action.number,
            };
        }

        case "DEL": {
            let currentNumber = data.currentNumber;
            if (currentNumber.length === 1) {
                currentNumber = "0";
            } else {
                currentNumber = currentNumber.slice(0, -1);
            }
            return { ...data, currentNumber };
        }

        case "RESET": {
            return { ...initData };
        }

        case "RESULT": {
            if (data.operator === "") return data;
            let result = data.previousResult;
            const currentValue = parseFloat(data.currentNumber);

            switch (data.operator) {
                case "+":
                    result += currentValue;
                    break;
                case "-":
                    result -= currentValue;
                    break;
                case "X":
                    result *= currentValue;
                    break;
                case "/":
                    result = currentValue === 0 ? 0 : result / currentValue;
                    break;
                default:
                    break;
            }

            return {
                ...data,
                currentNumber: result.toString(),
                previousResult: result,
                operator: "",
            };
        }

        default:
            return data;
    }
}

export const AppContext = React.createContext<{ state: AppContextType, dispatch: React.Dispatch<ActionType> }>({ state: {} as AppContextType, dispatch: () => { } })

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer<React.Reducer<AppContextType, ActionType>>(appReducer, initData)
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}