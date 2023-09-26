import LicticLogoModel from "./ThreejsModels/LicticLogoModel"
import Navigator from "./Constants/Navigator"
import MainPage from "./Pages/MainPage"
import AboutMe from "./Pages/AboutMe"
import Web from "./Pages/Web"
import Music from "./Pages/Music"

import { ThemeContext } from "./Contexts/ThemeContext"
import { ModelTransformContext } from "./Contexts/ModelTransformContext"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

import Lottie from 'lottie-react'
import LottieAudioWaveRed from './assets/LottieJsons/LottieAudioWaveRed.json'
import LottieAudioWavePurple from './assets/LottieJsons/LottieAudioWavePurple.json'



export default function App() {

    const [theme, setTheme] = useState("red")

    const [lottieAnimationColour, setLottieAnimationColour] = useState(LottieAudioWavePurple);

    const [modelTransformation, setModelTransformation] = useState({rotationX: 0, rotationY: 0 });


    useEffect(() => {
        if (theme === "red") {
            document.body.style.backgroundColor = "#D6003D";
            setLottieAnimationColour(LottieAudioWavePurple)
        } else if (theme === "purple") {
            document.body.style.backgroundColor = "#2E1E3A";
            setLottieAnimationColour(LottieAudioWaveRed)
        }
    }, [theme]);

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {/* <ModelTransformContext.Provider value={{modelTransformation, setModelTransformation}}> */}
                    <BrowserRouter>

                        <Navigator />

                        <LicticLogoModel />

                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/web" element={<Web />} />
                            
                            <Route path="/about-me" element={<AboutMe />} />
                            
                        </Routes>

                        <Lottie className={'lottie_audio_animation' + ' ' + theme} animationData={lottieAnimationColour} />

                    </BrowserRouter>
                {/* </ModelTransformContext.Provider> */}
            </ThemeContext.Provider>
        </>
    )
}