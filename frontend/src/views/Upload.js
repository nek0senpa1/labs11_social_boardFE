import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import styled from 'styled-components';
import { connect } from "react-redux";
import Users from './Users';
import CSVReader from "react-csv-reader";
import { emailCSV } from './../store/actions/UsersActions';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 1.4rem;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  align-content: center;

  .title {
    margin-top: 30px;
    margin-bottom: 5px;
  }

  

`;

const InnerWrapper = styled.div`
width: 90%;
font-size: 1.1rem;
justify-content: space-around;
justify-items: center;
align-items: center;
align-content: center;
`;

const Boxed = styled.div`
width: 100%;
padding: 10px;
border: 2px solid black;
border-radius: 5px;
flex-direction: column;
justify-content: space-around;
margin-bottom: 10px;

`;



const handleUppy = data => {
    this.props.emailCSV(data);
  };
  
  
class Upload extends React.Component {
    constructor() {
        super()

    }

    // componentDidMount() {
        
    // }

    render() {

        //if (!this.props.isLoggedIn) return <h2>--Yo, dog.  You ain't logged in.  Do That <Link to="/">HERE</Link> </h2>;

        return(
            <div>
                
                <div >
                    <MainWrapper>   
                        <div>
                            <h2>Admin Console</h2>
                        </div>

                        <InnerWrapper>
                            <Boxed>
                            <h4>Add Email List via CSV upload</h4>
                            
                            <div className="container">
                            <CSVReader
                                cssClass="react-csv-input"
                                label="Upload a CSV file full of Authorized E-Mails!"
                                onFileLoaded={handleUppy}
                            />
                            <p>and then open the console</p>
                            </div>
                            </Boxed>
                            
                        </InnerWrapper>
                    </MainWrapper>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    };
  };
  
  export default connect(
    mapStateToProps,{ emailCSV } 
  )(Upload);

  