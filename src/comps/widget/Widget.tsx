import './widget.scss'
import { FC } from 'react'
import { WidgetProps, WidgetDetails } from '../../types/types'
import { ChatBubble, ApprovalOutlined, BarChartOutlined, CheckCircleOutline, Repartition } from '@mui/icons-material'
import { baseUrl } from '../../services/utils/url'
import { useAmount } from '../../services/utils/hook';



const Widget: FC<WidgetProps> = ({type})=> {

  const totalPolltax = useAmount(baseUrl + 'polltax/amount')
  const totalEarning =   useAmount(baseUrl + 'earning/amount')
  const totalRents = useAmount(baseUrl + 'fees/amount')
 
  
  const getWidgetDetails = (): WidgetDetails => {

    switch(type){
      case 'polltax':
        return {
        title: 'Poll Tax',
        icon: <BarChartOutlined style={{color: 'orange'}}/>,
        amount: totalPolltax.amount
      };
      case 'rent':
        return {
          title: 'Fees',
          icon: <ApprovalOutlined style={{color: 'green'}}/>,
          amount: totalRents.amount
      };
      case 'earnings':
        return {
          title: 'Earnings',
          icon: <CheckCircleOutline style={{color: 'yellow'}}/>,
          amount: totalEarning.amount
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
