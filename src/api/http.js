const host = "http://localhost:8080"

function header() {
    const token = sessionStorage.getItem("token")
    if(token){
        return {Token: token}
    }
    return {}
}

async function get(api) {
    return new Promise(function(resolve, reject){
        fetch(host+api, {method: "GET", headers: header()}).then(resp => {
            resp.json().then(data => {
                if(data.code == 0){
                    resolve(data)
                }else{
                    alert(data.msg)
                    reject(data)
                }
            })
        }).catch(e => {
            alert(e)
        })        
    })
}

async function post(api, params) {
    return new Promise(function(resolve, reject){
        fetch(host+api, {method: "POST", body: JSON.stringify(params), headers: header()}).then(resp => {
            resp.json().then(data => {
                if(data.code == 0){
                    resolve(data)
                }else{
                    alert(data.msg)
                    reject(data)
                }
            })
        }).catch(e => {
            alert(e)
        })        
    })
}

async function del(api) {
    return new Promise(function(resolve, reject){
        fetch(host+api, {method: "DELETE", headers: header()}).then(resp => {
            resp.json().then(data => {
                if(data.code == 0){
                    resolve(data)
                }else{
                    alert(data.msg)
                    reject(data)
                }
            })
        }).catch(e => {
            alert(e)
        })        
    })
}


export {
    get,
    post,
    del
}