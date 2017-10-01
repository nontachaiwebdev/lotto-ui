import { AppContainer } from '../style/mainLayout'
import Meta from './Meta'
import Header from './Header'
import Content from './Content'

export default (props) => (
  <AppContainer>
    <Meta />
    <Header />
    <Content />
  </AppContainer>
)
