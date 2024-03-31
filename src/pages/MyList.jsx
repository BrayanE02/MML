
// Import Test Data
import testdata from '../services/json/testMovie.json';
import Card from '../components/Card';
import Cookies from 'universal-cookie';
import { getOneMovieById } from '../services/MoviesService';
import { useEffect, useState } from 'react';

export default function MyList(props) {

    // A reference to the User object from props
    var User = props.user;

    const [movieData, setMovieData] = useState("");

    useEffect(() => {
        async function getMovieData() {
            const cookies = new Cookies()
            const userCookie = cookies.get("user");

            const md = await getOneMovieById(userCookie.List[0].MovieID);

            console.log("Movie: " + userCookie.List[0]);

            setMovieData(md);
        }

        if(!movieData) {
            getMovieData();
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
                        <Card movie={movieData} user={true}></Card>
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