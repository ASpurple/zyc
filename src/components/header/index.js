import React, { useEffect, useState } from 'react'
import "./style.scss"
import Button from '../button'
import { Shadow } from '../../components/shadow'
import { post } from '../../api/http'
import md5 from 'md5'

const menuBtns = [
    {label: "首页", to: "/", active: false},
    {label: "工具", to: "/tools", active: false},
    {label: "关于", to: "/about", active: false}
]

const Header = () => {
    const [btns, setBtns] = useState(menuBtns)
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const updateActive = () => {
        const arr = window.location.pathname.split("/")
        let curPath = "/"
        if (arr.length > 1){
            curPath += arr[1]
        }
        const newMenuBtns = menuBtns.map(it => ({...it, active: it.to == curPath}))
        setBtns(newMenuBtns)
    }
    useEffect(updateActive, [])

    const switchAside = () => {
        const aside = document.querySelector(".aside")
        if (!aside){return}
        if(aside.style.left != "0px"){
            aside.style.left = "0px"
            Shadow()
        }else{
            aside.style.left = "-1000px"
            Shadow()
        }
    }

    const openModal = () => {
        setShowModal(!showModal)
        Shadow(true, () => {setShowModal(false)})
    }

    const login = async () => {
        if (name == "" || password == ""){
            alert("请正确输入用户名和密码")
            return
        }
        const pwd = md5(password)
        const res = await post("/login", {name, key: pwd})
        if(res && res.code == 0){
            sessionStorage.setItem("token", res.data)
            window.location.href = "/admin/"
        }
    }

    return (
        <div className="comp-header" style={showModal ? {zIndex: "99"} : {zIndex: "1"}}>
            <div className="comp-header-wrapper">
                <Button txt="ZYC" to="/" style={{fontSize: "18px"}}/>
                <div className="menu" onClick={updateActive}>
                    {
                        btns.map(it => <Button txt={it.label} to={it.to} active={it.active} className="btn" key={it.to}/>)
                    }
                </div>
                <Button txt="Login" click={openModal} className="login-btn"/>
                <Button txt="Aside" click={switchAside} className="aside-btn"/>
            </div>
            <div className="login-modal" style={showModal ? {top: "50%"} : null}>
                <input type="text" placeholder="用户名" value={name} onChange={e => {setName(e.target.value)}}/>
                <input type="password" placeholder="密码" value={password} onChange={e => {setPassword(e.target.value)}}/>
                <button onClick={login}>登 录</button>
            </div>
        </div>
    )
}

export default Header