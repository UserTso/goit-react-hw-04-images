import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {Overlay,ModalBackDrop} from './Modal.styled';


const modalRoot = document.querySelector("#modal-root");

export class Modal extends React.Component {
componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', this.hendleKeyDown)
};

componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown)
};

hendleKeyDown =  event => {
    if(event.code === 'Escape') {
        this.props.onClose();
        // закриття по кліку на ескейп
    }
};

hendleBackdropClick = event => {
if(event.currentTarget === event.target) {
    this.props.onClose();
    // закриття по кліку в бакдроп сірий фон
}
}

render(){
    const {largeImageURL, tags} = this.props;
    console.log(this.props)
    return createPortal(
        <Overlay onClick={this.hendleBackdropClick}>
  <ModalBackDrop>
    <img src={largeImageURL} alt={tags}/>
  </ModalBackDrop>
</Overlay>, modalRoot,
    )
}

}

Modal.propTypes = {
    onClick: PropTypes.func.isRequired,
}