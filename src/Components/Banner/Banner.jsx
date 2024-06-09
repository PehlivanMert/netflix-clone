import { useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import axios from "../../API/axios";
import requests from "../../API/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">
            <PlayArrowIcon />
            Play
          </button>
          <button className="banner-button info">
            <InfoIcon fontSize="small" paddingRight={20} marginRight={100} />
            <div className="space"></div> More Information
          </button>
        </div>

        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
