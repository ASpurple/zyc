import React, { useEffect, useState } from 'react'
import './style.scss'
import { get } from '../../api/http'

const TagManage = () => {
    const [tags, setTags] = useState([])
    useEffect(() => {
        const getTags = async () => {
            const res = await get("/tag")
            if(res){
                setTags(res.data)
            }
        }
        getTags()
    }, [])

    return (
        <div className="page-tag-manage">
            <h1 style={{color: "orange"}}>标签管理</h1>

        </div>
    )
}

export default TagManage