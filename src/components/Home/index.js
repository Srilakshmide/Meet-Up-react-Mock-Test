// import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

import {
  BgContainer,
  Heading,
  Description,
  RegisterBtn,
  HomeImage,
} from './styledComponents'

const Home = () => (
  //   const onClickRegister = () => {
  //     const {history} = props
  //     history.replace('/register')
  //   }

  <>
    <Header />
    <BgContainer>
      <Heading>Welcome to Meetup</Heading>
      <Description>Please register for the topic</Description>
      <Link to="/register">
        <RegisterBtn type="button">Register</RegisterBtn>
      </Link>
      <HomeImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </BgContainer>
  </>
)

export default Home
