import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import styled from 'styled-components';
import { connect } from "react-redux";
import Users from './Users';

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


class Admin extends React.Component {
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
                            <h4>Add Emails</h4>
                            <p>Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            </p>
                            </Boxed>
                            <Boxed>
                            <h4>Allowed E-Mails List</h4>
                            <p>Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            </p>
                            </Boxed>
                            <Boxed>
                            <h4>Users</h4>
                            
                            <Users />
                            
                            </Boxed>
                            <Boxed>
                            <h4>Existing Moderators</h4>
                            <p>Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. Welcome to the admin page. 
                            </p>
                            </Boxed>
                        </InnerWrapper>
                    </MainWrapper>>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = state => {
    return {
      
    };
  };
  
  export default Admin;