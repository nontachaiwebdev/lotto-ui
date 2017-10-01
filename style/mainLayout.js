import styled from 'react-emotion'

export const AppContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`

export const HeaderContainer = styled.div`
  width: 100%;
  background: #3498db;
  box-shadow: 0px 1px 1px #888888;
`

export const PageContainer = styled.div`
  display: ${props => props.display ? props.display : 'flex'};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${props => props.alignItems ? props.alignItems : 'flex-start'};
  width: 1200px;
  margin: ${props => props.margin ? props.margin : '0 auto'};
`

export const List = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
`

export const ListItem = styled.li`
  list-style: none;
  padding: 10px 15px;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 300;
`
