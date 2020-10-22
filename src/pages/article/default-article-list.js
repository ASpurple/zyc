import React, { useEffect, useState } from 'react'
import { get } from '../../api/http'
import ArticleCard from '../../components/article-card'

const DefaultArticleList = () => {

    const [topList, setTopList] = useState([])
    const [bottomList, setBottomList] = useState([])

    useEffect(() => {
        const req = async () => {
            const res = await get("/index")
            const data = res.data
            if(data && data.length){
                const t = data.filter(it => it.top)
                const b = data.filter(it => !it.top)
                setTopList(t)
                setBottomList(b)
            }else{
                setTopList([])
                setBottomList([])
            }
        }
        req()
    }, [])


    return (
        <div className="page-article-content">
            <h2 style={{marginBottom: "24px"}}>置顶文章</h2>
            <div>
                {
                    topList.map(it => <ArticleCard key={it.id} article={it} style={{marginBottom: "24px"}}/>)
                }
            </div>
            <h2 style={{marginBottom: "24px"}}>近期更新</h2>
            <div>
                {
                    bottomList.map(it => <ArticleCard key={it.id} article={it} style={{marginBottom: "24px"}}/>)
                }
            </div>
        </div>
    )
}

export default DefaultArticleList