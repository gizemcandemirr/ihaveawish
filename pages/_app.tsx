import '../styles/globals.css'
import '../firebase/client'
import {useAuthState} from "react-firebase-hooks/auth"
import firebase from 'firebase/compat/app';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  
  const [user, loading, error] = useAuthState(firebase.auth());
  
  return (
  <Layout currentUser={user} loading={loading} >
    <Component {...pageProps} currentUser={user} />
  </Layout> )
}

export default MyApp
