import styled from 'styled-components';
import { variables } from '../../variables.styled';

export const Title = styled.div`
    // border: 1px solid magenta;
    h1 {
        color: #fff;
        max-width: 10em;
        margin-bottom: .5em;
        span {
            color: ${variables.primary_color};
        }
    }
    
    h2 {
        color: ${variables.primary_color};
        font-family: ${variables.secondary_font};
        font-weight: 100;
        text-align: ${({align}) => align };
    }

` 