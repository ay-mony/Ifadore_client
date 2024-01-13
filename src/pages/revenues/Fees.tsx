import Table from '../../comps/table/Table'
import { FC, useContext, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'
import { createFeesTax } from '../../services/context/feeContext/apiCall'
import { FeesContext } from '../../services/context/feeContext/feesContext'



const Fees:FC = () => {

  const { dispatch, fees } = useContext(FeesContext)

  const [feesDetails, setFeesDetails] = useState({
    fullName: '',
    phone: '',
    address: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setFeesDetails({...feesDetails, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    createFeesTax(feesDetails, dispatch)
  }

  return (
    <section className='styles'>
      <AddRevenue
        tax='Fee Taxes'
        revenue='Add Fee Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    <Table rows={fees}/>
    </section>
  )
}

export default Fees
