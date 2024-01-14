import Table from '../../comps/table/Table'
import AddRevenue from '../../comps/add/Add'
import { FC, useState, useContext } from 'react'
import { PolltaxContext } from '../../services/context/polltaxContext/polltaxContext'
import './styles.scss'
import { createNonRevenue } from '../../services/context/polltaxContext/apiCall'

const NonRevenue:FC = () => {

  const { dispatch, polltax } = useContext(PolltaxContext)

  const [nonrevenue, setNonRevenue] = useState({
    fullName: '',
    phone: '',
    address: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setNonRevenue({...nonrevenue, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preeventDefault()
    createNonRevenue(nonrevenue, dispatch)
    window.location.replace('/nonrevenue')
  }


  return (
    <section className='styles'>
     <AddRevenue
        tax='NonRevenue Tax'
        revenue='Add NonRevenue Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
     />
     <Table rows={polltax}/>
     </section>
  )
}

export default NonRevenue
