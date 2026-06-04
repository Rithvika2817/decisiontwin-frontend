import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function DeltaBarChart() {

  const data = [

  {
    metric:"Revenue",
    before:70,
    after:90
  },

  {
    metric:"Churn",
    before:40,
    after:60
  }

];

  return (

    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-5">

        KPI Comparison

      </h2>

      <BarChart
  width={500}
  height={300}
  data={data}
>

  <XAxis
  dataKey="metric"
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

<Bar
  dataKey="before"
  fill="#8B5CF6"
/>

<Bar
  dataKey="after"
  fill="#EC4899"
/>

</BarChart>

    </div>

  );

}

export default DeltaBarChart;