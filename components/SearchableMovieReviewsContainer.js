import React from 'react'
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			reviews: [],
			value: ""
		}
	}

	searchMovie(){
		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=${this.state.value}?api-key=bc5664b93f1a479986bb67d4ad0a00b4`)
		.then(res => res.json())
		.then(data => this.setState({reviews: data.results}))
	}

	handleSearch(ev){
		ev.preventDefault();
		this.setState({
			value: ev.target.value
		})
	}

	render(){
		
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.searchMovie.bind(this)}>
					<input type="text" value={this.state.value} onChange={this.handleSearch.bind(this)}/>
					<input type="submit"/>
				</form>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer