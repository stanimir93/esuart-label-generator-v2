import {FC, useId} from 'react'
import {Lang, Scent} from "./data/types.ts";
import {AppData} from "./data/appData.ts";


export const ScentSelect: FC<{
    language: Lang,
    scent?: Scent,
    setScent: (scent?: Scent) => void,
    index: number,
}> = (props) => {
    const data = AppData[props.language]
    const id = useId()

    return (
        <p className={'flex gap-2 flex-col'}>
            <label htmlFor={id}>Scent {props.index + 1}:</label>
            <select
                id={id}
                value={props.scent ?? ''}
                onChange={e => props.setScent(e.target.value as Scent)}
            >
                <option value='' disabled></option>
                {Object.entries(data).map(([key, value]) => (
                    <option key={key} value={key}>{value.name}</option>
                ))}
            </select>
        </p>
    )
}