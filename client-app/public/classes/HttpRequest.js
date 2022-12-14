class HttpRequest {
    
    static get(url, params = {}){
        return HttpRequest.request('GET', url, params);
    }

    static post(url, params = {}){
        return HttpRequest.request('POST', url, params);
    }

    static delete(url, params = {}){
        return HttpRequest.request('DELETE', url, params);
    }

    static put(url, params = {}){
        return HttpRequest.request('PUT', url, params);
    }

    static request(method, url, params = {}) {
        return new Promise((resolve, reject) => {
            let ajax = new XMLHttpRequest();
    
            ajax.open(method.toUpperCase(), url);

            ajax.onerror = e => {
                reject(e)
            }

            ajax.onload = event => {
                let resObj = {};
                try {
                    resObj = JSON.parse(ajax.responseText);
                } catch(e){
                    reject(e)
                    console.error(e)
                }
                resolve(resObj)
            }
            ajax.setRequestHeader('Content-Type','application/json');
            console.log(params)
            ajax.send(JSON.stringify(params));
        });
    }

}