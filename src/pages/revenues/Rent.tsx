import Table from '../../comps/table/Table'
import { FC, useContext, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'
import { RentTaxContext } from '../../services/context/rentContext/rentContext'
import { createRentTax } from '../../services/context/rentContext/apiCall'

const Rent:FC = () => {

  const { dispatch, rent } = useContext(RentTaxContext)

  const [rentValues, setRentValues] = useState({
    fullName: '',
    phone: '',
    amount: '',
    address: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setRentValues({...rentValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    createRentTax(rentValues, dispatch)
  }

  return (
    <section className='styles'>
      <AddRevenue
          tax='Collected Rents'
          revenue='Add Rent'
          onChange={handleChange}
          onSubmit={handleSubmit}
      />
      <Table rows={rent}/>
    </section>
  )
}

export default Rent
