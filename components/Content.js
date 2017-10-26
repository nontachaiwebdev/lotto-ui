import {PageContainer} from 'STYLE/mainLayout'
import {
  SubNavigation,
  SubNavigationItem
} from 'STYLE/navigation'

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
