import React from 'react';
import User from './components/User';
import Errorbound from './components/Errorbound';


class App extends React.Component{

    render(){
        return(
            <div>
            <h1>Error Boundary in React</h1>
            <Errorbound><User/></Errorbound>
           
            </div>
        );
    }
}
export default App;