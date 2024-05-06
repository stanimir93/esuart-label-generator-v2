import {FC, useId} from 'react'
import {Lang, Scent} from "./data/types.ts";
import {AppData} from "./data/appData.ts";
import {ISelected} from "./ContainerCandels.tsx";


export const ScentSelect: FC<{
    defaultLang: Lang,
    selected: ISelected,
    setSelected: (selected: ISelected) => void,
    index: number,
}> = (props) => {
    const id = useId()
    const id2 = useId()

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        const newSelected = {...props.selected, language: value ? value as Lang : props.defaultLang}
        props.setSelected(newSelected)
    }

    const handleScentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelected = {...props.selected, scent: e.target.value as Scent}
        props.setSelected(newSelected)
    }

    return (
        <section className={'flex flex-col gap-2'}>
            {/*<small>Scent {props.index + 1}</small>*/}
            <div className={'flex gap-2'}>
            <p className={'flex gap-1 flex-col items-stretch'}>
                {/*<label htmlFor={id2}>Language</label>*/}
                <select
                    id={id2}
                    value={props.selected.language}
                    onChange={handleLanguageChange}
                >
                    {Object.values(Lang).map(value => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
            </p>

            <p className={'flex gap-1 flex-col items-stretch'}>
                {/*<label htmlFor={id}>Scent {props.index + 1}:</label>*/}
                <select
                    id={id}
                    value={props.selected.scent ?? ''}
                    onChange={handleScentChange}
                >
                    <option value='' disabled></option>
                    {Object.values(Scent).map(value => {
                        const lang = props.selected.language ?? props.defaultLang
                        const scent = AppData[lang][value]
                        return (
                            <option key={value} value={value}>{scent.name}</option>
                        )
                    }
                    )}
                </select>
            </p>
            </div>

        </section>
    )
}