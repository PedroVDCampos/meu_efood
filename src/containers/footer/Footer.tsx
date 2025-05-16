import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FooterContainer, FooterLogo, FooterText } from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src="/images/logo.png" alt="Logo" />
      <FooterText>
        efood é uma plataforma de delivery de comida pensada pra te conectar aos
        melhores restaurantes da cidade com praticidade e rapidez. Com poucos
        cliques, você escolhe seus pratos favoritos, personaliza o pedido e
        recebe tudo quentinho na porta da sua casa. Explore cardápios variados,
        aproveite promoções exclusivas e tenha uma experiência de entrega
        moderna, segura e eficiente. Se bateu a fome, já sabe: pede um efood!
      </FooterText>
    </FooterContainer>
  )
}
export default Footer
