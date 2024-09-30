import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieCredits, getImageUrl } from "../../Api/Api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getCast = async () => {
      setLoading(true);
      try {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
        setError("Failed to featch cast information. Please try again later.");
        setCast([]);
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  if (loading) {
    return <p>Loading cast...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
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
