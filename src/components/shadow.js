
function Shadow(full, fn) {
    if(!full && document.documentElement.clientWidth > 760){
        return
    }
    let shadow = document.querySelector(".comp-shadow")
    if(!shadow){
        const div = document.createElement("div")
        div.className = "comp-shadow"
        div.style.position = "fixed"
        div.style.width = "100vw"
        div.style.height = "100vh"
        div.style.top = "0px"
        div.style.left = "0px"
        div.style.backgroundColor = "#000"
        div.style.opacity = 0
        div.style.zIndex = -1
        div.style.transition = ".3s"
        div.onclick = function() {
            const aside = document.querySelector(".aside")
            if(aside && aside.style.left == "0px"){
                aside.style.left = "-1000px"
            }
            if(fn){
                fn()
            }
            shadow.style.opacity = 0
            shadow.style.zIndex = -1
        }
        document.body.appendChild(div)
        shadow = div
    }
    if(shadow.style.opacity == 0){
        shadow.style.opacity = 0.7
        shadow.style.zIndex = 88
    }else{
        shadow.style.opacity = 0
        shadow.style.zIndex = -1
    }
}

function OpenAside() {
    const aside = document.querySelector(".aside")
    aside.style.left = "0px"
    Shadow()
}

function CloseAside() {
    const aside = document.querySelector(".aside")
    aside.style.left = "-1000px"
    Shadow()
}

export {
    Shadow,
    OpenAside,
    CloseAside,
}