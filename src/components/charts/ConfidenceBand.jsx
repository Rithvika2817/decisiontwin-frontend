function ConfidenceBand({

  score

}) {

  return (

    <div className="mt-8">

      <p className="mb-2 font-bold">

        Confidence

      </p>

      <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">

        <div
          className="h-full bg-purple-500"
          style={{
            width: `${score}%`
          }}
        />

      </div>

      <p className="mt-2 text-purple-400">

        {score}%

      </p>

    </div>

  );

}

export default ConfidenceBand;