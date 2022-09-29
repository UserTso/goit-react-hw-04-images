import React from 'react';
import { Searchbar } from '../Searchbar';
import {ImageGallery} from '../ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import {onGetServerInfo} from '../../API';
 
export class App extends React.Component {
  state = {
    name: '',
    page: 1,
  };

 

onGetSubmit = (submitValue) => {
  this.setState({name: submitValue, page: 1})
}


onClickButtonLoad = () => {
  this.setState(prevState => ({page: prevState.page+1}) )
  }

  render() {
    return (   
      <>
    <Searchbar onSubmit={this.onGetSubmit}/>
    <ImageGallery name={this.state.name} page={this.state.page} onClickButtonLoad={this.onClickButtonLoad}  />
    <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </> 
    )

  }
}
