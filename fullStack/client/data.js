export const loadData = () => {
    let api = "http://127.0.0.1:3008/"
    return fetch(api).then((response) => {
        return response.json()
    })
}