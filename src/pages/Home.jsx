import * as testdata from '../services/json/testMovie.json';

import Search from '../components/Search';
import Card from '../components/Card';



function Home() {
    
    return (
        <>
            <Search></Search>
            <br></br>
            <Card movie={testdata} />
        </>
    )
}

export default Home;