const apiKey = 'OVyXC0RkOlfQqG9wSdXJZVIHFUrrSVSh';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(resp =>  resp.json())
.then(body => console.log({body}))
.catch(error => console.info(error));

