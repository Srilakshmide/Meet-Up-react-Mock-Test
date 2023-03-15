import {Component} from 'react'
// import {Redirect} from 'react-router-dom'

import Header from '../Header'

import {
  LoginContainer,
  MainContainer,
  LoginImg,
  RegisterContainer,
  LoginHead,
  Label,
  Input,
  Select,
  RegisterBtn,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class LoginRegister extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    isRegistered: false,
    showErrMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({name: event.target.value})
  }

  onChangeSelectType = event => {
    this.setState({topic: event.target.value})
  }

  onClickRegistered = () => {
    this.setState(prevState => ({
      isRegistered: !prevState.isRegistered,
    }))
  }

  onSubmitRegister = event => {
    event.preventDefault()
    const {name} = this.state

    if (name === '') {
      this.setState({errorMsg: 'Please enter your name'})
      this.setState({showErrMsg: true})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {name, topic, showErrMsg, errorMsg} = this.state

    return (
      <>
        <Header />
        <LoginContainer>
          <MainContainer>
            <LoginImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
          </MainContainer>
          <RegisterContainer onSubmit={this.onSubmitRegister}>
            <LoginHead>Let us join</LoginHead>
            <Label htmlFor="userName">NAME</Label>
            <Input
              type="text"
              onChange={this.onChangeUsername}
              placeholder="Your name"
              id="userName"
              value={name}
            />
            <Label htmlFor="Topics">TOPICS</Label>
            <Select
              id="Topics"
              value={topic}
              onChange={this.onChangeSelectType}
            >
              {topicsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.displayText}
                </option>
              ))}
            </Select>
            <RegisterBtn type="submit">Register Now</RegisterBtn>
            {showErrMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </RegisterContainer>
        </LoginContainer>
      </>
    )
  }
}

export default LoginRegister
