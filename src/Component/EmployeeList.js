import React from 'react';
import '../EmployeeCard.css'


function EmployeeList(props){
    console.log(props)
    const {employee} = props;
    return(
        <div className='Employee-Info'>
            <section className='Info-Box'>
                <div className='Employee-Name'>{employee.name.first} {employee.name.last}</div>
                <p className='Counter'>{employee.id}/25</p>
                <p className='Info'><b>From:</b> {employee.city}, {employee.country}</p>
                <p className='Info'><b>Job Title:</b> {employee.title}</p>
                <p className='Info'><b>Employer:</b> {employee.employer}</p>
                <ol className='Info'><b>Favorite Movies:</b>
                    <li className="Movie-Title">{employee.favoriteMovies[0]}</li>
                    <li className="Movie-Title">{employee.favoriteMovies[1]}</li>
                    <li className="Movie-Title">{employee.favoriteMovies[2]}</li>
                </ol>
            </section>
        </div>
    )
}

export default EmployeeList