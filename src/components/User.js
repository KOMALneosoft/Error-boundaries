import React, { Component } from 'react'


export default class User extends Component {
    constructor()
    {
        console.log(this.state); 
        super()
        this.state={ 
            Array1:{add:"neha",age:21},
            error:null
            
        }
        
    }

    render() {
        return (
            <div>
               <h1>User Component</h1> 
            </div>
        )
    }
}
