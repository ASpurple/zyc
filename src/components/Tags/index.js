import React, { useEffect, useState } from 'react'
import "./style.scss"
import arrow from './arrow.png'
import { Link } from 'react-router-dom'
import { CloseAside } from '../shadow'
import { get } from '../../api/http'

const Tags = () => {
    const [tags, setTags] = useState([])
    let  [curTag, setCurTag] = useState("")
    let [ opened, setOpened ] = useState("")

    const checkPath = () => {
        let p = window.location.pathname
        let i = p.lastIndexOf("/")
        if (i > 0 && i != p.length-1){
            i++
            p = p.substring(i)
        }
        return decodeURI(p)
    }

    useEffect(() => {
        const req = async () => {
            const data = await get("/tag/tree")
            setTags(data.data)
            const name = checkPath()
            data.data.forEach(it => {
                it.children.forEach(c => {
                    if(c.name == name){
                        setOpened(it.name)
                        setCurTag(c.name)
                    }
                })
            })
        }
        req()
    }, [])
    
    return (
        <div className="comp-tags">
            <h2>内容分类</h2>
            <ul className="tag-list">
                {
                    tags.map(it => <li key={it.name}>
                        <div className={it.name == opened ? "first-tag first-tag-active" : "first-tag"}>
                            <p onClick={() => {if(opened == it.name){setOpened(-1);return;}setOpened(it.name)}}>
                                <span dangerouslySetInnerHTML={{__html: it.logo}}/>
                                <span className="tag-name">{it.name}</span>
                                <img src={arrow} />
                            </p>
                            <div className="second-tags">
                                {
                                    it.children.map(cd => <Link key={cd.name} onClick={() => {setCurTag(cd.name);CloseAside();}} to={`/list/${cd.name}`} className="link" style={curTag == cd.name ? {color: "orange"} : null}>{cd.name}</Link>)
                                }
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Tags