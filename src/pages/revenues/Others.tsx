import Table from '../../comps/table/Table'
import { FC, useState, useContext, useEffect } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'
import { createOthersTax, getOthersTax } from '../../services/context/othersContext/apiCall'
import { OthersTaxContext } from '../../services/context/othersContext/othersContext'

const Others:FC = () => {

  const { dispatch, others } = useContext(OthersTaxContext)

  const [othersDetails, setOthersDetails] = useState({
    fullName: '',
    phone: '',
    address: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = (e:any) => {
    setOthersDetails({...othersDetails, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    createOthersTax(othersDetails, dispatch)
    window.location.reload()
  }

  useEffect(() => {
    getOthersTax(dispatch)

    return () => {

    }
  }, [dispatch])

  return (
    <section className='styles'>
      <AddRevenue
        tax='Other Taxes'
        revenue='Add Other Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    <Table rows={others}/>
  </section>
  )
}

export default Others
