import React, { Component } from 'react';
import axios from "axios";

class SaveBtn extends Component {

    state = { 
      visible: false,
      message: "",
     }
  
    save = () => {    
        let url = this.props.API_BASE + "/api/save";
    
        let data = this.props.data;

        axios
          .post(url, data, {
            headers: {
              "content-type": "application/json"
            }
          })
          .then(res => {
            console.log(res.data);  
            this.onShowAlert("Successfully Saved");                          
          })
          .catch(err => console.log(err));
      };

    onShowAlert = msg => {
      this.setState({ visible: true, message: msg }, () => {
        window.setTimeout(() => {
          this.setState({ visible: false, message: "" });
        }, 2000);
      });
    };  

   
    render() { 
        return (
          <React.Fragment>
            {this.state.visible ? (
              <div
                style={{
                  display: "hidden",
                  position: "absolute",
                  left: "45%",
                  top: "20%",
                  zIndex:1,
                  backgroundColor: "grey"
                }}
              >
                {this.state.message}
              </div>
            ) : null}

              <button onClick = {this.save}>
                  Save
              </button>
            </React.Fragment>
         );
    }
}
 
export default SaveBtn;