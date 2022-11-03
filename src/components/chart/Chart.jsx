import "./chart.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 1000,
    amt: 1000,
  },
  {
    name: 'Feb',
    pv: 2000,
    amt: 2000,
  },
  {
    name: 'Mar',
    pv: 3000,
    amt: 3000,
  },
  {
    name: 'April',
    pv: 1000,
    amt: 1000,
  },
  {
    name: 'May',
    pv: 2000,
    amt: 2000,
  },
  {
    name: 'June',
    pv: 3000,
    amt: 3000,
  },
  {
    name: 'July',
    pv: 4000,
    amt: 4000,
  },
];
const Chart = ({aspect}) => {
  return (
    <div className="chart">
      <div className="title">Last 7 months update</div>
     <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={500}
          height={300}
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="" fill="#0080ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
