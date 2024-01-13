import './home.scss'
import Widget from '../../comps/widget/Widget'
import Charts from '../../comps/chart/Charts'
import { FC } from 'react'

const Home:FC = ()=> {
  return (
    <main className='home'>
      <section className='home__cont'>
        <section>
        <Widget type='polltax'/>
        <Widget type='licence'/>
        <Widget type='yesterday'/>
        <Widget type='month'/>
        <Widget type='total'/>
        </section>
        <div>
          <Charts/>
        </div>
      </section>
    </main>
  )
}

export default Home
