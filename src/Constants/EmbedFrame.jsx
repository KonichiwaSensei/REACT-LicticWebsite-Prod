import { useState } from "react";
// import Lottie from 'lottie-react'
// import LottieCirclesAnimation from '/src/assets/LottieJsons/LottieCirclesAnimation.json?url'

export default function EmbedFrame({pText, pClassName, iframeClassName, url}) {

    const [shakingAnimation, setShakingAnimation] = useState("shaking_animation");

    const handleShakeStart = () => {
        if (shakingAnimation) {
            setShakingAnimation("")
        } else {
            setShakingAnimation("shaking_animation");
        }
    };


    return (
        <>
            <p className={`${pClassName} ${shakingAnimation}`}>{pText}</p>
            <iframe
                onMouseEnter={handleShakeStart}
                onMouseLeave={handleShakeStart}
                onTouchStart={handleShakeStart}
                // onTouchEnd={handleShakeStart}
                className={`${iframeClassName} ${shakingAnimation}`}
                src={url}
                title="Lictic Embed"
                frameBorder="1"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                loading="lazy"
                allowFullScreen
            >
                
            </iframe>
            {/* <Lottie className={`embed_lottie_animation ${pText}`} animationData={LottieCirclesAnimation}/> */}
        </>
    )
}