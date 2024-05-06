import {FC, useState} from 'react'
import {Lang, Scent} from "./data/types.ts";
import {SelectMenu} from "./SelectMenu.tsx";
import {ContainerLabel} from "./ContainerLabel.tsx";
import {AppData} from "./data/appData.ts";

export interface ISelected {
    language: Lang;
    scent?: Scent
}

export const ContainerCandles: FC<{ defaultLang: Lang }> = (props) => {
    const count = 8
    const [selected, setSelected] = useState<(ISelected)[]>(Array.from({length: count})
        .map(() => ({language: props.defaultLang}) as ISelected))

    return (
        <div className={'flex gap-10'}>
            <aside className={'print:hidden'}>
                <SelectMenu count={8} defaultLang={props.defaultLang} selected={selected} setSelected={setSelected}/>
            </aside>
            <div className={'flex-1 flex justify-center items-center'}>

                <div className={'printable'}>
                    {selected.map((x, index) => {
                        const selected = x as ISelected
                        if (!selected.scent) {
                            return null
                        }
                        return (
                            <div className={'flex items-center justify-center'}>
                                <ContainerLabel key={index}
                                                scent={AppData[selected.language][selected.scent as Scent]}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}