import { FormEvent, useState } from "react";
import Layout from "../layouts/Layout";
import { SongService } from "../services/songs";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

interface Searched {
  type: string;
  id: number;
  name: string;
  image: string;
  artist: string;
}

export const Search = () => {
  const [results, setResults] = useState<Searched | null>(null);
  const { token } = useAuthStore();
  const searchSomething = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const searchInput = elements.namedItem("search") as HTMLInputElement;
    const search = searchInput.value;
    if (search === "") {
      setResults(null);
      return;
    }
    const result = await SongService.search(token, search);
    setResults(result);
  };

  return (
    <>
      <Layout>
        <section className="px-6 pt-10">
          <h1 className="font-bold text-lg">Buscador</h1>
          <form onSubmit={searchSomething}>
            <input
              className="outline-none text-sm bg-white/10 w-full p-2 rounded-md"
              type="text"
              name="search"
            />
          </form>
        </section>
        {results !== null ? (
          results.type === "album" ? (
            <Link to={`/album/${results.id}`}>
              <div className="flex pt-5 px-6 gap-2 items-center">
                <picture>
                  <img
                    className="w-14 h-14 rounded-md"
                    src={results.image}
                    alt={results.name}
                  />
                </picture>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">{results.name}</p>
                  <p className="text-xs text-gray-300">{results.artist}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex pt-5 px-6 gap-2 items-center">
              <picture>
                <img
                  className="w-14 h-14 rounded-md"
                  src={results.image}
                  alt={results.name}
                />
              </picture>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">{results.name}</p>
                <p className="text-xs text-gray-300">{results.artist}</p>
              </div>
            </div>
          )
        ) : null}
      </Layout>
    </>
  );
};
