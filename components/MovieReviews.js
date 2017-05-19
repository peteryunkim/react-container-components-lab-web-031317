import React from 'react'


function MovieReviews(props){

	MovieReviews.defaultProps = {reviews: []}

	const allMovies = props.reviews.map(movie => 
		(<div className="review"> <h1>{movie.display_title}</h1> <p>{movie.headline}</p> </div>))

	return <div className="review-list">{allMovies}</div>
}


export default MovieReviews