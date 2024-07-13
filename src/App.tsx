import { useState } from "react";

function App() {
  const [num, setNum] = useState("0");

  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "=",
    "C",
    "/",
  ];

  const cal = (val: string) => {
    try {
      if (val === "C") {
        setNum("0");
      } 
      else if (val === "=") {
        setNum(eval(num));
      } 
      else {
        setNum((pre) => {
          if (pre === "0" || pre === "error") {
            return val;
          } else {
            return pre + val;
          }
        });
      }
    } catch {
      setNum("error");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-dvh">
        <div className="w-11/12 md:w-9/12 lg:w-6/12 bg-slate-100 rounded-xl mx-auto">
          <div>
            <h1 className="font-bold text-blue-500 text-2xl p-6">Calculator</h1>

            <div className="flex justify-center my-8">
              <textarea
                className="w-11/12 h-24 rounded-xl p-3 text-2xl resize-none"
                value={num}
                readOnly
              ></textarea>
            </div>

            <div className="grid grid-cols-4 w-11/12 mx-auto gap-5 my-12 py-12">
              {buttons.map((btnValue, index) => (
                <button
                  key={index}
                  className="bg-slate-300 hover:bg-slate-400 duration-200 py-5 h-14 w-14 rounded-md flex justify-center items-center mx-auto"
                  onClick={() => cal(btnValue)}
                >
                  {btnValue}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
