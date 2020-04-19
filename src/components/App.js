import React from 'react';
import './style.css';
import img from '../images/logo.png';
class App extends React.Component{
  render(){
    return(
      <>
      <img src={img} width='300'/>
      <div className='text-center'>React + Webpack setup3</div>
      </>
    )
  }
}


export default App;