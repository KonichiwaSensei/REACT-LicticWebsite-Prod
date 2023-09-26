import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext'

export default function AboutMe() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="about_me_page">
            {/* <div className="about_me_page_back">

            </div> */}

            <div className="about_me_page_front">
                <p className={`about_me_para ${theme}`}>
                    Hello, I am Matthew, a passionate junior full stack web developer and audio engineer!
                </p>
            </div>

        </div>
    )
}