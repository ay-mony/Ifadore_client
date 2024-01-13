import Table from '../../comps/table/Table'
import { FC, useContext, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'
import { createFeesTax } from '../../services/context/feeContext/apiCall'
import { FeesContext } from '../../services/context/feeContext/feesContext'



const Fees:FC = () => {

  const { dispatch } = useContext(FeesContext)

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
    createFeesTax(fees, dispatch)
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
