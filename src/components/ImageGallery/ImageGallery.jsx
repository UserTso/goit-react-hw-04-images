import {useState, useEffect} from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import {ImageGalleryItem} from '../ImageGalleryItem';
import {List} from './ImageGallery.styled';
import {Button} from '../Button';
import {Loading} from '../Loader';
import {Modal} from '../Modal';

export function ImageGallery({name, page, onClickButtonLoad}) {

const [images, setImages] = useState([]);
const [largeImageURL, setLargeImageURL] = useState(null);
const [tags, setTags] = useState('');
const [loading, setLoading] = useState(false);
const [showModal, setShowModal] = useState(false);

useEffect(() => {
if(name) {setLoading(true)
  fetch(
  `https://pixabay.com/api/?q=${name}&page=${page}&key=29649247-5c49f6015ecbe8eb4654e40ef&image_type=photo&orientation=horizontal&per_page=12`)
  .then(result => {
    if (result.ok) {
      return result.json();
    }})
    .then(image => { 
      setImages((prev) => {return page > 1 ? [...prev, ...image.hits] : image.hits})
  }).catch(error => console.log(error))
  .finally(setLoading(false))}
        
      

}, [name, page])

// const toggleModal = (largeImageURL, tags) => {
//   setShowModal((showModal) => ({
//           showModal: !showModal,
//           largeImageURL: largeImageURL,
//           tags: tags,
//         }))
//       }

const toggleModal = (largeImageURL, tags) => {
            setShowModal(!showModal);
            setLargeImageURL(largeImageURL);

            setTags(tags);
        }

  return (
    <>
    <List>
      {images.map((image) => {
    
        return (
          <ImageGalleryItem
           key={image.id} 
           tags={image.tags}
           webformatURL={image.webformatURL} 
           largeImageURL={image.largeImageURL}
           toggleModal={toggleModal}>
           </ImageGalleryItem>
        )
      })}
    
    </List>
    
    {loading&&<Loading />}
    {images.length ? (<Button onClick={onClickButtonLoad} />) : null}
    {showModal && (<Modal largeImageURL={largeImageURL} tags={tags} onClose={toggleModal} />)}
    
    </>
        )
}

// export class ImageGallery extends React.Component{
//   state ={
//     images: [],
//     largeImageURL: null,
//     tags: '',
//   loading: false,
//   showModal: false,

//   }

//   componentDidUpdate(prevProps, prevState) {
//     const {name, page} = this.props;

//     if(prevProps.name!==name || prevProps.page!==page)
//      {  this.setState({loading: true})
//        fetch(
//       `https://pixabay.com/api/?q=${name}&page=${page}&key=29649247-5c49f6015ecbe8eb4654e40ef&image_type=photo&orientation=horizontal&per_page=12`)
//       .then(result => {
//         if (result.ok) {
//           return result.json();
//         }})
//         .then(image => { 
//         this.setState({images: page > 1 ? [...this.state.images, ...image.hits] : image.hits})
//       }).catch(error => console.log(error))
//       .finally(() => this.setState({loading: false}))
//     }
   
//   }

//     toggleModal = (largeImageURL, tags) => {
//       this.setState(({showModal}) => ({
//         showModal: !showModal,
//         largeImageURL: largeImageURL,
//         tags: tags,
//       }))
//     }
    
//   render() {
//     return (
// <>
// <List>
//   {this.state.images.map((image) => {

//     return (
//       <ImageGalleryItem
//        key={image.id} 
//        tags={image.tags}
//        webformatURL={image.webformatURL} 
//        largeImageURL={image.largeImageURL}
//        toggleModal={this.toggleModal}>
//        </ImageGalleryItem>
//     )
//   })}

// </List>

// {this.state.loading&&<Loading />}
// {this.state.images.length ? (<Button onClick={this.props.onClickButtonLoad} />) : null}
// {this.state.showModal && (<Modal largeImageURL={this.state.largeImageURL} tags={this.state.tags} onClose={this.toggleModal} />)}

// </>
//     )
//   }

// }

ImageGallery.propTypes ={
  name: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onClickButtonLoad: PropTypes.func.isRequired,
}



