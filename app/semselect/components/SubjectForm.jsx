"use client";
import React, { useState, useEffect } from "react";
import { app, db } from "@/app/utils/FirebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";

function SubjectForm() {
  const [fetchedData, setFetchedData] = useState(null);

  const [subjects, setSubjects] = useState({
    "CSE": {
      1: ["Mathematics", "Physics", "Chemistry"],
      2: ["Data Structures", "Algorithms", "Database Management"],
      3: ["Operating Systems", "Computer Networks", "Software Engineering"],
      4: ["Web Development", "Mobile App Development", "Artificial Intelligence"],
      5: ["MPMC", "DM", "CN", "MSS","FLAT","SS"],
      6: ["CGIP", "CD", "IEFT","AAD","PIP"],
    },
    "ME": {
      1: ["Mechanics", "Thermodynamics", "Material Science"],
      2: ["Fluid Mechanics", "Heat Transfer", "Machine Design"],
      3: ["Engineering Drawing", "Manufacturing Processes", "Engineering Mechanics"],
      4: ["Automobile Engineering", "Power Plant Engineering", "Refrigeration and Air Conditioning"],
      5: ["Renewable Energy Systems", "Robotics", "Finite Element Analysis"],
      6: ["CAD/CAM", "Industrial Engineering", "Quality Control"],
    },
    "CE": {
      1: ["Mathematics", "Physics", "Chemistry"],
      2: ["Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics"],
      3: ["Concrete Technology", "Transportation Engineering", "Environmental Engineering"],
      4: ["Surveying", "Construction Management", "Hydraulics"],
      5: ["Geomatics Engineering", "Water Resources Engineering", "Geotechnical Engineering"],
      6: ["Structural Design", "Environmental Impact Assessment", "Construction Materials"],
    },
    "EEE": {
      1: ["Mathematics", "Physics", "Chemistry"],
      2: ["Circuit Theory", "Electromagnetic Theory", "Electrical Machines"],
      3: ["Power Systems", "Control Systems", "Power Electronics"],
      4: ["Digital Electronics", "Microprocessors", "Renewable Energy Systems"],
      5: ["Instrumentation and Measurements", "High Voltage Engineering", "Electric Drives"],
      6: ["Digital Signal Processing", "Embedded Systems", "Smart Grids"],
    },
    "ECE": {
      1: ["Mathematics", "Physics", "Chemistry"],
      2: ["Electronic Devices and Circuits", "Network Analysis", "Digital Electronics"],
      3: ["Analog Communication", "Digital Communication", "Microprocessors and Microcontrollers"],
      4: ["Signals and Systems", "Control Systems", "VLSI Design"],
      5: ["Digital Signal Processing", "Wireless Communication", "Embedded Systems"],
      6: ["Antenna and Wave Propagation", "Optical Communication", "Satellite Communication"],
    },
  });

  const [semester, setSemester] = useState(1);
  const [branch, setBranch] = useState("CSE");
  const [module, setModule] = useState(1);
  const [subs, setSubs] = useState();
  const [avail,setAvail] = useState(true)
  const handleSemesterChange = (e) => {
    setSemester(parseInt(e.target.value));
  };
  useEffect(() => {
    setSubs(subjects[branch][semester][0]);
  }, [semester]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("start");
      console.log(semester);
      console.log(branch);
      console.log(subs);
      console.log(module);
      console.log(avail)
      
      const querySnapshot = await getDocs(collection(db, `S${semester}`));
      querySnapshot.forEach((doc) => {
        console.log(doc.data()[branch][subs][module - 1]);
        const pdfLink = doc.data()[branch]?.[subs]?.[module - 1];
        if(pdfLink===null || pdfLink===undefined){
        setAvail(false)
        }
      setFetchedData(pdfLink);
      
      
    });
  } catch (e) {
    console.log(e);
  }
  console.log(avail)
  };

  return (
    <>
    {
      !avail&&<p>No data available</p>
    }
    {avail && <div className="w-3/4 flex flex-col justify-normal items-center h-full overflow-auto pt-32">
      <form className="w-1/2" spy={true} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="semester"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Semester:
          </label>
          <select
            name="semester"
            id="semester"
            className="form-select w-full"
            onChange={handleSemesterChange}
            value={semester}
          >
            <option value={1}>Semester 1</option>
            <option value={2}>Semester 2</option>
            <option value={3}>Semester 3</option>
            <option value={4}>Semester 4</option>
            <option value={5}>Semester 5</option>
            <option value={6}>Semester 6</option>
            <option value={7}>Semester 7</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="semester"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Module:
          </label>
          <select
            name="module"
            id="module"
            className="form-select w-full"
            onChange={(e) => setModule(e.target.value)}
            value={module}
          >
            <option value={1}> 1</option>
            <option value={2}> 2</option>
            <option value={3}> 3</option>
            <option value={4}> 4</option>
            <option value={5}> 5</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="semester"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            branch:
          </label>
          <select
            name="branch"
            id="branch"
            className="form-select w-full"
            onChange={(e) => setBranch(e.target.value)}
            value={branch}
          >
            <option value={"CSE"}>CSE</option>
            <option value={"CE"}>CE</option>
            <option value={"EEE"}>EEE</option>
            <option value={"ECE"}>ECE</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject:
          </label>
          <select
            name="subject"
            id="subject"
            className="form-select w-full"
            onChange={(e) => setSubs(e.target.value)}
            value={subs}
          >
            {subjects[branch][semester].map((subject, index) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary/60 hover:text-primary text-white font-semibold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </form>
      {fetchedData && (
        <div className="m-10 w-full">
          <embed src={fetchedData} type="application/pdf" className="" width="100%" height="600px" />
        </div>
      )}


    </div>}

    </>
  );
}

export default SubjectForm;
