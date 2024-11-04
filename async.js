fetch('https://dummyjson.com/products/1', {
    method: "Put",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        tittle: "iphone 19",
        description: "changed to iphone 19",
        price: "1000",
        rating: "9/10"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))