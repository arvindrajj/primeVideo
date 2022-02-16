import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-img"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movies={actionMoviesList} />
      </div>
      <div className="movies-container">
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movies={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
