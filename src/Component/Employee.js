import React, {Component} from 'react';
import data from '../react-i-ii-afternoon/data';
import EmployeeList from './EmployeeList';
import '../EmployeeCard.css'




class Employee extends Component{
    constructor(){
        super();

        this.state = {
            data: data,
            index: 0,
        }
    }

    handlePrevious(){
        if(this.state.index > 0){
            this.setState({index: this.state.index - 1})
        }
    }

    handleNext(){
        if(this.state.index < 24){
            this.setState({index: this.state.index + 1})
        }
    }

    render(){
        // console.log(data)
        let employeeDisplay = data[this.state.index]
    return(
            <div>
                <EmployeeList employee={employeeDisplay}/>
                <section className='Buttons'>
                    <button className='Button' onClick={() => this.handlePrevious()}>Previous</button>
                    <button className='Button' onClick={() => this.handleNext()}>Next</button>
                </section>
            </div>
        )
    }
}

export default Employee