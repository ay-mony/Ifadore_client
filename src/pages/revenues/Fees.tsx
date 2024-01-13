import Table from '../../comps/table/Table'
import { FC, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Fees:FC = () => {

  const [fees, setFees] = useState({
    fullName: '',
    phone: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setFees({...fees, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
  }
  return (
    <section className='styles'>
      <AddRevenue
        tax='Fee Taxes'
        revenue='Add Fee Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    <Table/>
    </section>
  )
}

export default Fees
