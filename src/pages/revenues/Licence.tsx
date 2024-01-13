import Table from '../../comps/table/Table'
import { FC, useContext, useState } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'
import { createLicenceTax } from '../../services/context/licenceContext/apiCall'
import { LicenceTaxContext } from '../../services/context/licenceContext/licenceContext'

const Licence:FC = () => {

  const { dispatch , licence} = useContext(LicenceTaxContext)
 
    const [licenceDetails, setLicenceDetails] = useState({
      fullName: '',
      phone: '',
      amount: '',
      date: '',
      typeOfTax: ''
    })

    const handleChange = (e:any) => {
      setLicenceDetails({...licenceDetails, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e:any) => {
      e.preventDefault()
      createLicenceTax(licenceDetails, dispatch)
    }

  return (
    <section className='styles'>
      <AddRevenue
        tax='Lincence Taxes'
        revenue='Add Lincence Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Table rows={licence}/>
    </section>
  )
}

export default Licence
