import Table from '../../comps/table/Table'
import { FC, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Rent:FC = () => {

  const [rent, setRent] = useState({
    fullName: '',
    phone: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setRent({...rent, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {

  }

  return (
    <section className='styles'>
      <AddRevenue
          tax='Collected Rents'
          revenue='Add Rent'
          onChange={handleChange}
          onSubmit={handleSubmit}
      />
      <Table/>
    </section>
  )
}

export default Rent
