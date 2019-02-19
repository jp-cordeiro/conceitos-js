let posts = fetch('https://willianjusten.com.br/search.json')
posts
    .then(posts => posts.json())
    .then(posts => posts.map(post => console.log(post.title)))
    .catch(error => console.log(error))