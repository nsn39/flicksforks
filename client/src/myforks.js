import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './myforks.css';
import MyforkPiece from './components/MyforkPiece';

function Myforks() {
    const [moviesJSON, setJSON] = useState([]);

    const getMyForks = async () => {
        const responseJSON = await axios('/api/movies');

        setJSON(responseJSON.data.data);
        console.log("Response: ", responseJSON.data.data);
    };

    useEffect(() => {
        console.log("Component mounted");

        getMyForks();
    }, []);

    return (
        <div className="myforks">
            <h3 className="myforks__header">Myforks</h3>

            <div className="myforks__items">
                {
                   moviesJSON.map((movie) => (
                        <MyforkPiece jsonData={movie} className="grid-item" refreshHandler={setJSON}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Myforks
