import {useEffect} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {Overlay,ModalBackDrop} from './Modal.styled';


const modalRoot = document.querySelector("#modal-root");

export function Modal({largeImageURL, tags, onClose}) {

    useEffect(() => {

        const hendleKeyDown =  event => {
            if(event.code === 'Escape') {
                onClose();
                // закриття по кліку на ескейп
            }
        };

        window.addEventListener('keydown', hendleKeyDown);
        return(() => {
            window.removeEventListener('keydown', hendleKeyDown);
        })
    }, [onClose])

const hendleBackdropClick = event => {
if(event.currentTarget === event.target) {
    onClose();
    // закриття по кліку в бакдроп сірий фон
}
}

        return createPortal(
            <Overlay onClick={hendleBackdropClick}>
      <ModalBackDrop>
        <img src={largeImageURL} alt={tags}/>
      </ModalBackDrop>
    </Overlay>, modalRoot,
        )
}

Modal.propTypes = {
    onClick: PropTypes.func,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string,
}