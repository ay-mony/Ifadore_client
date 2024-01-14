import Table from '../../comps/table/Table'
import { FC, useContext, useEffect, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'
import { EarningTaxContext } from '../../services/context/earningContext/earningContext'
import { createEarningTax,  getEarningTax } from '../../services/context/earningContext/apiCall'


const Earnings:FC = () => {

  const { dispatch, earning } = useContext(EarningTaxContext)

  const [earnings, setEarnings] = useState({
    fullName: '',
    phone: '',
    address: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setEarnings({...earnings, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
      e.preventDefault()
      createEarningTax(earnings, dispatch)
      window.location.reload()
  }

  useEffect(() => {
    getEarningTax(dispatch)

    return () => {
      
    }
  }, [dispatch])

  return (
    <section className='styles'>
      <AddRevenue
        tax='Earning Taxes'
        revenue='Add Earning Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    <Table rows={earning}/>
    </section>
  )
}

export default Earnings
