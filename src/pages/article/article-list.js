import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import ArticleCard from '../../components/article-card'
import { get } from '../../api/http'

const ArticleList = props => {
    function useQuery() {
        return new URLSearchParams(useLocation().search)
    }
    let { key } = useParams()
    let query = useQuery()
    let type = query.get("type")
    const [list, setList] = useState([])

    useEffect(() => {
        let path = "/article?tag=" + key
        if(type == "s"){
            path = "/article?keywords=" + key
        }

        const req = async () => {
            const res = await get(path)
            if(res && res.data){
                setList(res.data)
            }else{
                setList([])
            }
        }

        req()

    }, [key])

    return (
        <div className="page-article-content">
            <h2>
                {type == "s" ? `${key}的搜索结果：` : `标签${key}的相关文章：`}
            </h2>
            {
                list.length ? (
                    <div style={{marginTop: "16px"}}>
                        {list.map(it => <ArticleCard key={it.id} article={it} style={{marginBottom: "24px"}}/>)}
                    </div>
                ) : (
                    <div style={{height: "300px", lineHeight: "300px",textAlign: "center", fontSize: "20px"}}>
                        没有相关内容
                    </div>
                )
            }
        </div>
    )
}

export default ArticleList