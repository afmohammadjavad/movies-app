import { Col, Row } from "antd";
import { IMovie } from "../../interfaces/IMovie";
import Movie from "../Movie/Movie";

interface IProps {
  movies: {
    Search: IMovie[];
  };
}

const MoviesList = ({ movies }: IProps) => {
  return (
    <Row gutter={[0, 16]} style={{ textAlign: "center" }}>
      {movies.Search.map((item) => (
        <Col key={item.imdbID} xs={24} sm={12} md={8} lg={6}>
          <Movie item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default MoviesList;
