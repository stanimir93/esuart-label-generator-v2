import {FC} from 'react'
import {Lang} from "./data/types.ts";
import {ScentSelect} from "./ScentSelect.tsx";
import {ISelected} from "./ContainerCandels.tsx";

export const SelectMenu: FC<
    {
        count: number
        defaultLang: Lang
        selected: ISelected[]
        setSelected: (selected: ISelected[]) => void
    }> = (props) => {

    const handleSelect = (index: number) => (selected?: ISelected) => {
        if (!selected) {
            return
        }

        const newSelected = [...props.selected]
        newSelected[index] = selected
        props.setSelected(newSelected)
    }

    return (
        <menu className={'flex items-center gap-5 p-5 flex-col bg-pink-200 rounded shadow'}>
            {Array.from({length: props.count}).map((_, index) => (
                <ScentSelect
                    key={index}
                    index={index}
                    defaultLang={props.defaultLang}
                    selected={props.selected[index]}
                    setSelected={handleSelect(index)}
                />
            ))}
        </menu>
    )
}