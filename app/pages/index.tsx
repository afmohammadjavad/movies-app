import PublicLayout from "../components/PublicLayout/PublicLayout";
import MoviesList from "../components/MoviesList/MoviesList";
import { IMovie } from "../interfaces/IMovie";

//? Interface
interface IProps {
  movies: {
    Search: IMovie[];
  };
  hasError: boolean;
}

//* Root Component
export default function Home({ movies, hasError }: IProps) {
  if (hasError) return <div>Something went wrong.</div>;

  return (
    <PublicLayout>
      <MoviesList movies={movies} />
    </PublicLayout>
  );
}

//^=============================================================================

//* Server Side Rendering
export async function getServerSideProps() {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=ee197ac1&s=avengers"
    );
    const data = await response.json();
    console.log(data);

    return {
      props: {
        movies: data,
      },
    };
  } catch (e) {
    console.log(e);

    return {
      props: {
        hasError: true,
      },
    };
  }
}
