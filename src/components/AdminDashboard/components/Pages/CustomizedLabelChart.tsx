import { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

interface CustomizedLabelProps {
  x?: number;
  y?: number;
  stroke?: string;
  value?: any;
}

class CustomizedLabel extends PureComponent<CustomizedLabelProps> {
  render() {
    const { x = 0, y = 0, stroke = '#000', value = '' } = this.props;
    return (
      <text
        x={x}
        y={y}
        dy={-10}
        fill={stroke}
        fontSize={12}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  }
}

interface CustomizedAxisTickProps {
  x?: number;
  y?: number;
  payload?: { value: string };
}

class CustomizedAxisTick extends PureComponent<CustomizedAxisTickProps> {
  render() {
    const { x = 0, y = 0, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload?.value || ''}
        </text>
      </g>
    );
  }
}

class CustomizedLabelChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            label={<CustomizedLabel />}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default CustomizedLabelChart;
