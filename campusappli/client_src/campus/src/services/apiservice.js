import {api} from './apibase'
export const service = {
    invoke: function (method, url, data = null) {
        if(method.toLowerCase()==="get" && data){
            url+="?"+ this.getQueryStringOfObject(data);
            data = null;
        }
        console.log(method, url, data);
        return fetch(api + url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: data && JSON.stringify(data)
        }
        ).then(res => {
            console.log(res);
            return res.json()
        }).catch(error => {
            console.log(error);
        })
    },
    getQueryStringOfObject: function(obj, prefix) {
        var str = [],
          p;
        for (p in obj) {
          if (obj.hasOwnProperty(p)) {
            var k = prefix ? prefix + "[" + p + "]" : p,
              v = obj[p];
            str.push((v !== null && typeof v === "object") ?
            this.getQueryStringOfObject(v, k) :
              encodeURIComponent(k) + "=" + encodeURIComponent(v));
          }
        }
        return str.join("&");
      }
}