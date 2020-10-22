import React from 'react'
import avatar from './avatar.jpg'

const MyInfo  = () => {
    return (
        <div className="comp-my-info" style={{
            padding: "12px",
            boxSizing: "border-box",
            width: "100%",
            overflow: "hidden",
            clear: "both",
            backgroundColor: "#1e1e1e",
            borderRadius: "4px",
            color: "#999",
        }}>
            <img src={avatar} style={{
                width: "80px",
                height: "80px",
                borderRadius: "4px",
                float: "left",
            }}/>
            <div style={{
                marginLeft: "92px"
            }}>
                <p style={{lineHeight: "24px", marginTop: "4px", fontWeight: "bold"}}>ZYC-BY9986</p>
                <p style={{lineHeight: "24px", fontSize: "12px"}}>前端开发</p>
                <p style={{lineHeight: "24px", fontSize: "12px"}}>GO粉，人菜瘾大！</p>
            </div>
        </div>
    )
}

export default MyInfo