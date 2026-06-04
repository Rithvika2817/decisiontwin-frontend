import { useState } from "react";

function SaveScenarioModal({

  isOpen,
  onClose

}) {

  const [name,setName] =
    useState("");

  const saveScenario = () => {

    if(!name.trim()) return;

    const existing =

      JSON.parse(
        localStorage.getItem(
          "savedScenarios"
        )
      ) || [];

    existing.push({

      id: Date.now(),

      name

    });

    localStorage.setItem(

      "savedScenarios",

      JSON.stringify(existing)

    );

    setName("");

    onClose();

  };

  if(!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

      <div className="bg-[#0B1020] p-6 rounded-2xl w-[400px]">

        <h2 className="text-2xl font-bold mb-4">

          Save Scenario

        </h2>

        <input
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
          placeholder="Scenario name..."
          className="w-full rounded-xl bg-black/30 p-3 border border-white/10 mb-4"
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10"
          >
            Cancel
          </button>

          <button
            onClick={saveScenario}
            className="px-4 py-2 rounded-xl bg-purple-600"
          >
            Save
          </button>

        </div>

      </div>

    </div>

  );

}

export default SaveScenarioModal;