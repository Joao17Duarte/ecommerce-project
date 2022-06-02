import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCtM4gqK1xOlSpEaZAURunWqbhLYxaoVTc',
  authDomain: 'ecommerce-ztm-5d610.firebaseapp.com',
  projectId: 'ecommerce-ztm-5d610',
  storageBucket: 'ecommerce-ztm-5d610.appspot.com',
  messagingSenderId: '571807948882',
  appId: '1:571807948882:web:8e1cc70cdd96f385807f8b',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
