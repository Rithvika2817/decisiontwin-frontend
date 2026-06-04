import { useState } from "react";

function SimResultCard({

  revenue,
  risk,
  confidence

}) {

  const [expanded,setExpanded] =
    useState(false);

  return (

    <div
      onClick={() =>
        setExpanded(
          !expanded
        )
      }
      className="rounded-3xl bg-white/5 p-6 mt-8 cursor-pointer"
    >

      <h2 className="text-2xl font-bold mb-6">

        Simulation Result

      </h2>

      <div className="space-y-3">

        <p>

          Revenue Change:

          <span className="ml-2 text-green-400">

            {revenue}

          </span>

        </p>

        <p>

          Risk:

          <span className="ml-2 text-orange-400">

            {risk}

          </span>

        </p>

        <p>

          Confidence:

          <span className="ml-2 text-purple-400">

            {confidence}

          </span>

        </p>

      </div>

      {expanded && (

        <div className="mt-6 border-t border-white/10 pt-4">

          <p className="text-gray-300">

            Additional simulation details:
            Revenue is expected to increase,
            with moderate risk and good
            confidence.

          </p>

        </div>

      )}

      <button
        className="mt-6 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3"
      >
        Save Scenario
      </button>

    </div>

  );

}

export default SimResultCard;