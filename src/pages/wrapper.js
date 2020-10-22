import React from 'react'
import Header from '../components/header'
import { Switch, Route } from 'react-router-dom'
import ArticlePage from './article'
import AboutPage from './about'
import ToolsPage from './tools'
import Detail from './detail'
import Banner from '../components/banner'

const Wrapper = () => {
    
    return (
        <>
            <Banner/>
            <div className="page-wrapper" style={{
                margin: "0 auto", 
                width: "100%",
                maxWidth: "1200px",
            }}>
                <Header/>
                <Switch>
                    <Route path="/tools">
                        <ToolsPage/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/detail/:id">
                        <Detail/>
                    </Route>
                    <Route path="/">
                        <ArticlePage/>
                    </Route>
                </Switch>
            </div>
            <footer style={{display: "block", color: "#999", backgroundColor: "#1e1e1e" ,margin: "24px 0 0 0", padding: "16px 0" ,fontSize: "12px", textAlign: "center"}}>
                <p style={{marginBottom: "8px"}}>© 2020 ZYC All Rights Reserved.</p>
                <p><a href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
                style={{color: "#999"}}
                >皖ICP备2020015984号-1</a></p>
            </footer>
        </>
    )
}

export default Wrapper