import './chart.scss'
import { BarChart, Bar, Rectangle, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    amt: 2400,
  },
  {
    name: 'Feb',
    amt: 2210,
  },
  {
    name: 'March',
    amt: 6290,
  },
  {
    name: 'April',
    amt: 5000,
  },
  {
    name: 'May',
    amt: 6181,
  },
  {
    name: 'June',
    amt: 4500,
  },
  {
    name: 'July',
    amt: 2100,
  },
  {
    name: 'Aug',
    amt: 2100,
  },
  {
    name: 'Sept',
    amt: 2100,
  },
  {
    name: 'Oct',
    amt: 2100,
  },
  {
    name: 'Nov',
    amt: 3100,
  },
  {
    name: 'Dec',
    amt: 5000,
  },
];

const Charts = () => {
  return (
    <section className='chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip
            contentStyle={{background: 'transparent', border: 'none'}}
            labelStyle={{display: 'none'}}
          />
          <Legend />
          <Bar dataKey="amt" fill="#256" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
        </ResponsiveContainer>
    </section>
  )
}

export default Charts
