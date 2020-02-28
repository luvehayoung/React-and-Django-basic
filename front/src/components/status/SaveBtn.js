import React, { Component } from 'react';
import axios from "axios";

class SaveBtn extends Component {


    save = () => {    
        let url = this.props.API_BASE + "/save";
    
        let data = this.props.data;

        axios
          .post(url, data, {
            headers: {
              "content-type": "application/json"
            }
          })
          .then(res => {
            console.log(res.data);                            
          })
          .catch(err => console.log(err));
      };

      

    state = {  }
    render() { 
        return ( 
            <button onClick = {this.save}>
                Save
            </button>
         );
    }
}
 
export default SaveBtn;