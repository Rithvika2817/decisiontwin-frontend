import { useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {

  const data =
    JSON.parse(
      sessionStorage.getItem("csvData")
    ) || [];

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

  const totalRows = data.length;

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

    const clearData = () => {

      sessionStorage.removeItem(
        "csvData"
      );

    };

    window.addEventListener(
      "beforeunload",
      clearData
    );

    return () => {

      window.removeEventListener(
        "beforeunload",
        clearData
      );

    };

  }, []);


  return (

    <div className="min-h-screen bg-[#050816] text-white p-10">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold">
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

        <div className="rounded-3xl bg-white/5 p-6">

          <p>Revenue</p>

          <h2 className="text-4xl font-bold">

            {totalRevenue > 0
              ? `$${totalRevenue}`
              : "$2.4M"}

          </h2>

        </div>


        <div className="rounded-3xl bg-white/5 p-6">

          <p>Risk Level</p>

          <h2 className="text-4xl text-orange-400">
            Medium
          </h2>

        </div>


        <div className="rounded-3xl bg-white/5 p-6">

          <p>Confidence</p>

          <h2 className="text-4xl text-green-400">
            85%
          </h2>

        </div>


        <div className="rounded-3xl bg-white/5 p-6">

          <p>Rows</p>

          <h2 className="text-4xl">
            {totalRows}
          </h2>

        </div>

      </div>


      {/* Revenue Graph + AI */}

      <div className="grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl bg-white/5 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Revenue Trend
          </h2>

          <div className="flex items-end justify-center gap-4 h-[220px]">

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

    </div>

  );
}

export default Dashboard;