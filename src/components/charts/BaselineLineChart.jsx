import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function BaselineLineChart() {

  const data = [

    {
      month:"Jan",
      revenue:120
    },

    {
      month:"Feb",
      revenue:180
    },

    {
      month:"Mar",
      revenue:150
    },

    {
      month:"Apr",
      revenue:240
    },

    {
      month:"May",
      revenue:220
    }

  ];

  return (

    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-5">

        Revenue Trend

      </h2>

      <ResponsiveContainer
  width="100%"
  height={300}
>

  <LineChart
    data={data}
  >

        <XAxis
          dataKey="month"
          stroke="#ffffff"
        />

        <YAxis
          stroke="#ffffff"
        />

        <Tooltip
          contentStyle={{
            background:"#111827",
            border:"none",
            color:"white"
          }}
        />

        <Line
  type="monotone"
  dataKey="revenue"
  stroke="#8B5CF6"
  strokeWidth={3}
  isAnimationActive={true}
  animationDuration={1500}
/>

      </LineChart>

    </ResponsiveContainer>

    </div>

  );

}

export default BaselineLineChart;