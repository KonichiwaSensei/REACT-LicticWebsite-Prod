import Marquee from "react-fast-marquee";

import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

export default function BottomMarquee() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Marquee
                className={`bottom_of_page-marquee ${theme}`}
                autoFill="true"
                speed={30}
                direction="right-to-left"
            >
                Lictic &#8203;
            </Marquee>
        </>
    )
}