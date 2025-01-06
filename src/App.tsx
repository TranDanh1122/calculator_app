import "./styles.css"
import { ThemeContext } from "./ThemeContext"
import React, { useEffect } from "react"
import clsx from "clsx"
import KeyItem from "./components/KeyItem"
import { AppContext } from "./AppContext"
const keyBoard: Key[] = [
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "7",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "8",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "9",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-primary)",
    hoverColor: "var(--key-bg-primary)",
    shadowColor: "var(--key-shadow-primary)",
    value: "DEL",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-secondary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "4",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "5",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "6",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "+",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "1",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "2",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "3",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "-",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: ".",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "0",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "/",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-secondary)",
    hoverColor: "var(--text-secondary)",
    shadowColor: "var(--key-shadow-secondary)",
    value: "x",
    width: "calc(25% - 1.25rem)",
    textColor: "var(--text-primary)",
  },
  {
    bgColor: "var(--key-bg-primary)",
    hoverColor: "var(--key-bg-primary)",
    shadowColor: "var(--key-shadow-primary)",
    value: "reset",
    width: "calc(50% - 0.75rem)",
    textColor: "var(--text-secondary)",
  },
  {
    bgColor: "var(--key-bg-accent)",
    hoverColor: "var(--key-bg-accent)",
    shadowColor: "var(--key-shadow-accent)",
    value: "=",
    width: "calc(50% - 0.75rem)",
    textColor: "var(--text-secondary)",
  },

]
function App() {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const { state, dispatch } = React.useContext(AppContext)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])
  const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    switch (value) {
      case "1":
        setTheme("light")
        break;
      case "2":
        setTheme("dark")
        break;
      case "3":
        setTheme("purple")
        break;
    }
  }
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLDivElement).innerText;
    if (value == "DEL") {
      dispatch({ type: "DEL" })
      return
    }
    if (value == "reset") {
      dispatch({ type: "RESET" })
      return
    }
    if (value == "=") {
      dispatch({ type: "RESULT" })
      return
    }
    if (!isNaN(value as unknown as number) || value == ".") {
      dispatch({ type: "INPUT", number: value })
      return
    }

    dispatch({ type: "ACTION", key: value as Operator });
    return;

  }
  return (
    <div className="w-full mb:w-[90%] max-w-[540px]">
      <header className={clsx("flex justify-between", {
        [`text-[var(--text-secondary)]`]: theme === "light",
        [`text-[var(--text-primary)]`]: theme !== "light",
      })}>
        <span className="font-bold text-[2rem] tracking-[-0.53px]">calc</span>
        <div className="flex items-end gap-6">
          <span className="text-[.75rem] track-[1px] font-bold uppercase">Theme</span>
          <div className="flex flex-col justify-between">
            <div className="w-full flex justify-around font-bold text[.75rem]">
              <span className="h-fit">1</span>
              <span className="h-fit">2</span>
              <span className="h-fit">3</span>
            </div>
            <input onChange={(e) => handleChangeTheme(e)} type="range" min="1" max="3" className="max-w-[4.5rem] w-full " />
          </div>
        </div>
      </header>
      <span className={clsx("w-full mt-8 block py-10 px-8 bg-[var(--screen-bg)] rounded-md text-[3.5rem] font-bold track-[-0.93px]] text-right", {
        "text-[var(--text-secondary)]": theme === "light",
        "text-[var(--text-primary)]": theme !== "light",

      })}> {state.currentNumber}</span>
      <div className="flex flex-wrap gap-4 gap-y-6 w-full justify-between p-8 bg-[var(--screen-bg)] rounded-md mt-6">
        {
          keyBoard.map((keyItem: Key, index: number) => <KeyItem handleClick={handleClick} key={index} keyItem={keyItem} />)
        }
      </div>
    </div >

  )
}

export default App
