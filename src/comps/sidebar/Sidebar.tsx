import React, { FC, useContext } from 'react';
import { Dashboard, InsertChartOutlinedOutlined, ExitToApp, BarChartOutlined, StackedLineChartOutlined, CheckCircleOutline, Contrast, FilterHdr, Recycling } from '@mui/icons-material'
import './sidebar.scss'
import { Link } from 'react-router-dom'
import { SidebarItems } from '../../types/types';
import { AuthContext } from '../../services/context/auth/authContext';
import { logoutUser } from '../../services/context/auth/apiCall';
import { logout } from '../../services/context/auth/authActions';

const lists: SidebarItems[] = [
    {
        id: 0,
        title: 'Home',
        url: '/',
        icon: <Dashboard style={{color: 'orange'}}/>
    },
    {
        id: 2,
        title: 'Poll Tax',
        url: '/polltax',
        icon: <BarChartOutlined style={{color: 'yellowgreen'}}/>
    },
    {
        id: 3,
        title: 'Non-Revenue',
        url: '/nonrevenue',
        icon: <InsertChartOutlinedOutlined style={{color: 'green'}}/>
    },
    {
        id: 4,
        title: 'Licence',
        url: '/licence',
        icon: <CheckCircleOutline style={{color: 'purple'}}/>
    },
    {
        id: 5,
        title: 'Earnings',
        url: '/earnings',
        icon: <StackedLineChartOutlined style={{color: '#256'}}/>
    },
    {
        id: 6,
        title: 'Rent',
        url: '/rents',
        icon: <Contrast style={{color: 'blue'}}/>
    },
    {
        id: 7,
        title: 'Fees',
        url: '/fees',
        icon: <FilterHdr style={{color: 'red'}}/>
    },
    {
        id: 8,
        title: 'Others',
        url: '/others',
        icon: <Recycling style={{color: '#256'}}/>
    },

]

const Sidebar: FC = () => {

    const { dispatch } = useContext(AuthContext)

    const Logout = () => {
        logoutUser(dispatch)
        console.log('logout!!!')
    }

  return (
    <section className='sidebar'>
        <ul>
            {
                lists.map((item) => (
                <Link to={item.url} className='link li' key={item.id}>
                    <span>{item.icon}</span>
                    <p>{item.title}</p>
                </Link>

                ))
            }
        </ul>
        <div>
            <span><ExitToApp/></span>
            <span onClick={Logout}>Logout</span>
        </div>
    
    </section>
  )
}

export default Sidebar
