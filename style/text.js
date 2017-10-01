import styled from 'react-emotion'
import { css } from 'emotion';

export const Title1 = styled('h1')`
  display: ${props => (props.display ? props.display : 'inline-block')};
  letter-spacing: 1px;
  color: ${props => (props.color ? props.color : '#000000')};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '300'};
  margin: ${props => props.margin ? props.margin : 'initial'};
  padding: ${props => props.padding ? props.padding : 'initial'};
  font-size: ${props => props.fontSize ? props.fontSize : 'initial'};
`
