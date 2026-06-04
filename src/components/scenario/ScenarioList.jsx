import { useEffect, useState } from "react";

function ScenarioList() {

  const [scenarios, setScenarios] =
    useState([]);

  useEffect(() => {

    const saved =

      JSON.parse(
        localStorage.getItem(
          "savedScenarios"
        )
      ) || [];

    setScenarios(saved);

  }, []);

  return (

    <div className="rounded-3xl bg-white/5 p-6">

      <h2 className="text-2xl font-bold mb-5">

        Saved Scenarios

      </h2>

      {scenarios.length === 0 ? (

        <p className="text-gray-400">

          No saved scenarios yet.

        </p>

      ) : (

        <div className="space-y-3">

          {scenarios.map(

            (scenario) => (

              <div
                key={scenario.id}
                className="
                rounded-xl
                bg-white/10
                p-4
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/15
                hover:shadow-lg
                hover:shadow-purple-500/20
"
              >

                <p className="font-semibold">

                  {scenario.name}

                </p>

              </div>

            )

          )}

        </div>

      )}

    </div>

  );

}

export default ScenarioList;