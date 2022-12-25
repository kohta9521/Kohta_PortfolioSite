import type { NextPage } from 'next'
import Sidebar from '../components/sidebar'
import Profile from '../components/profile'
import Work from '../components/work'

const Home: NextPage = () => {
  return (
    <>
      <Sidebar />

      <Profile />

      <Work />
    </>
  )
}

export default Home



