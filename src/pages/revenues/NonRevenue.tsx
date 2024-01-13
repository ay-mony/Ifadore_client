import Table from '../../comps/table/Table'
import AddRevenue from '../../comps/add/Add'
import { FC, useState } from 'react'
import './styles.scss'

const NonRevenue:FC = () => {

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

  }


  return (
    <section className='styles'>
     <AddRevenue
        tax='NonRevenue Tax'
        revenue='Add NonRevenue Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
     />
     {/* <Table /> */}
     </section>
  )
}

export default NonRevenue
