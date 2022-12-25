import type { NextPage } from 'next'
import Sidebar from '../components/sidebar'
import Profile from '../components/profile'

const Home: NextPage = () => {
  return (
    <>
      <Sidebar />

      <Profile />
    </>
  )
}

export default Home



