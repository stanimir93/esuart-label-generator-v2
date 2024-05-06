import {useState} from 'react'
import {Lang} from "./data/types.ts";
import {ContainerCandles} from "./ContainerCandels.tsx";

enum Type {
    container = 'Container Label',
}


function App() {
    const [language, setLanguage] = useState<Lang>(Lang.en)
    const [type, setType] = useState<Type>(Type.container)

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value as Type)
    }

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as Lang)
    }

    return (
        <div className={'bg-cyan-50 min-h-screen'}>
            <nav className={'flex items-center gap-5 p-5 bg-pink-200 shadow'}>
                <p className={'flex gap-2'}>
                    <label>Language</label>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        {Object.values(Lang).map(value => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </p>
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
            </nav>
            <div className={'p-5'}>

            <ContainerCandles language={language}/>
            </div>

        </div>
    )
}

export default App
