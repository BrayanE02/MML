
import Card from '../components/Card';
import Cookies from 'universal-cookie';
import { getOneMovieById } from '../services/MoviesService';
import { useEffect, useState } from 'react';

export default function MyList(props) {

    var User = props.user;

    const [moviesToWatch, setMoviesToWatch] = useState(null);
    const [watchedMovies, setWatchedMovies] = useState(null);
    const cookies = new Cookies()
    const userCookie = cookies.get("user");

    useEffect(() => {

        async function getMoviesToWatch() {
            let moviesToWatchList = await Promise.all(userCookie.List.map(async (i) => {
                if(i.watched == 0)
                    return {movie: await getOneMovieById(i.MovieID), ID: i.ID, rating: i.rating};
            }))

            setMoviesToWatch(moviesToWatchList);
        }

        async function getWatchedMovies() {
            let watchedMoviesList = await Promise.all(userCookie.List.map(async (i) => {
                if(i.watched == 1)
                    return {movie: await getOneMovieById(i.MovieID), ID: i.ID, rating: i.rating};
            }))

            setWatchedMovies(watchedMoviesList);
        }

        getMoviesToWatch();
        getWatchedMovies();
    }, [])

    

    return (
        <>
            <div className="container mt-3">
                <h1>{User.FirstName}&apos;s List</h1>
                <br></br>
                <div className='container mt-3'>
                    <h3>To Watch</h3>
                    <div className='div-cardlist'>
                        {moviesToWatch && moviesToWatch.map((movie, i) => {
                            if(movie)
                                return <Card movie={movie.movie} user={true} key={i} setOneMovieIDFunc={props.setOneMovieIDFunc} userMovieID={movie.ID} removeFromList={props.removeFromList} rating={movie.rating}></Card>
                        })}
                    </div>
                </div>
                <div className='container mt-3'> 
                    <h3>Watched</h3>
                    <div className='div-cardlist'>
                        {watchedMovies && watchedMovies.map((movie, i) => {
                            if(movie)
                                return <Card movie={movie.movie} user={true} key={i}  setOneMovieIDFunc={props.setOneMovieIDFunc} userMovieID={movie.ID} removeFromList={props.removeFromList} rating={movie.rating}></Card>
                        })}
                    </div>
                    
                </div>
            </div>
        </>
    )
}