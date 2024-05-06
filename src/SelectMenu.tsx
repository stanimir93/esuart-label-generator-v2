import {FC} from 'react'
import {Lang, Scent} from "./data/types.ts";
import {ScentSelect} from "./ScentSelect.tsx";

export const SelectMenu: FC<
    {
        count: number
        language: Lang
        selected: (Scent | undefined)[]
        setSelected: (selected: (Scent | undefined)[]) => void
    }> = (props) => {

    const handleScentChange = (index: number) => (scent?: Scent) => {
        const newSelected: (Scent | undefined)[] = props.selected ? [...props.selected] : Array.from({length: props.count})
        newSelected[index] = scent
        props.setSelected(newSelected)
    }

    return (
        <menu className={'flex items-center gap-5 p-5 flex-col max-w-64 bg-pink-200 rounded shadow'}>
            {Array.from({length: props.count}).map((_, index) => (
                <ScentSelect
                    key={index}
                    index={index}
                    language={props.language}
                    scent={props.selected?.[index]}
                    setScent={handleScentChange(index)}
                />
            ))}
        </menu>
    )
}