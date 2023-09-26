import ThemeSelector from "./ThemeSelector"
import TopMarquee from "./TopMarquee"
import BottomMarquee from "./BottomMarquee"

import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Lottie from 'lottie-react'
import LottieArrowRightPurple from '../assets/LottieJsons/LottieArrowRightPurple.json'
import LottieArrowRightRed from '../assets/LottieJsons/LottieArrowRightRed.json'


import { ThemeContext } from "../Contexts/ThemeContext"
import { ModelTransformContext } from "../Contexts/ModelTransformContext"



export default function Navigator() {

    const [menuClick, setMenuClick] = useState(false)

    const [lottieAnimationColour, setLottieAnimationColour] = useState(LottieArrowRightPurple);

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme === "red") {
            setLottieAnimationColour(LottieArrowRightPurple)
        } else if (theme === "purple") {
            setLottieAnimationColour(LottieArrowRightRed)
        }
    }, [theme]);

    // const { modelTransformation, setModelTransformation } = useContext(ModelTransformContext);

    // const transformationMapping = {
    //     "/": { rotationX: 0, rotationY: 0 },
    //     "/music": { rotationX: Math.PI / 2, rotationY: 0 },
    //     "/web": { rotationX: 0, rotationY: Math.PI / 2 },
    //     "/about-me": { rotationX: Math.PI / 4, rotationY: Math.PI / 4 },
    // };

    const handleMenuDisplay = () => {
        // Toggle the menuClick state directly
        setMenuClick(!menuClick);
    };

    // Use the menuClick state to determine the classes
    const burgerClass = menuClick ? "burger-bar clicked" : "burger-bar unclicked";
    const menuClass = menuClick ? "menu visible" : "menu hidden";

    const handleLinkClick = () => {
        // Set menuClick to false when a link is clicked
        setMenuClick(false);
    }

    return (
        <>
            <div className="navigator">

                <TopMarquee />

                <div className={"burger_menu" + " " + theme} onClick={handleMenuDisplay}>
                    <div className={burgerClass + " " + theme}></div>
                    <div className={burgerClass + " " + theme}></div>
                    <div className={burgerClass + " " + theme}></div>
                </div>

                {menuClick ? false : (
                    <Lottie
                        className={"burger_click_me" + " " + theme}
                        animationData={lottieAnimationColour}
                    />
                )}

                <ThemeSelector />

                <div className={menuClass + " " + theme}>
                    <Link to="/" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Home</Link>
                    <Link to="/music" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Music</Link>
                    <Link to="/web" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Web</Link>
                    <Link to="/about-me" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>About Me</Link>
                </div>

                <BottomMarquee />
            </div>
        </>
    )


}