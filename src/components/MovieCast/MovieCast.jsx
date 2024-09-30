import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { featchMovieCredits, getImageUrl } from "../../Api/Api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await featchMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
        setError("Failed to featch cast information. Please try again later.");
        setCast([]);
      }
    };

    getCast();
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (cast.length === 0) {
    return null;
  }

  return (
    <div className={css.movieCastBox}>
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.castItem}>
            <img
              src={getImageUrl(actor.profile_path)}
              alt={actor.name}
              className={css.castImage}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
