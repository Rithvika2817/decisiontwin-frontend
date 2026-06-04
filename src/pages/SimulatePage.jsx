import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QueryInput from "../components/forms/QueryInput";
import SimResultCard from "../components/cards/SimResultCard";
import RiskGauge from "../components/charts/RiskGauge";
import SaveScenarioModal from "../components/scenario/SaveScenarioModal";

function SimulatePage() {

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  return (

    <div className="min-h-screen bg-[#050816] text-white p-10">

      <h1 className="text-3xl md:text-5xl font-bold mb-8">

        Simulation Center

      </h1>

      <QueryInput />

      <SimResultCard
        revenue="+6.8%"
        risk="Medium"
        confidence="78%"
      />

      <div className="mt-10 flex justify-center">

        <RiskGauge
          score={54}
        />

      </div>

      <div className="mt-6">

        <button
          onClick={() =>
            setIsModalOpen(true)
          }
          className="rounded-xl bg-purple-600 px-6 py-3"
        >
          Save Scenario
        </button>

      </div>

      <div className="flex justify-end mt-10">

        <button
          onClick={() =>
            navigate("/dashboard")
          }
          className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3"
        >
          Run Simulation →
        </button>

      </div>

      <SaveScenarioModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
      />

    </div>

  );

}

export default SimulatePage;