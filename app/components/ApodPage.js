'use client';
import React, { useState } from "react";
import buildApodUrl from "../utilities/apiUrl";
import ApodForm from "../components/ApodForm";
import ApodContent from "../components/ApodContent";

export default function ApodPage() {  
    const [apodData, setApodData] = useState(null);
    const [error, setError] = useState("");
  
    const fetchApodData = async (parameters) => {
        const apiUrl=buildApodUrl(parameters);
        // Step 2 Reset the state before every api call
        setApodData(null);
        setError("");
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setError("");
            // Set the APOD data as an array even if it is only one item
            setApodData(Array.isArray(data) ? data : [data]);
        } catch (err) {
            setError(`Error fetching data: ${err.message}`);
        }
    };
    return <>
        <ApodForm fetchApodData={fetchApodData} />
        <ApodContent apodData={apodData} />
    </>;
}
