import './widget.scss'
import { FC } from 'react'
import { ChatBubble, ApprovalOutlined, BarChartOutlined, CheckCircleOutline, Repartition } from '@mui/icons-material'

interface WidgetDetails {
  title: string;
  icon: React.ReactElement;
  amount: number;
}

interface WidgetProps {
  type: 'polltax' | 'yesterday' | 'licence' | 'month' | 'total';
}


const Widget: FC<WidgetProps> = ({type})=> {
  
  const getWidgetDetails = (): WidgetDetails => {

    switch(type){
      case 'polltax':
        return {
        title: 'Poll Tax',
        icon: <BarChartOutlined style={{color: 'orange'}}/>,
        amount: 210000
      };
    case 'yesterday':
      return {
        title: 'Yesterday',
        icon: <ApprovalOutlined style={{color: 'green'}}/>,
        amount: 312000
      };
     case 'licence':
      return {
        title: 'Licence',
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
