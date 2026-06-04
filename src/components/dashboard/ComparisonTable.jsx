function ComparisonTable() {

  const data = [
    {
      metric: "Revenue",
      current: 100,
      scenario: 120
    },
    {
      metric: "Churn",
      current: 15,
      scenario: 10
    },
    {
      metric: "Risk",
      current: 40,
      scenario: 60
    }
  ];

  return (

    <div className="rounded-3xl bg-white/5 p-6">

      <h2 className="text-2xl font-bold mb-5">
        Scenario Comparison
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b border-white/10">

            <th className="text-left pb-3">
              Metric
            </th>

            <th className="text-left pb-3">
              Current
            </th>

            <th className="text-left pb-3">
              Scenario
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((row) => (

            <tr
              key={row.metric}
              className="border-b border-white/5"
            >

              <td className="py-3">
                {row.metric}
              </td>

              <td>
                {row.current}
              </td>

             <td
  className={
    (
      row.metric === "Revenue" &&
      row.scenario > row.current
    ) ||

    (
      row.metric === "Churn" &&
      row.scenario < row.current
    ) ||

    (
      row.metric === "Risk" &&
      row.scenario < row.current
    )

      ? "text-green-400"

      : "text-red-400"
  }
>
  {row.scenario}
</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ComparisonTable;