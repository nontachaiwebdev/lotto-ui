import {PageContainer} from '../style/mainLayout'
import {
  SubNavigation,
  SubNavigationItem
} from '../style/navigation'

export default (props) => (
  <PageContainer
    margin='20px auto' >
    <Navigation />
  </PageContainer>
)

const Navigation = (props) => (
  <SubNavigation>
    <SubNavigationItem>ซื้อหวย</SubNavigationItem>
    <SubNavigationItem>ตรวจผลหวย</SubNavigationItem>
    <SubNavigationItem>รายงาน</SubNavigationItem>
  </SubNavigation>
)
