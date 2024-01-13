import './widget.scss'
import { FC, useEffect, useState } from 'react'
import { WidgetProps, WidgetDetails } from '../../types/types'
import { ChatBubble, ApprovalOutlined, BarChartOutlined, CheckCircleOutline, Repartition } from '@mui/icons-material'
import { UseAmonut } from '../../services/utils/UseAmount'
import { polltaxUrl } from '../../services/utils/url'
import axios from 'axios'



const Widget: FC<WidgetProps> = ({type})=> {

  const [polltax, setPollTax] = useState(0)
  useEffect(() => {
    const getPollTax = async () => {

      try {
        const res = await axios.get(polltaxUrl)
        setPollTax(res.data.totalAmount)
      } catch (error) {
        console.log(error)
      }
    }
    getPollTax()
  })

 
  
  const getWidgetDetails = (): WidgetDetails => {

    switch(type){
      case 'polltax':
        return {
        title: 'Poll Tax',
        icon: <BarChartOutlined style={{color: 'orange'}}/>,
        amount: polltax
      };
      case 'rent':
        return {
          title: 'Rents',
          icon: <ApprovalOutlined style={{color: 'green'}}/>,
          amount: 312000
      };
      case 'earnings':
        return {
          title: 'Earnings',
          icon: <CheckCircleOutline style={{color: 'yellow'}}/>,
          amount: 310000
        };
      case 'month':
        return {
          title: 'Last month',
          icon: <Repartition style={{color: 'purple'}}/>,
          amount: 262000
          }
      case 'total':
        return {
          title: 'Grand Total',
          icon: <ChatBubble style={{color: '#256'}}/>,
          amount: 532000
        }
      
      default:
        throw new Error('Invalid widget type');
      }
    }
  
        const details: WidgetDetails = getWidgetDetails();


  return (
    <div className='widget'>
      <div>
        <div className='div'>
          <span>{details.title}</span>
          <span>{details.icon}</span>
        </div>
        <p># {details.amount}</p>
      </div>
      
    </div>
  )
}

export default Widget
