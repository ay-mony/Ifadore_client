import { FC, useState , useContext, useEffect} from 'react'
import './styles.scss'
import Table from '../../comps/table/Table'
import AddRevenue from '../../comps/add/Add'
import { createPollTax, getPollTax } from '../../services/context/polltaxContext/apiCall'
import { PolltaxContext } from '../../services/context/polltaxContext/polltaxContext'

const Polltask:FC = () => {

  const { polltax, dispatch } = useContext(PolltaxContext)

    const [polltaxDetails, setPolltaxDetails] = useState({
      fullName: '',
      phone: '',
      address: '',
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
      if(polltax){
        window.location.reload()
      } else {
        throw new Error
      }
    }

    useEffect(() => {
      getPollTax(dispatch)
    }, [dispatch])


  return (
    <section className='styles'>
      <AddRevenue
        tax='Poll Taxes'
        revenue='Add Poll Tax'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Table rows={polltax}/>
    </section>
  )
}

export default Polltask
