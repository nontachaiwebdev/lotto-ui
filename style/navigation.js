import styled from 'react-emotion'

export const Navigation = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
`

export const NavigationItem = styled.li`
  list-style: none;
  padding: 10px 15px;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 300;
`

export const SubNavigation = styled.ul`
  margin: 0;
  padding: 0;
  width: 200px;
`

export const SubNavigationItem = styled.li`
  display: flex;
  list-style: none;
  justify-content: flex-start;
  padding: 10px 0;
  font-size: 1.1rem;
`
