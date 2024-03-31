
import Card from '../components/Card';
import Cookies from 'universal-cookie';
import { getOneMovieById } from '../services/MoviesService';
import { useEffect, useState } from 'react';

export default function MyList(props) {

    var User = props.user;

    const [moviesToWatch, setMoviesToWatch] = useState(null);
    const [watchedMovies, setWatchedMovies] = useState(null);

    useEffect(() => {
        const cookies = new Cookies()
        const userCookie = cookies.get("user");

        async function getMoviesToWatch() {
            let moviesToWatchList = await Promise.all(userCookie.List.map(async (i) => {
                if(i.watched == 0)
                    return await getOneMovieById(i.MovieID);
            }))

            setMoviesToWatch(moviesToWatchList);
        }

        async function getWatchedMovies() {
            let watchedMoviesList = await Promise.all(userCookie.List.map(async (i) => {
                if(i.watched == 1)
                    return await getOneMovieById(i.MovieID);
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
                                return <Card movie={movie} user={true} key={i} setOneMovieIDFunc={props.setOneMovieIDFunc}></Card>
                        })}
                    </div>
                </div>
                <div className='container mt-3'> 
                    <h3>Watched</h3>
                    <div className='div-cardlist'>
                        {watchedMovies && watchedMovies.map((movie, i) => {
                            if(movie)
                                return <Card movie={movie} user={true} key={i}  setOneMovieIDFunc={props.setOneMovieIDFunc}></Card>
                        })}
                    </div>
                    
                </div>
            </div>
        </>
    )
}