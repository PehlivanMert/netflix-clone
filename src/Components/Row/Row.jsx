import { useState, useEffect } from "react";
import axios from "../../API/axios";
import "./Row.css";
import MovieModal from "../MovieModal/MovieModal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RowItem from "../RowItem/RowItem";

const Row = ({ title, fetchUrl, isLargeRow, id }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [movieSelected, setMovieSelection] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setModalVisibility(true);
    setMovieSelection(movie);
  };
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider-arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            <ArrowBackIosIcon />
          </span>
        </div>
        <div id={id} className="row-posters">
          {movies.map((movie) => (
            <RowItem
              key={movie.id}
              movie={movie}
              handleClick={handleClick}
              isLargeRow={isLargeRow}
              base_url={base_url}
            />
          ))}
        </div>
        <div className="slider-arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            <ArrowForwardIosIcon />
          </span>
        </div>
      </div>
      {modalVisibility && (
        <MovieModal
          {...movieSelected}
          setModalVisibility={setModalVisibility}
        />
      )}
    </section>
  );
};

export default Row;
