import { useFetch } from "../hooks/useFetch";
import { Header } from "../components/Header/Header";

export const Home = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <>
        <Header color="clear" title="Reto 20" subtitle="Custom Hooks" />
        <div>Loading...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header color="clear" title="Reto 20" subtitle="Custom Hooks" />
        <div>Error: {error.message}</div>
      </>  
    );
  }

  return (
    <>
      <Header color="dark" title="Reto 20" subtitle="Custom Hooks" />
      <div>
        {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
};
