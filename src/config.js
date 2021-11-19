export const config = {
    url: 'http://eb4f-2407-7000-81b8-fa00-d5d5-c1eb-a557-3ac8.ngrok.io',
    getReqInit: {
        method: "GET",
        mode: 'cors',
        headers: {
            Accept: 'application/ json',
            'Content-Type': 'application/json'
        },
    },
    postReqInit: {
        method: "POST",
        mode: 'cors',
        headers: {
            Accept: 'application/ json',
            'Content-Type': 'application/json'
        },
    }
}