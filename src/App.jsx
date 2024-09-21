import useFetch from './CustomHooks/useFetch'; // Import the custom hook

const App = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  ); // Use the hook with an API endpoint

  if (loading) return <p>Loading...</p>; // Display loading state
  if (error) return <p>Error: {error}</p>; // Display error if any

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li> // Display the fetched data
        ))}
      </ul>
    </div>
  );
};

export default App;
