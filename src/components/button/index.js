import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

/* 
active: 选中状态 bool，默认false
to: 链接 string
txt: 显示的文本 string
outSite: 是否是站外链接 bool，默认false
*/

const Button = (props) => {
    let style = props.style || {}
    if (props.active && props.to){
        style = {...style, backgroundColor: "#4d4d4d"}
    }
    let className = "basic-button"
    if (props.className){
        className += " " + props.className
    }
    return (
        props.to && !props.outSite ? (
            <Link style={style} className={className} to={props.to} onClick={props.onClick || null}>
                {props.txt}
            </Link>
        ) : (
            <a style={style} className={className} to={props.to || null} onClick={props.click || null}>
                {props.txt}
            </a>
        )
    )
}

export default Button