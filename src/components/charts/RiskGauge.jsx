import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from "recharts";

function RiskGauge({

  score

}) {

  const color =

    score < 34

    ? "#10803F"

    : score < 67

    ? "#B45309"

    : "#B91C1C";

  const data = [

    {

      value:score,
      fill:color

    }

  ];

  return (

    <div className="flex flex-col items-center">

      <RadialBarChart
        width={180}
        height={120}
        innerRadius="80%"
        outerRadius="100%"
        startAngle={180}
        endAngle={0}
        data={data}
      >

        <PolarAngleAxis
          type="number"
          domain={[0,100]}
          tick={false}
        />

        <RadialBar
          dataKey="value"
          cornerRadius={4}
        />

      </RadialBarChart>

      <h2
        className="text-3xl font-bold"
        style={{
          color
        }}
      >

        {score}

      </h2>

      <p className="text-gray-400">

        Risk Score

      </p>

    </div>

  );

}

export default RiskGauge;
