
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 8500 },
  { month: 'Feb', revenue: 9200 },
  { month: 'Mar', revenue: 10800 },
  { month: 'Apr', revenue: 12300 },
  { month: 'May', revenue: 14500 },
  { month: 'Jun', revenue: 13800 },
  { month: 'Jul', revenue: 15200 },
  { month: 'Aug', revenue: 16500 },
  { month: 'Sep', revenue: 17800 },
  { month: 'Oct', revenue: 18900 },
  { month: 'Nov', revenue: 19500 },
  { month: 'Dec', revenue: 21000 },
];

export const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => `$${value}`} />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};
