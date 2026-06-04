import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import DataPreviewTable from "../components/table/DataPreviewTable";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

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

    setFileName(file.name);
    setLoading(true);
    setError("");

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

        setPreviewData(
          result.data
        );

        sessionStorage.setItem(
          "csvData",
          JSON.stringify(result.data)
        );

        sessionStorage.setItem(
          "fileType",
          fileType
        );

        setLoading(false);

      },

      error: ()=>{

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

    accept:{
      "text/csv":[".csv"]
    }

  });

  return (

    <div className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      <div className="p-10">

       <h1 className="text-3xl md:text-5xl font-bold text-center">
        Upload Dataset
       </h1>

        <p className="text-center text-gray-400 mt-3">
          Upload business data and preview it
        </p>

        <div className="mt-8 flex justify-center">

        <select
          value={fileType}
          onChange={(e)=>
            setFileType(e.target.value)
          }
          className="rounded-xl bg-black/30 border border-white/10 px-5 py-3"
        >

          <option value="sales">Sales</option>
          <option value="hr">HR</option>
          <option value="marketing">Marketing</option>
          <option value="customer">Customer</option>
          <option value="financial">Financial</option>

        </select>

      </div>

      <div
  {...getRootProps()}
  className={`mt-10 mx-auto max-w-[800px]
  rounded-3xl p-16 text-center
  border-2 border-dashed cursor-pointer
  transition-all duration-300
  hover:scale-[1.01]
  hover:shadow-2xl
  hover:shadow-purple-500/20

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

      </div>

      {loading && (

        <p className="text-center mt-5 text-purple-400">
          Uploading...
        </p>

      )}

      {error && (

        <p className="text-center mt-5 text-red-400">
          {error}
        </p>

      )}

      {fileName && (

        <div className="mt-5 text-center">

          Selected:

          <span className="text-purple-400 ml-2">

            {fileName}

          </span>

        </div>

      )}
      {previewData.length > 0 && (

  <>

    <DataPreviewTable
      previewData={previewData}
    />

    <div className="flex justify-end mt-8">

      <button
        onClick={() =>
          navigate("/baseline")
        }
        className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3"
      >
        Continue →
      </button>

    </div>

    </>

)}

    </div>

    <Footer />

</div>

  );

}

export default UploadPage;