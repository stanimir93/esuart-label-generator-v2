import {FC} from 'react'
import {IScent} from "./data/types.ts";

export const ContainerLabel: FC<{ scent: IScent }> = (props) => {

    return (
        <section className={'w-[72mm] h-[72mm] flex rounded-full border border-black'}>
            {props.scent.name}
        </section>
    )
}