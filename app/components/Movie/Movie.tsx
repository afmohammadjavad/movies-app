import { IMovie } from "../../interfaces/IMovie";

interface IProps {
  item: IMovie;
}

function Movie({ item }: IProps) {
  return <img src={item.Poster} />;
}

export default Movie;
