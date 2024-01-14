import { FC, useState } from 'react';
import './topbar.scss'
import {Close, Menu} from '@mui/icons-material'
import { linkItems } from '../../types/types'
import { Link } from 'react-router-dom';



const links:linkItems[] = [
  {
    id: 0,
    name: 'Home',
    url: '/'
  },
  {
    id: 1,
    name: 'Poll Tax',
    url: '/polltax'
  },
  {
    id: 2,
    name: 'Non-Revenue',
    url: '/nonrevenue'
  },
  {
    id: 3,
    name: 'Licence',
    url: '/licence'
  },
  {
    id: 4,
    name: 'Earnings',
    url: '/earnings'
  },
  {
    id: 5,
    name: 'Rent',
    url: '/rents'
  },
  {
    id: 6,
    name: 'Fees',
    url: '/fees'
  },
  {
    id: 7,
    name: 'Others',
    url: '/others'
  }
]


const Topbar: FC = () => {

  const [menu, setMenu] = useState(false);


  return (
    <>
    <nav className='navbar'>
      <section>
        <div className="navbar__first">
            <img src='naija.png' alt=''/>
            <img src='ifadore.png' alt=''/>
        </div>

        <div className="navbar__last">
          <span className='span'>Overview</span>

          <div>
            <img src='pic1.jpg' alt=''/>
            <span>Ayodele Ayodeji</span>
          </div>
        </div>
      </section>


    </nav>
      <section className='menu'>
        <div className="menu_sec">
        <img src='ifadore.png' alt=''/>
        <span>
          {
            !menu ?
            <Menu onClick={()=>setMenu(true)} className='slide-bottom'/>
            : <Close onClick={()=>setMenu(false)} className='slide-bottom'/>
          }
        </span>
        </div>

        {
          menu &&
        <div className="menu_cont slide-bottom">
            {links.map((link) => (
              <Link to={link.url} key={link.id} className='link span' onClick={()=>setMenu(false)}>
                <span>{link.name}</span>
              </Link>
            ))}
        </div>
        }
      </section>
    </>
  )
}

export default Topbar
