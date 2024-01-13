import Table from '../../comps/table/Table'
import { FC, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Earnings:FC = () => {

  const [earnings, setEarnings] = useState({
    fullName: '',
    phone: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setEarnings({...earnings, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
      e.preventDefault()
  }

  console.log(earnings)

  return (
    <section className='styles'>
      <AddRevenue
        tax='Earning Taxes'
        revenue='Add Earning Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    <Table/>
    </section>
  )
}

export default Earnings
