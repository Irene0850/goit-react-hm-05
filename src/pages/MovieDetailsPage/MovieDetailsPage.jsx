
import css from './MovieDetailsPage.module.css';

const MovieCast = React.lazy(() =>
    import('../../components/MovieCast/MovieCast')
);

const MovieReviews = React.lazy(() =>
    import('../../components/MovieReviews/MovieReviews')
);

const MovieDetailsPage