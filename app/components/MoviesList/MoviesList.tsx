import { Col, Row } from "antd";
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

const MoviesList = ({ movies }: IProps) => {
  return (
    <Container>
      <Filter />
      <Row gutter={[0, 0]} style={{ textAlign: "center" }}>
        {movies.Search.map((item) => (
          <Col key={item.imdbID} {...colProps}>
            <Movie item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesList;
