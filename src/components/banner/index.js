import React, { useRef, useState } from 'react'
import bg from './bg.jpg'
import m from './m.png'
import pauseImg from './pause.png'
import playImg from './play.png'
import changeImg from './change.png'
import "./style.scss"

const Banner = () => {

    const [play, setPlay] = useState(false)
    
    const audio = useRef()

    const onPlay = () => {
        const p = !play
        setPlay(p)
        if(p){
            audio.current.play()
        }else{
            audio.current.pause()
        }
    }

    return (
        <div className="comp-banner" style={{background: `url(${bg}) repeat-x top left`}}>
            <div className="banner-shadow"/>
            <div className="banner-box">
                <audio ref={audio} src="/assets/mic/wrzd.mp3" loop controls autobuffer="true"></audio>
                <img src={ play ? pauseImg : playImg} alt="播放" onClick={onPlay}/>
                <img src={changeImg} style={{right: "16px"}}/>
                <img src={m} style={{right: "136px"}} className={play ? "rotate" : null}/>
                <span>任然——无人之岛</span>
            </div>
        </div>
    )
}

export default Banner