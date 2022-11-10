import styled from 'styled-components';
import { variables } from '../../variables.styled';

export const Button = styled.button`
    background-color: ${ ({varient}) => {if(varient) return varient; else return  variables.primary_color;} };
    padding: 1em 2.3em;
    color: ${ ({varient}) => {if(varient) return "#fff"; else return  "#000a";} };
    border-radius: 50px;
    border: ${ ({varient}) => {if(varient) return "solid 1px " + variables.primary_color; else return  "0";} };
    font-family: ${variables.ternary_font};

    transition-duration: 200ms;
    
    &:hover{
        cursor: pointer;
        transform: translateX(3px);
    }

` 