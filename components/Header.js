import {
  HeaderContainer,
  PageContainer
} from 'STYLE/mainLayout'
import {
  Navigation,
  NavigationItem
} from 'STYLE/navigation'
import { Title1 } from '../style/text'

export default (props) => (
  <HeaderContainer>
    <PageContainer
      justifyContent='space-between'
      alignItems='center' >
      <HeaderTitle />
      <MainNavigation />
    </PageContainer>
  </HeaderContainer>
)

const HeaderTitle = (props) => (
  <Title1
    fontWeight='500'
    color='#ffffff'
    fontSize='1.3rem'
    padding='15px 0' >
    lotto
  </Title1>
)

const MainNavigation = (props) => (
  <Navigation>
    <NavigationItem>หวยหุ้น</NavigationItem>
    <NavigationItem>หวยใต้ดิน</NavigationItem>
    <NavigationItem>ออกจากระบบ</NavigationItem>
  </Navigation>
)
