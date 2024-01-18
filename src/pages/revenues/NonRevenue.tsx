import Table from '../../comps/table/Table'
import AddRevenue from '../../comps/add/Add'
import { FC, useState, useContext } from 'react'
import './styles.scss'
import { createNonRevenue } from '../../services/context/nonrevenueContext/apiCall'
import { NonRevenueContext } from '../../services/context/nonrevenueContext/nonrevenueContext'

const NonRevenue:FC = () => {

  const { dispatch, nonrevenue } = useContext(NonRevenueContext)

  const [nonrevenueDetails, setNonRevenueDetails] = useState({
    fullName: '',
    phone: '',
    address: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setNonRevenueDetails({...nonrevenueDetails, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
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
     <Table rows={nonrevenue}/>
     </section>
  )
}

export default NonRevenue
