import { useState } from "react";

function QueryInput() {

  const [query,setQuery] =
    useState("");

  const [decisionType,setDecisionType] =
    useState("Price Change");

  const [magnitude,setMagnitude] =
    useState(10);
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

const projectedRevenue =

Math.round(

totalRevenue *

(1 + magnitude / 100)

);
const aiResponse =

magnitude > 50

? "Large increase may improve revenue but also increase risk."

: magnitude > 20

? "Moderate growth could improve business performance."

: "Small increase gives stable growth with lower risk.";

  return (

    <div className="rounded-3xl bg-white/5 p-6">

      <h2 className="text-2xl font-bold mb-6">

        Decision Simulation

      </h2>

      <textarea
        value={query}
        onChange={(e)=>
          setQuery(e.target.value)
        }
        placeholder="What if I raise prices by 10%?"
        className="w-full h-[100px] rounded-xl bg-black/30 p-4 outline-none border border-white/10"
      />

      <select
        value={decisionType}
        onChange={(e)=>
          setDecisionType(
            e.target.value
          )
        }
        className="mt-5 w-full rounded-xl bg-black/30 p-4 border border-white/10"
      >

        <option>
          Price Change
        </option>

        <option>
          Headcount
        </option>

        <option>
          Marketing
        </option>

      </select>

      <div className="mt-6">

        <p className="mb-2">

          Magnitude:
          {magnitude}%

        </p>

        <input
          type="range"
          min="0"
          max="100"
          value={magnitude}
          onChange={(e)=>
            setMagnitude(
              e.target.value
            )
          }
          className="w-full"
        />

      </div>
          <div className="mt-8 rounded-xl bg-black/30 p-5">

  <p className="mb-2">

    Current Revenue:

    <span className="ml-2 text-purple-400">

      ${totalRevenue}

    </span>

  </p>

  <p className="mb-4">

    Projected Revenue:

    <span className="ml-2 text-green-400">

      ${projectedRevenue}

    </span>

  </p>

  <div className="rounded-xl bg-purple-600/20 p-4">

    <p className="font-semibold mb-2">

      AI Insight

    </p>

    <p className="text-gray-300">

      {aiResponse}

    </p>

  </div>

</div>
    </div>

  );

}

export default QueryInput;