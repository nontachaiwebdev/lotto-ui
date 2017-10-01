import styled from 'react-emotion'
import { css } from 'emotion';

export const Title1 = styled.h1`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  ${props => props.padding && css`
    padding: ${props.padding};
  `}
  letter-spacing: ${props => (props.spacing ? props.spacing : '1px')};
  color: ${props => (props.color ? props.color : '#000000' )};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '300'};
`
