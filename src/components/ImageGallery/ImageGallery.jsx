import React from 'react';
import {ImageGalleryItem} from '../ImageGalleryItem';
import {List} from './ImageGallery.styled';
import {Button} from '../Button';
import {Loading} from '../Loader';
import {Modal} from '../Modal';


export class ImageGallery extends React.Component{
  state ={
    images: [],
    largeImageURL: null,
    tags: '',
  loading: false,
  showModal: false,

  }

  componentDidUpdate(prevProps, prevState) {
    const {name, page} = this.props;

    if(prevProps.name!==name || prevProps.page!==page)
     {  this.setState({loading: true})
       fetch(
      `https://pixabay.com/api/?q=${name}&page=${page}&key=29649247-5c49f6015ecbe8eb4654e40ef&image_type=photo&orientation=horizontal&per_page=12`)
      .then(result => {
        if (result.ok) {
          return result.json();
        }})
        .then(image => { 
        this.setState({images: page > 1 ? [...this.state.images, ...image.hits] : image.hits})
      }).catch(error => console.log(error))
      .finally(() => this.setState({loading: false}))
    }
   
  }

    toggleModal = (largeImageURL, tags) => {
console.log(largeImageURL);
      this.setState(({showModal}) => ({
        showModal: !showModal,
        largeImageURL: largeImageURL,
        tags: tags,
      }))
    }


  render() {
    return (
<>
<List>
  {this.state.images.map((image) => {

    return (
      <ImageGalleryItem
       key={image.id} 
       tags={image.tags}
       webformatURL={image.webformatURL} 
       largeImageURL={image.largeImageURL}
       toggleModal={this.toggleModal}>

       </ImageGalleryItem>
    )
  })}
 
</List>
 {this.state.loading&&<Loading />}

{this.state.images.length ? (<Button onClick={this.props.onClickButtonLoad} />) : null}
{this.state.showModal && (<Modal largeImageURL={this.state.largeImageURL} tags={this.state.tags} onClose={this.toggleModal} />)}

</>
    )
  }

}



