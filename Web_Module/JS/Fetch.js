async function getPosts(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data.title))
    .catch((err) => console.log("Error", err));
}

getPosts(3);
