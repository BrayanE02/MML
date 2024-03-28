
// Import Test Data
import testdata from '../services/json/testMovie.json';
import Card from '../components/Card';

export default function MyList(props) {

    var User = props.user;
    console.log(User)
    return (
        <>
            <div className="container mt-3">
                <h1>{User.FirstName}&apos;s List</h1>
                <br></br>
                <div className='container mt-3'>
                    <h3>To Watch</h3>
                    <div className='div-cardlist'>
                        <Card movie={testdata} user={true}></Card>
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