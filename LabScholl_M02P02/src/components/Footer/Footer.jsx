import { FooterContainer } from './styles.js'

function Footer() {
  return (
    <FooterContainer>
      <p>LabSchool | {new Date().getFullYear()}</p>
    </FooterContainer>
  )
}

export default Footer
