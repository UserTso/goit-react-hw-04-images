import {Item, Image} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({id, tags, webformatURL, largeImageURL }) => {
return (

<Item>
  <Image src={webformatURL} alt={tags} />
</Item>
)
}