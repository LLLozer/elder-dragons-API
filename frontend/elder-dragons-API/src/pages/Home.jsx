import "../styles/Home.css";
import { useMonsters } from "../hooks/useMonsters";
import { MonsterCard } from "../components/MonsterCard";
import { Loading } from "../components/Loading";

export const Home = () => {
  const { monsters, loading, error } = useMonsters();

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home">
      <div className="home__grid">
        {monsters.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} />
        ))}
      </div>
    </div>
  );
};
