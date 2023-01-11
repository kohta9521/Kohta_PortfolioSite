import type { NextPage } from 'next'

// components
import Layout from '../components/layout'
import Back from '../components/back'
import Profile from '../components/profile'
import Skills from '../components/skills'
import Work1 from '../components/work1'
import Work2 from '../components/work2'
import Career from '../components/career'
import Activity from '../components/activity'
import Article from '../components/article'


const Home: NextPage = () => {
  return (
    <>
      <Back />

      <Layout />

      <Profile />

      <Skills />

      <Work1 />
      <Work2 />

      <Career />

      <Activity />

      <Article />

    </>
  )
}

export default Home
