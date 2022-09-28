import {ButtonStyled} from './Button.styled';

export const Button = ({onClick}) => {
    return (
        <ButtonStyled onClick={onClick} type="button">Load more</ButtonStyled>
    )
}