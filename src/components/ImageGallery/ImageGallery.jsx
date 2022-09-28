import React from 'react';
import {ImageGalleryItem} from '../ImageGalleryItem';
import {List} from './ImageGallery.styled';
import {Button} from '../Button';
import {Loading} from '../Loader';
import {Modal} from '../Modal';


export class ImageGallery extends React.Component{
  state ={
    images: [],
  page: 1,
  loading: false,
  showModal: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const {name} = this.props;

    if(prevProps.name!==this.props.name || prevState.page!==this.state.page)
     {  this.setState({loading: true})
       fetch(
      `https://pixabay.com/api/?q=${name}&page=${this.state.page}&key=29649247-5c49f6015ecbe8eb4654e40ef&image_type=photo&orientation=horizontal&per_page=12`)
      .then(result => {
        if (result.ok) {
          return result.json();
        }})
        .then(image => { 
        this.setState({images: this.state.page > 1 ? [...this.state.images, ...image.hits] : image.hits})
      }).catch(error => console.log(error))
      .finally(() => this.setState({loading: false}))
    }
   
  }

  onClickButtonLoad = () => {
    this.setState(prevState => ({page: prevState.page+1}) )
    }

    toggleModal = () => {
      this.setState(({showModal}) => ({
        showModal: !showModal,
      }))
    }


  render() {
    return (
<>
<List>
  {this.state.images.map(({id, tags, webformatURL, largeImageURL}) => {
    return (
      <ImageGalleryItem
       key={id} 
       webformatURL={webformatURL} 
       largeImageURL={largeImageURL}>

       </ImageGalleryItem>
    )
  })}
 
</List>
 {this.state.loading&&<Loading />}

<Button onClick={this.onClickButtonLoad} />
{this.showModal && (<Modal onClose={this.toggleModal}/>)}

</>
    )
  }

}



