import React from "react";

export default function KeyItem({ keyItem, handleClick }: { keyItem: Key, handleClick: (e:React.MouseEvent<HTMLDivElement>) => void }): React.JSX.Element {

    return (
        <div onClick={(e) => handleClick(e)} style={{ maxWidth: keyItem.width, minWidth: keyItem.width, backgroundColor: keyItem.bgColor, borderBottom: `4px solid ${keyItem.shadowColor}`, color: keyItem.textColor }}
            className="cursor-pointer text-[2.5rem] font-bold tracking-[-0.67px] text-center rounded-lg uppercase">
            {keyItem.value}
        </div>
    )
}