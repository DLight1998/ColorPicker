import React, {Component} from 'react';

class Reset extends Component{
  onReset = ()=>{
    this.props.onSettingDefault(true);
  }
    render(){
      return(
         <div className='container mt-50 wrapper'>
        
            <button type="button" className="btn btn-primary" onClick={this.onReset}>Reset</button>
            
          </div>
      )
    }
}
export default Reset ;
