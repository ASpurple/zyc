import React, { useEffect, useState } from 'react'
import './style.scss'
import Card from '../../components/card'
import { get } from '../../api/http'


const ToolsPage = () => {
    
    const [topList, setTopList] = useState([])
    const [bottomList, setBottomList] = useState([])

    useEffect(() => {
        const req = async () => {
            const res = await get("/tools")
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
        <div className="page-tools">
            <h2>常用工具</h2>
            <div>
                {
                    topList.map(it => <Card key={it.id} logo={it.logo} name={it.name} desc={it.desc} link={it.link}/>)
                }
            </div>
            <h2 style={{marginTop: "24px"}}>全部工具</h2>
            <div>
                {
                    bottomList.map(it => <Card key={it.id} logo={it.logo} name={it.name} desc={it.desc} link={it.link}/>)
                }
            </div>
        </div>
    )
}

export default ToolsPage