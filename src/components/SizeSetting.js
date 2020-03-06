import React, {Component} from 'react';


class SizeSetting extends Component{
    ChangeSize(value){
        this.props.onChangeSize(value);
    }
    render(){
      return(
        <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Size : {this.props.fontSize} px</h3>
              </div>
              <div className="panel-body">
                <button type="button" className="btn btn-success" onClick={() => this.ChangeSize(-2)}>Giam</button>&nbsp;
                <button type="button" className="btn btn-success" onClick={() => this.ChangeSize(2)}>Tăng</button>
              </div>
        </div>
      )
    }
}
export default SizeSetting;
