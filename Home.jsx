import React, { useState } from "react";
import SimulationForm from "../components/SimulationForm";
import ResultsCard from "../components/ResultsCard";
import ScenarioList from "../components/ScenarioList";
import ReportModal from "../components/ReportModal";

const Home = () => {
  const [results, setResults] = useState(null);
  const [scenarios, setScenarios] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleSimulate = (data) => {
    const roi = ((data.invoiceAmount * 0.1) * (data.automationLevel === "high" ? 1.5 : data.automationLevel === "medium" ? 1.2 : 1)).toFixed(2);
    const savings = (roi * 0.8).toFixed(2);
    const timeSaved = (data.processingTime * (data.automationLevel === "high" ? 0.5 : data.automationLevel === "medium" ? 0.7 : 0.9)).toFixed(1);

    const result = { ...data, roi, savings, timeSaved };
    setResults(result);
    setScenarios([result, ...scenarios]);
  };

  const handleSelectScenario = (scenario) => {
    setSelectedReport(scenario);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <SimulationForm onSimulate={handleSimulate} />
      <ResultsCard results={results} />
      <ScenarioList scenarios={scenarios} onSelect={handleSelectScenario} />
      <ReportModal
        open={Boolean(selectedReport)}
        onClose={() => setSelectedReport(null)}
        report={selectedReport}
      />
    </div>
  );
};

export default Home;
