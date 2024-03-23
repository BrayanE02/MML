import { useNavigate } from 'react-router-dom';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Test Data
import * as testdata from '../services/json/testMovie.json';

export default function MyList() {
    const navigate = useNavigate();

    // Handler for when the view button is clicked
    const handleViewClick = () => {
        navigate("/oneMovie")
    }

    // Handle for when the remove button is clicked
    const handleRemoveClick = () => {

    }

    return (
        <>
            <div className="container mt-3">
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>ID</th>
                    </tr>
                    <tr>
                        <tc>{testdata.title}</tc>
                        <tc>{testdata.release_date}</tc>
                        <tc>{testdata.id}</tc>
                        <tc><button className='btn btn-primary' onClick={handleViewClick}>View</button></tc>
                        <tc><button className='btn btn-primary' onClick={handleRemoveClick}>Remove</button></tc>
                    </tr>
                </table>
            </div>
        </>
    )
}