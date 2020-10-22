import React, { useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './style.scss'
import BasicConfig from './basic-config'
import TagManage from './tag-manage'
import ArticleManage from './article-manage'
import ToolsManage from './tools-manage'

const AdminIndexPage = () => {
    
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if(!token){
            window.location.href = "/"
        }
    }, [])

    return (
        <div className="page-admin-index">
            <header>
                <Link to="/admin/">基础配置</Link>
                <Link to="/admin/tag">标签管理</Link>
                <Link to="/admin/article">文章管理</Link>
                <Link to="/admin/tools">工具管理</Link>
            </header>
            <div style={{padding: "24px"}}>
                <Switch>
                    <Route path="/admin/" exact>
                        <BasicConfig/>
                    </Route>
                    <Route path="/admin/tag">
                        <TagManage/>
                    </Route>
                    <Route path="/admin/article">
                        <ArticleManage/>
                    </Route>
                    <Route path="/admin/tools">
                        <ToolsManage/>
                    </Route>
                </Switch>
            </div>    
        </div>
    )
}

export default AdminIndexPage