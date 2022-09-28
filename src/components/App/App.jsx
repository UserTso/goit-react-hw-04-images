import React from 'react';
import { Searchbar } from '../Searchbar';
import {ImageGallery} from '../ImageGallery';

// import {onGetServerInfo} from '../../API';
 
export class App extends React.Component {
  state = {
    name: '',
  
  };

onGetSubmit = (submitValue) => {
  this.setState({name: submitValue})
}

  render() {
    return (   
      <>
    <Searchbar onSubmit={this.onGetSubmit}/>
    <ImageGallery name={this.state.name} />
    </> 
    )

  }
}
