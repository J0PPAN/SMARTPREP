'use client';
import React, { useState,useEffect } from 'react';
import { app, db } from '@/app/utils/FirebaseConfig';
import {collection, doc,getDocs} from 'firebase/firestore'

function SubjectForm() {

    // useEffect(() => {
    //     const fetchData = async () => {
          
    
    //       try {
    //         const querySnapshot = await getDocs(collection(db,"S6"));
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.data());
    //         }
    //         );  
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //         setError(error);
    //       } 
    //     };
    
    //     fetchData();
    //   }, [db]); 


    const [fetchedData, setFetchedData] = useState(null);

    const [semester, setSemester] = useState(1);
    const [subjects, setSubjects] = useState({
        1: ['Mathematics', 'Physics', 'Chemistry'],
        2: ['Biology', 'History', 'Geography'],
        3: ['Biology', 'History', 'Geography'],
        4: ['Biology', 'History', 'Geography'],
        5: ['Biology', 'History', 'Geography'],
        6: ['Biology', 'History', 'Geography'],
        7: ['Biology', 'History', 'Geography'],
        8: ['Biology', 'History', 'Geography'],
    });


    const handleSemesterChange = (e) => {
        setSemester(parseInt(e.target.value));
    };

    const handleSubmit = async (e)=>{
        try{

            console.log("start")
            console.log(semester)
            const querySnapshot = await getDocs(collection(db,"S6"));
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
            });
        } catch (e){
            console.log(e);
        }
    }



    return (<>
        <form  className='w-1/2' spy={true} onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">Semester:</label>
                <select name="semester" id="semester" className="form-select w-full" onChange={handleSemesterChange} value={semester}>
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                <select name="subject" id="subject" className="form-select w-full">
                    {subjects[semester].map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                    ))}
                </select>
            </div>

            <div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Next</button>
            </div>
        </form>
        </>
    );
}

export default SubjectForm;
