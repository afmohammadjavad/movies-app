import Image from "next/image";
import { IMovie } from "../../interfaces/IMovie";

interface IProps {
  item: IMovie;
}

function Movie({ item }: IProps) {
  return (
    <a
      href={`https://imdb.com/title/${item.imdbID}`}
      style={{ width: "85%", height: "85%", boxShadow: '0 0 15px 5px #222', borderRadius: '5%'}}
    >
      <img src={item.Poster} width="100%" height="100%" alt="" style={{borderRadius: '5%'}}/>
    </a>
  );
}

//! target='_blank' in "a" tag is not supported in Next.js!!!!!!
// <a target='_blank' href={`https://imdb.com/title/${item.imdbID}`}>

export default Movie;
