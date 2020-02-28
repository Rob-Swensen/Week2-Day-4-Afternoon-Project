import React, {Component} from 'react';
import Employee from './Component/Employee';
import './EmployeeCard.css'


class App extends Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return(
      <div className='App'>
        <div>
          <section className='Heading'>Home</section>
        </div>
        <section className='Employee-Card'>
          <Employee/>
        </section>
      </div>
    )
  }
}

export default App;
