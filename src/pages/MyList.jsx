
// Import Test Data
import testdata from '../services/json/testMovie.json';
import Card from '../components/Card';
import Cookies from 'universal-cookie';
import { getOneMovieById } from '../services/MoviesService';
import { useEffect, useState } from 'react';

export default function MyList(props) {

    // A reference to the User object from props
    var User = props.user;

    const [movies, setMovies] = useState("");

    useEffect(() => {
        async function getMovies() {
            const cookies = new Cookies()
            const userCookie = cookies.get("user");
            let moviesList = [];

            userCookie.List.forEach(async (i) => {
                moviesList.push(await getOneMovieById(i.MovieID))
            })

            moviesList.forEach((i) => console.log("List: " + i));

            setMovies(moviesList);
        }

        if(!movies) {
            getMovies();
        }
    }, [])

    return (
        <>
            <div className="container mt-3">
                <h1>{User.FirstName}&apos;s List</h1>
                <br></br>
                <div className='container mt-3'>
                    <h3>To Watch</h3>
                    <div className='div-cardlist'>
                        
                        <Card movie={movies[0]} user={true}></Card>
                        <Card movie={movies[1]} user={true}></Card>
                    </div>
                </div>
                <div className='container mt-3'> 
                    <h3>Watched</h3>
                    <div className='div-cardlist'>
                        <Card movie={testdata} user={true}></Card>
                        <Card movie={testdata} user={true}></Card>
                        <Card movie={testdata} user={true}></Card>
                        <Card movie={testdata} user={true}></Card>
                        <Card movie={testdata} user={true}></Card>
                        <Card movie={testdata} user={true}></Card>
                    </div>
                    
                </div>
            </div>
        </>
    )
}