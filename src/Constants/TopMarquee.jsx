import Marquee from "react-fast-marquee";

import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

export default function TopMarquee() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Marquee
                className={`top_of_page-marquee ${theme}`}
                autoFill="true"
                speed={30}
            >
                Lictic &#8203;
            </Marquee>
        </>
    )
}