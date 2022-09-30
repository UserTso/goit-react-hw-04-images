import PropTypes from 'prop-types';

import {Item, Image} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({tags, webformatURL, largeImageURL, toggleModal }) => {
return (

<Item onClick={() => toggleModal(largeImageURL, tags)}>
  <Image src={webformatURL} alt={tags} />
</Item>
)
}



ImageGalleryItem.propTypes = {
	tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  };