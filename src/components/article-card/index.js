import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const ArticleCard = props => {
    const a = props.article
    return (
        <Link style={{color: "#fff"}} to={`/detail/${a.id}`}>
            <div className="comp-article-card" style={props.style || null}>
                <img src={a.cover} alt="COVER"/>
                <div className="info">
                    <h2>{a.title}</h2>
                    <p>标签：{a.tags}</p>
                    <p>阅读：{a.readed}&nbsp;&nbsp;&nbsp;&nbsp;发布：{a.time}</p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard