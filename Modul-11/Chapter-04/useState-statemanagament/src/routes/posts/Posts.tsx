import axios from "axios";
import { useEffect, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Posts() {
  const [posts, setPosts] = useState<Posts[] | null>(null);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, status, statusText } = await axios.get<Posts[]>("https://jsonplaceholder.typicode.com/posts");
      console.log(data);
      console.log(status);

      if (status === 200 && data.length > 0) {
        setPosts(data);
      } else {
        setPosts(null);
        setErrorText(statusText);
      }
    } catch (error) {
      setPosts(null);
      setErrorText("An Error occurred");
      console.log(error);
    }
  }

  async function createPost() {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      body: {
        title: "foo2",
        body: "test",
        userId: 1,
      },
    });
    console.log(response);
    console.log(posts);
  }

  function displayPosts() {
    if (posts) {
      return (
        <>
          <div>
            <h1>Posts</h1>
            {posts.map((post) => (
              <div key={post.id}>
                <h3>Title: {post.title}</h3>
                <p>Body: {post.body}</p>
                <p>User ID: {post.userId}</p>
                <p>_______________________________________________</p>
              </div>
            ))}
          </div>
        </>
      );
    } else {
      {
        errorText;
      }
    }
  }
  return (
    <div>
      <button onClick={createPost}>create post</button>
      {displayPosts()}
    </div>
  );
}

export default Posts;
