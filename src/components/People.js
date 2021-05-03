import './people.css';
import React, { useEffect, useState} from 'react';

function FetchApiData(){
    const [people, setPeople] = useState([])
    useEffect(async () => {
        const response= await fetch('https://swapi.dev/api/people/?format=json');
        console.log('Response',response);
        const data = await response.json();
        setPeople(data.results);
        console.log('Data', data);
    }, [])
        
    return(
        <div className='starwars'>
            
        <div className='starwarsPeople'>
                {people.map(people => (   
                <p className = 'peopleName'>
                 {people.name}</p>
                ))}
        </div>
        </div>
)
}

export default FetchApiData;
