import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './app.scss';
import Topbar from './comps/topbar/Topbar';
import Sidebar from './comps/sidebar/Sidebar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { Polltask, Earnings,  Lincence, Fees, NonRevenue, Rent, Others } from './pages/revenues';
import { useContext, Suspense } from 'react';
import { AuthContext } from './services/context/auth/authContext';



function App() {
  

  const { user } = useContext(AuthContext)


  const Layout = () => {
    return(
        <section className='app'>
          <Topbar/>
          <section  className='app_cont'>
            <section className='app__sidebar'>
            <Sidebar/>
            </section>
            <section className='app__cont_main'>
            <Outlet/>
            </section>
          </section>
        </section> 
    )
  }


  const router = createBrowserRouter([

      {
        path: '/',
        element:  user ? <Layout/> : <Login/>,
        children: [
          {
            path: '/',
            element: (
              <Suspense fallback={<div>Please wait...</div>}>
                <Home/>
              </Suspense>
            )
          },
          {
            path: '/polltax',
            element:(
              <Suspense fallback={<div>Please wait...</div>}>
                <Polltask/>
              </Suspense>
            )
          },
          {
            path: '/nonrevenue',
            element: (
              <Suspense fallback={<div>Please wait...</div>}>
                <NonRevenue/>
              </Suspense>
            )
          },
          {
            path: '/licence',
            element: (
              <Suspense fallback={<div>Please wait...</div>}>
                <Lincence/>
              </Suspense>
            )
          },
          {
            path: '/earnings',
            element:( 
              <Suspense fallback={<div>Please wait...</div>}>
                <Earnings/>
              </Suspense>
            )
          },
          {
            path: '/rents',
            element: (
              <Suspense fallback={<div>Please wait...</div>}>
                <Rent/>
              </Suspense>
            )
          },
          {
            path: '/fees',
            element:( 
              <Suspense fallback={<div>Please wait...</div>}>
                <Fees/>
              </Suspense>
            )
          },
          {
            path: '/others',
            element: (
              <Suspense fallback={<div>Please wait...</div>}>
                <Others/>
              </Suspense>
            )
          },
        ]
      },
      {
        path: '/login',
        element: !user ? <Login/>: <Home/>
      }
  ])


  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  );
}

export default App;
