import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './watched.css';
import WathcedPiece from './components/WatchedPiece';

function Watched() {
    const [watchedJSON, setJSON] = useState([]);

    const getWatched = async () => {
        const responseJSON = await axios('/api/watched');

        setJSON(responseJSON.data.data);
        console.log("Response: ", responseJSON.data.data);
    };

    useEffect(() => {
        console.log("Watched Component mounted");

        getWatched();
    }, []);

    return (
        <div className="watched">
            <h3 className="watched__header">Watched Flicks</h3>

            <div className="watched__items">
                {
                   watchedJSON.map((movie) => (
                        <WathcedPiece jsonData={movie} className="grid-item" refreshHandler={setJSON}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Watched;
