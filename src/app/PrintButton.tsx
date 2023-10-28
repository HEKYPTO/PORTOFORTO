import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

const PrintButton = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: auto; 
        margin: 0mm; 
      }

      @media print {
        .no-print {
          display: none;
        }
      }
    `,
  });

  return (
    <div>
      <div className="flex items-center justify-between bg-gray-400 p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out cursor-pointer"
          onClick={handlePrint}
        >
          Print!
        </button>
      </div>
      <div>
        <ComponentToPrint ref={componentRef} />
      </div>
    </div>
  );
};

export default PrintButton;
