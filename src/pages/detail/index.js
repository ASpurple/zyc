import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './style.scss'
import { get } from '../../api/http'

const Detail = props => {
    let history = useHistory()
    let { id } = useParams()
    const [article, setArticle] = useState({})
    useEffect(() => {
        const req = async () => {
            const res = await get("/article/detail/" + id)
            if(res && res.data){
                setArticle(res.data)
            }else{
                setArticle({})
            }
        }
        req()
    }, [])

    return (
        <div className="page-detail" onDoubleClick={() => {history.goBack(-1)}}>
            <h1>{article.title}</h1>
            <p>标签：{article.tags}</p>
            <div className="contents" dangerouslySetInnerHTML={{__html: article.content}}/>
            <p style={{textAlign: "right"}}>阅读：{article.readed}&nbsp;&nbsp;&nbsp;&nbsp;发布：{article.time}</p>
        </div>
    )
}

export default Detail