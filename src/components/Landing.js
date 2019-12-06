import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

export default function Landing() {
    const [projects, setProjects] = useState('');

    useEffect(() => {
    axios.get(`http://localhost:8001/api/projects/`)
    .then(res=>{
        console.log(res.data)
        setProjects(res.data);
    })
    .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h2>Projects: </h2>
            {projects && projects.map((project)=>{
                return <div>
                <h3>id: {project.id}</h3>
                <Link to={`/project/${project.id}`}><h3>name: {project.name}</h3></Link>
                <h3>description: {project.description}</h3>
                </div>
            })}
            {/* <p>Add project:</p>
            <input value={'asd'} placeholder='name'></input> */}
        </div>
    )
}
