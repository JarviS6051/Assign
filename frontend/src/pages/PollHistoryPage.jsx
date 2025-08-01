import React, { useEffect, useState } from "react";
import axios from "axios";
import PollHistory from "../components/PollHistory"; // Your styled component

const BACKEND_URL = "http://localhost:5000";

const PollHistoryPage = () => {
    const [pollHistory, setPollHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/api/polls/history`);
                setPollHistory(res.data); // Make sure this matches your backend response
            } catch (err) {
                console.error("Failed to fetch poll history", err);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div className="min-h-screen bg-white p-6">
            <PollHistory history={pollHistory} />
        </div>
    );
};

export default PollHistoryPage;
