import KPICard from "../components/dashboard/KPICard";
import SkeletonCard from "../components/dashboard/SkeletonCard";
import { useNavigate } from "react-router-dom";
import BaselineLineChart from "../components/charts/BaselineLineChart";

function BaselinePage() {

  const navigate = useNavigate();

  const loading = false;

  const uploadedData =

JSON.parse(

sessionStorage.getItem(
"csvData"
)

) || [];


const totalRevenue =

uploadedData.reduce(

(sum,row)=>

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



  return (

    <div className="min-h-screen bg-[#050816] text-white p-4 md:p-10">

      <h1 className="text-3xl md:text-5xl font-bold mb-8">

        Baseline Analytics

      </h1>

      <div className="grid gap-6 md:grid-cols-4">

        {loading ? (

          <>

            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />

          </>

        ) : (
<>

<KPICard
  title="Revenue"
  value={
    totalRevenue > 0
    ? `$${totalRevenue}`
    : "$0"
  }
/>

<KPICard
  title="Growth"
  value="8.4%"
  valueColor="text-green-400"
/>

<KPICard
  title="Churn"
  value="4.1%"
  valueColor="text-orange-400"
/>

<KPICard
  title="Rows"
  value={uploadedData.length}
/>

</>

        )}

      </div>
        <BaselineLineChart />
      <div className="flex justify-end mt-10">

        <button
          onClick={() =>
            navigate("/simulate")
          }
          className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3"
        >
          Continue →
        </button>

      </div>

    </div>

  );

}

export default BaselinePage;