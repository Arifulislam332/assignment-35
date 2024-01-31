import { useFetch } from "../hooks/useFetch";

const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </div>
      )}

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};
export default Posts;
