// import Image from "next/image";
import { IMovie } from "../../interfaces/IMovie";
import style from "./Movie.module.scss";

interface IProps {
  item: IMovie;
}

function Movie({ item }: IProps) {
  return (
    <a
      href={`https://imdb.com/title/${item.imdbID}`}
      className={style.imageContainer}
    >
      <img src={item.Poster} className={style.image} alt="" />
    </a>
  );
}

//! target='_blank' in "a" tag is not supported in Next.js!!!!!!
// <a target='_blank' href={`https://imdb.com/title/${item.imdbID}`}>

export default Movie;
