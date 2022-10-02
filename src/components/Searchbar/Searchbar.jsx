import {useState} from 'react';
import PropTypes from 'prop-types';
import {Header, Form, Button, Input} from './Searchbar.styled';
import { FcSearch} from 'react-icons/fc';
import { toast } from 'react-toastify';



export function Searchbar({onSubmit}) {
const [name, setName] = useState('');

const getInputValue = (event) => {
  setName(event.target.value)
      }
  
          const handleSubmitForm = (event) => {
            event.preventDefault();
        if(name.trim() === '') {
          toast.info('Wrong input!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        onSubmit(name);
        setName('');
       
    }

return (
              <Header>
                <Form onSubmit={handleSubmitForm}>
                  <Button type="submit">
                    <FcSearch />
                  </Button>
          
                  <Input
                  onChange={getInputValue}
                  value={name}
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                  />
                </Form>
              </Header>
            );


}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
