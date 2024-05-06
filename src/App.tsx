import {useState} from 'react'
import {Lang} from "./data/types.ts";
import {ContainerCandles} from "./ContainerCandels.tsx";

enum Type {
    container = 'Container Label',
}


function App() {
    const [defaultLang] = useState<Lang>(Lang.cz)
    const [type, setType] = useState<Type>(Type.container)

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value as Type)
    }

    // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setLanguage(e.target.value as Lang)
    // }

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className={'bg-cyan-50 min-h-screen print:bg-white'}>
            <nav className={'print:hidden flex items-center justify-between gap-5 p-5 bg-pink-200 shadow'}>
                {/*<p className={'flex gap-2'}>*/}
                {/*    <label>Language</label>*/}
                {/*    <select*/}
                {/*        value={language}*/}
                {/*        onChange={handleLanguageChange}*/}
                {/*    >*/}
                {/*        {Object.values(Lang).map(value => (*/}
                {/*            <option key={value} value={value}>{value}</option>*/}
                {/*        ))}*/}
                {/*    </select>*/}
                {/*</p>*/}
                <p className={'flex gap-2'}>
                    <label>Type</label>
                    <select
                        value={type}
                        onChange={handleTypeChange}
                    >
                        {Object.values(Type).map(value => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </p>
                <button onClick={handlePrint} className="button">
                    Print 🖨️
                </button>
            </nav>
            <div className={'p-5 print:p-0'}>
                <ContainerCandles defaultLang={defaultLang}/>
            </div>

        </div>
    )
}

export default App
