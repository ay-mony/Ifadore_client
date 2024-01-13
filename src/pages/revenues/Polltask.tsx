import { FC, useState , useContext} from 'react'
import './styles.scss'
import Table from '../../comps/table/Table'
import AddRevenue from '../../comps/add/Add'
import { createPollTax } from '../../services/context/polltaxContext/apiCall'
import { PolltaxContext } from '../../services/context/polltaxContext/polltaxContext'

const Polltask:FC = () => {

  const { dispatch } = useContext(PolltaxContext)

    const [polltaxDetails, setPolltaxDetails] = useState({
      fullName: '',
      phone: '',
      amount: '',
      date: '',
      typeOfTax: ''
    })

    const handleChange = (e:any) => {
      setPolltaxDetails({...polltaxDetails, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e:any) => {
      e.preventDefault()
      createPollTax(polltaxDetails, dispatch)
      console.log(polltaxDetails)
    }

  
    
  return (
    <section className='styles'>
      <AddRevenue
        tax='Poll Taxes'
        revenue='Add Poll Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Table/>
    </section>
  )
}

export default Polltask
