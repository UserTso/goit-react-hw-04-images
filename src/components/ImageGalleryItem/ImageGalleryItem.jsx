import {Item, Image} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({tags, webformatURL, largeImageURL, toggleModal }) => {
return (

<Item onClick={() => toggleModal(largeImageURL, tags)}>
  <Image src={webformatURL} alt={tags} />
</Item>
)
}