import { useEffect } from "react";
import { Link } from "react-router-dom";
import KPICard from "../components/dashboard/KPICard";
import ScenarioList from "../components/scenario/ScenarioList";

function Dashboard() {
  

  const uploadedData =
  JSON.parse(
    sessionStorage.getItem(
      "csvData"
    )
  ) || [];

const data =

uploadedData.length > 0

? uploadedData

: [

  {
    month:"Jan",
    revenue:1200
  },

  {
    month:"Feb",
    revenue:1800
  },

  {
    month:"Mar",
    revenue:1500
  },

  {
    month:"Apr",
    revenue:2500
  },

  {
    month:"May",
    revenue:2200
  },

  {
    month:"Jun",
    revenue:3000
  }

];

  const totalRevenue =
    data.reduce(
      (sum, row) =>
        sum +
        Number(
          row.revenue ||
          row.Revenue ||
          row.sales ||
          row.Sales ||
          0
        ),
      0
    );

  const totalRows =
  uploadedData.length;

  // Dynamic chart logic

  const chartMap = {};

  data.forEach((item) => {

    const label =

      item.month ||
      item.Month ||

      item.week ||
      item.Week ||

      item.day ||
      item.Day ||

      item.date ||
      item.Date ||

      item.year ||
      item.Year ||

      "Unknown";


    const revenue = Number(

      item.revenue ||
      item.Revenue ||

      item.sales ||
      item.Sales ||

      0

    );

    if (!chartMap[label]) {

      chartMap[label] = {
        label: label,
        revenue: 0
      };

    }

    chartMap[label].revenue += revenue;

  });

  const chartData =
    Object.values(chartMap);


  useEffect(() => {

  sessionStorage.removeItem(
    "csvData"
  );

}, []);


  return (

    <div className="min-h-screen bg-[#050816] text-white p-4 md:p-10">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-3xl md:text-5xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="mt-2 text-gray-400">
            AI-powered business insights
          </p>

        </div>

        <Link
          to="/upload"
          className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold"
        >
          Upload Dataset
        </Link>

      </div>


      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-4 mb-10">

        <KPICard
  title="Revenue"
  value={
    totalRevenue > 0
    ? `$${totalRevenue}`
    : "$2.4M"
  }
/>


       <KPICard
  title="Risk Level"
  value="Medium"
  valueColor="text-orange-400"
/>


        <KPICard
  title="Confidence"
  value="85%"
  valueColor="text-green-400"
/>


        <div
  className="
    rounded-3xl
    bg-white/5
    p-6
    transition-all
    duration-300
    hover:-translate-y-2
    hover:bg-white/10
    hover:shadow-xl
  "
>

  <p>Rows</p>

  <h2 className="text-4xl">
    {totalRows}
  </h2>

</div>

      </div>


      {/* Revenue Graph + AI */}

      <div className="grid gap-8 md:grid-cols-2">

         <div className="rounded-3xl bg-white/5 p-4 md:p-8">

          <h2 className="text-2xl font-bold mb-6">
            Revenue Trend
          </h2>

          <div className="flex items-end justify-center gap-2 overflow-x-auto h-[220px]">

            {chartData.length > 0 ? (

              chartData.map((item,index)=>(

                <div
                  key={index}
                  className="flex flex-col items-center"
                >

                  <div
                    className="w-10 rounded-t-xl bg-gradient-to-t from-purple-600 to-pink-500"
                    style={{
                      height: `${Math.min(
                        item.revenue/100,
                        180
                      )}px`
                    }}
                  />

                  <p className="mt-2 text-sm text-gray-400">

                    {item.label}

                  </p>

                </div>

              ))

            ) : (

              <p className="text-gray-500">
                No chart data available
              </p>

            )}

          </div>

        </div>


        {/* AI */}

        <div className="rounded-3xl bg-white/5 overflow-hidden">

          <div className="border-b border-white/10 p-5">

            <h2 className="font-bold text-xl">
              AI Copilot
            </h2>

          </div>

          <div className="h-[250px] p-5">

            <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-purple-600 p-4">

              Hi 👋 Ask:
              "What if revenue increases by 10%?"

            </div>

          </div>

          <div className="flex gap-3 border-t border-white/10 p-4">

            <input
              placeholder="Ask business questions..."
              className="flex-1 rounded-full bg-black/30 px-5 py-3 outline-none"
            />

            <button
              className="rounded-full bg-purple-600 px-6"
            >
              ➤
            </button>

          </div>

        </div>

      </div>
      <div className="mt-10">

        <ScenarioList />

      </div>


    </div>

  );
}

export default Dashboard;