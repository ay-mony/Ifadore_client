import Table from '../../comps/table/Table'
import { FC, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Others:FC = () => {

  const [others, setOthers] = useState({
    fullName: '',
    phone: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setOthers({...others, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {

  }

  return (
    <section className='styles'>
      <AddRevenue
        tax='Other Taxes'
        revenue='Add Other Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    <Table/>
  </section>
  )
}

export default Others
