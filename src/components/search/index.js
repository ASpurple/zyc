import React, { useState } from 'react'
import Button from '../button'
import { CloseAside } from '../shadow'

const Search = props => {
    const [keywords, setKeywords] = useState("")
    
    const searchHandler = () => {
        if(keywords.trim() == ""){return}
        if(props.handler){
            props.handler(keywords)
            CloseAside()
        }
    }

    const onKeydown = e => {
        if(e.keyCode == "13"){
            searchHandler()
        }
    }

    return (
        <div className="comp-search" style={props.style || null}>
            <input value={keywords} placeholder="搜索文章..." type="text" onChange={e => {setKeywords(e.target.value)}}
            style={{
                width: "166px",
                height: "30px",
                padding: "0 0 0 4px",
                margin: "0 8px 0 0",
                outline: "none",
                borderRadius: "4px",
                border: "none",
                background: "transparent",
                border: "1px solid #1e1e1e",
                color: "#fff"
            }}
            onKeyDown={onKeydown}
            />
            <Button txt="GO" click={searchHandler}
            style={{
                border: "1px solid #1e1e1e",
            }}
            />
        </div>
    )
}

export default Search