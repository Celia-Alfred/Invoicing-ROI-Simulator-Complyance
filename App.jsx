import React from "react";
import ResultsCard from "./components/ResultsCard";
import ScenarioList from "./components/ScenarioList";
import SimulationForm from "./components/SimulationForm";
import ReportModal from "./components/ReportModal";

const App = () => {
  // Example state for demo
  const [scenarios, setScenarios] = React.useState([
    { id: 1, name: "Scenario 1" },
    { id: 2, name: "Scenario 2" },
  ]);
  const [results, setResults] = React.useState({ roi: 25, revenue: 1000 });
  const [reportOpen, setReportOpen] = React.useState(false);

  const handleSimulate = (formData) => {
    // TODO: Implement simulation logic
    console.log("Simulation data:", formData);
    setResults({ roi: 30, revenue: 1200 }); // Example result
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 font-sans">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Invoicing ROI Dashboard</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <SimulationForm onSimulate={handleSimulate} />
          <ScenarioList scenarios={scenarios} onSelect={(s) => alert(`Selected: ${s.name}`)} />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ResultsCard results={results} />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setReportOpen(true)}
          >
            Open Report
          </button>
        </div>
      </main>

      <ReportModal open={reportOpen} onClose={() => setReportOpen(false)} report={results} />
    </div>
  );
};

export default App;
