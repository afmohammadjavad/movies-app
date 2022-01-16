import { Col, Row, Skeleton } from "antd";
import { useState } from "react";
import { IMovie } from "../../interfaces/IMovie";
import Container from "../Container/Container";
import Filter from "../Filter/Filter";
import Movie from "../Movie/Movie";

interface IProps {
  movies: {
    Search: IMovie[];
  };
}

const colProps = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
  style: { display: "flex", justifyContent: "center", alignItems: "center" },
};

function MoviesList({ movies }: IProps) {
  const [moviesList, setMoviesList] = useState(movies.Search || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function search(movieTitle: string): Promise<void> {
    try {
      setLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=ee197ac1&s=${movieTitle}`
      );
      const data = await response.json();

      if (data.Response === "False") return setError(true);

      setError(false);
      setMoviesList(data.Search);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (error)
    return (
      <div style={{padding: '0 10px'}}>
        <Filter search={search} />
        <div style={{ textAlign: "center", marginTop: 100, fontSize: 24 }}>
          Movies with this title Not found.
        </div>
      </div>
    );

  if (loading) return <Skeleton />;

  return (
    <Container>
      <Filter search={search} />
      <Row gutter={[0, 0]} style={{ textAlign: "center" }}>
        {moviesList.map((item) => (
          <Col key={item.imdbID} {...colProps}>
            <Movie item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MoviesList;
