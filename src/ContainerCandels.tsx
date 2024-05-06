import {FC, useState} from 'react'
import {Lang, Scent} from "./data/types.ts";
import {SelectMenu} from "./SelectMenu.tsx";
import {ContainerLabel} from "./ContainerLabel.tsx";
import {AppData} from "./data/appData.ts";

export const ContainerCandles: FC<{ language: Lang }> = (props) => {
    const [selected, setSelected] = useState<(Scent | undefined)[]>([])

    return (
        <div className={'flex gap-10'}>
            <SelectMenu count={8} language={props.language} selected={selected} setSelected={setSelected}/>
            <div className={'flex-1 flex justify-center items-center'}>

                <div className={'printable'}>
                    {selected.filter(Boolean).map((scent, index) => (
                        <div className={'flex items-center justify-center'}>
                        <ContainerLabel key={index} scent={AppData[props.language][scent as Scent]}/>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}