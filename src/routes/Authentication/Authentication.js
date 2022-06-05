import SignInForm from '../../components/SIgnInForm/SignInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './Authentication.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
export default Authentication
