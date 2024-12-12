import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Jun',
    NGN: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Jul',
    NGN: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Aug',
    NGN: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Sep',
    NGN: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Oct',
    NGN: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Nov',
    NGN: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dec',
    NGN: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Sales = () => {
  return (
    <div className="lg:w-[49%] h-[260px] bg-white rounded-lg p-2">
        <h1 className="text-xl">Monthly Sales</h1>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="NGN" stroke="#000000" fill="#808080" />
            </AreaChart>
          </ResponsiveContainer>
    </div>
  )
}

export default Sales
