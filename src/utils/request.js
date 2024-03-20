axios.defaults.baseURL = 'http://127.0.0.1:3000'
const user = (data) => {
    axios({
        url: '/a',
        params: data
    })
        .then(response => {
            return response.data
        }, error => {
            console.log('错误', error.message)
        })
}
