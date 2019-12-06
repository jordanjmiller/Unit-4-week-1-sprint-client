import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewProject(props) {
    const [project, setProject] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8001/api/projects/${props.match.params.id}`)
        .then(res=>{
            console.log(res.data)
            setProject(res.data);
        })
        .catch(err => console.log(err));
    }, [])


    return (
        <div>
            <h2>Project: </h2>
            {project && <div>
                    <h3>id: {project.id}</h3>
                    <h3>name: {project.name}</h3>
                    <h3>description: {project.description}</h3>
                    <p>completed: {String(project.completed)}</p>
                    <h3>actions: </h3>
                    {project.actions && project.actions.map((action)=>{
                        return <div>
                            <p>id: {action.id}</p>
                            <p>description: {action.description}</p>
                            <p>notes: {action.notes}</p>
                            <p>completed: {String(action.completed)}</p>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}
