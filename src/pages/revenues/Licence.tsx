import Table from '../../comps/table/Table'
import { FC, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Licence:FC = () => {

    const [licence, setLicence] = useState({
      fullName: '',
      phone: '',
      amount: '',
      date: '',
      typeOfTax: ''
    })

    const handleChange = (e:any) => {
      setLicence({...licence, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e:any) => {
      e.preventDefault()
    }

  return (
    <section className='styles'>
      <AddRevenue
        tax='Lincence Taxes'
        revenue='Add Lincence Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Table/>
    </section>
  )
}

export default Licence
