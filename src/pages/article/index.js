import React, { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import MyInfo from '../../components/my-info'
import Tags from '../../components/Tags'
import Search from '../../components/search'
import ArticleList from './article-list'
import DefaultArticleList from './default-article-list'
import "./style.scss"

const ArticlePage = () => {

    let history = useHistory()

    const handler = keywords => {
        history.push("/list/" + keywords + "?type=s")
    }

    return (
        <div className="page-article">
            <div className="aside">
                <MyInfo/>
                <Search style={{marginTop: "16px"}} handler={handler}/>
                <Tags/>
            </div>
            <div className="contents">
                <Switch>
                    <Route path="/" exact>
                        <DefaultArticleList/>
                    </Route>
                    <Route path="/list/:key">
                        <ArticleList/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default ArticlePage