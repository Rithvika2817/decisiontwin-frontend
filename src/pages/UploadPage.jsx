import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";

function UploadPage() {

  const [fileName, setFileName] =
    useState("");

  const [previewData, setPreviewData] =
    useState([]);

  const [fileType, setFileType] =
    useState("sales");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const navigate =
    useNavigate();

  const onDrop = (acceptedFiles) => {

    const file =
      acceptedFiles[0];

    if (!file) return;

    setError("");
    setLoading(true);

    setFileName(file.name);

    Papa.parse(file, {

      header: true,
      skipEmptyLines: true,

      complete: (result) => {

        if (!result.data.length) {

          setError(
            "CSV file is empty"
          );

          setLoading(false);

          return;
        }

        sessionStorage.setItem(
          "csvData",
          JSON.stringify(result.data)
        );

        sessionStorage.setItem(
          "fileType",
          fileType
        );

        setPreviewData(
          result.data
        );

        setLoading(false);

      },

      error: () => {

        setError(
          "Failed to parse CSV"
        );

        setLoading(false);

      }

    });

  };

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({

    onDrop,

    accept: {
      "text/csv": [".csv"]
    }

  });

  return (

    <div className="min-h-screen bg-[#050816] text-white p-10">

      <h1 className="text-5xl font-bold text-center">

        Upload Dataset

      </h1>

      <p className="text-center text-gray-400 mt-3">

        Upload business data and preview it

      </p>


      {/* File Type */}

      <div className="mt-8 flex justify-center">

        <select
          value={fileType}
          onChange={(e)=>
            setFileType(e.target.value)
          }
          className="rounded-xl bg-black/30 border border-white/10 px-5 py-3"
        >

          <option value="sales">
            Sales
          </option>

          <option value="hr">
            HR
          </option>

          <option value="marketing">
            Marketing
          </option>

          <option value="customer">
            Customer
          </option>

          <option value="financial">
            Financial
          </option>

        </select>

      </div>


      {/* Upload Box */}

      <div
        {...getRootProps()}
        className={`mt-10 mx-auto max-w-[800px]
        rounded-3xl p-16 text-center
        border-2 border-dashed
        cursor-pointer transition-all

        ${
          isDragActive
          ? "border-purple-500 bg-purple-500/10"
          : "border-white/20 bg-white/5"
        }`}
      >

        <input {...getInputProps()} />

        <div className="text-6xl">

          📁

        </div>

        <h2 className="mt-5 text-2xl font-bold">

          {
            isDragActive
            ? "Drop CSV here"
            : "Drag & Drop CSV or Click"
          }

        </h2>

        <p className="mt-3 text-gray-400">

          Supported format: .csv

        </p>

      </div>


      {/* Loading */}

      {loading && (

        <p className="text-center mt-5 text-purple-400">

          Uploading...

        </p>

      )}


      {/* Error */}

      {error && (

        <p className="text-center mt-5 text-red-400">

          {error}

        </p>

      )}


      {/* File Name */}

      {fileName && (

        <div className="mt-5 text-center">

          Selected:

          <span className="text-purple-400 ml-2">

            {fileName}

          </span>

        </div>

      )}


      {/* Preview */}

      {previewData.length > 0 && (

        <div className="mt-10 rounded-3xl bg-white/5 p-6 overflow-auto">

          <h2 className="text-2xl font-bold mb-6">

            Data Preview

          </h2>

          <table className="w-full">

            <thead>

              <tr>

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

                    {Object.values(
                      row
                    ).map(
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

          <div className="flex justify-end mt-8">

            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3"
            >

              Continue →

            </button>

          </div>

        </div>

      )}

    </div>

  );

}

export default UploadPage;