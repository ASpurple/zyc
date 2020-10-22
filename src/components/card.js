import React from 'react'

/* 
logo
name
desc
link
*/

const Card = props => {

    return (
        <div className="comp-card" style={{
            width: props.width,
            height: "88px",
            boxSizing: "border-box",
            padding: "8px",
            backgroundColor: "#1e1e1e",
            cursor: "pointer",
            whiteSpace: "nowrap",
            position: "relative",
            display: "inline-block",
            borderRadius: "4px",
            maxWidth: "100%",
        }}
        onClick={() => {window.open(props.link)}}
        >
            <img src={props.logo}
            style={{
                width: "72px",
                height: "72px",
                borderRadius: "4px",
                position: "absolute",
                top: "8px",
                left: "8px",
            }}
            />
            <div style={{
                marginLeft: "88px",
            }}>
                <h3
                style={{
                    height: "24px",
                    lineHeight: "24px",
                    fontSize: "20px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
                >{props.name}</h3>
                <p
                style={{
                    fontSize: "12px",
                    marginTop: "8px",
                    height: "40px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    whiteSpace: "normal",
                }}
                >{props.desc}</p>
            </div>
        </div>
    )
}

export default Card