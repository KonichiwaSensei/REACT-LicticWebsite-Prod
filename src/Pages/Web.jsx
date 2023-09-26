import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext'

export default function Web() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="web_page">
            {/* <div className="web_page_back">

            </div> */}

            <div className="web_page_front">
                <p className={`web_para ${theme}`}>
                    My current web projects are this website and:
                </p>
                <embed className={`web_embed ${theme}`} src="https://mw2camotracker.codeboot.cz/tracker"></embed>
            </div>

        </div>
    )
}