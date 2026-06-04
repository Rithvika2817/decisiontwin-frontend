function DataPreviewTable({ previewData }) {

  return (

    <div className="mt-10 rounded-3xl bg-white/5 p-6 overflow-x-auto max-h-[500px]">

      <h2 className="text-2xl font-bold mb-6">
        Data Preview
      </h2>

      <table className="w-full">

        <thead className="sticky top-0 z-10">

          <tr className="bg-[#111827]">

            {Object.keys(
              previewData[0]
            ).map((header,index)=>(

              <th
                key={index}
                className="text-left p-4 border-b border-white/10"
              >
                {header}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {previewData.map(
            (row,index)=>(

              <tr key={index}>

                {Object.values(row).map(
                  (cell,i)=>(

                    <td
                      key={i}
                      className="p-4 border-b border-white/5"
                    >
                      {cell}
                    </td>

                  )
                )}

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );

}

export default DataPreviewTable;