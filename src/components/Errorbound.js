import React, { Component } from 'react'

export default class Errorbound extends Component {
    constructor()
        {
          
            super()
            this.state={ 
                Array1:{add:"neha",age:21},
                error:null
                
            }
            console.log(this.state);
        }
       
        static getDerivedStateFromError(){
            return {error:true}
        }

    render() {
        return (
            <div>
                {
                    this.state.error ? <h1>Custome page for Error Handling</h1> : this.props.children
                }
                
            </div>
        )
    }
}
