
//@Ram - utility function to call API
export function apiCall(url, postParams){

    return fetch(url, {
            method : 'POST',
            body : JSON.stringify(postParams)
        }).then(response => response.json()).then(responseJson => {console.log(responseJson)})
        .catch (error => {console.log(error)})
} 