import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AsideBar from '../../components/asideBar/AsideBar'
import { RestaurantsData } from '../../data/RestaurantsData'
import { RootState } from '../../redux/store'
import {
  HeaderContainer,
  HeaderImage,
  HeaderLogo,
  HeaderNavMenu,
  HeaderSpan,
  HeaderText,
  HeaderTitle,
  HomeContainer,
  NavItem
} from './HeaderStyles'
import { FiHome, FiShoppingCart } from 'react-icons/fi'

const Header = () => {
  const { id } = useParams()
  const [showAsideBar, setShowAsideBar] = useState(false)

  const restaurant = RestaurantsData.find((r) => r.restaurantId === id)

  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const handleOpenAsideBar = () => {
    setShowAsideBar(true)
  }

  const handleCloseAsideBar = () => {
    setShowAsideBar(false)
  }

  return (
    <HeaderContainer>
      {id ? (
        <>
          <HeaderNavMenu className="container">
            <NavItem to={`/`}>
              <FiHome size={40} />
            </NavItem>
            <HeaderLogo src="/images/logo.png" alt="Logo" />
            <HeaderSpan onClick={handleOpenAsideBar}>
              <FiShoppingCart size={40} />
            </HeaderSpan>
          </HeaderNavMenu>
          <div className="container">
            <HeaderTitle className="title">{restaurant?.title}</HeaderTitle>
          </div>
          <HeaderImage src={restaurant?.image} alt={restaurant?.title} />
        </>
      ) : (
        <HomeContainer>
          <HeaderLogo src="/images/logo.png" alt="Logo" />
          <HeaderText>Sua fome, nosso delivery</HeaderText>
        </HomeContainer>
      )}
      {showAsideBar && <AsideBar onClose={handleCloseAsideBar} />}
    </HeaderContainer>
  )
}

export default Header
