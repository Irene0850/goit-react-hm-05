import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePages/HomePage"));

const MoviesPage = React.lazy(() => import("./pages/MoviesPage/MoviePage"));

const MovieDetailsPage = React.lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

const NotFoundPage = React.lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage")
);

const Navigation = React.lazy(() =>
  import("./components/Navigation/Navigation")
);

const MovieCast = React.lazy(() =>
  import("./components/MovieCast / MovieCast")
);

const MovieReviews = React.lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="revies" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
