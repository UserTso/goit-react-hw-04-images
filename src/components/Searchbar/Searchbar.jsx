import React from 'react';
import {Header, Form, Button, Input} from './Searchbar.styled';
import { FcSearch} from 'react-icons/fc';
import { toast } from 'react-toastify';




export class Searchbar extends React.Component {
    state = {
        name: '',
    }

    getInputValue = (event) => {
        this.setState({name: event.target.value})
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        if(this.state.name.trim() === '') {
          toast.info('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        this.props.onSubmit(this.state.name);
        this.setState({name: ''})
       
    }

    
    render() {
        return (
            <Header>
              <Form onSubmit={this.handleSubmitForm}>
                <Button type="submit">
                  <FcSearch />
                </Button>
        
                <Input
                onChange={this.getInputValue}
                  type="text"
                  autocomplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
              </Form>
            </Header>
          );
    }
 
}
