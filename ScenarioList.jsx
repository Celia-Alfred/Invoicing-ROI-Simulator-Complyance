import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

const ScenarioList = ({ scenarios, onSelect }) => {
  if (!scenarios || scenarios.length === 0) return null;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-xl p-4">
      <h3 className="text-xl font-bold mb-4">Saved Scenarios</h3>
      <List>
        {scenarios.map((scenario, index) => (
          <div key={index}>
            <ListItem button onClick={() => onSelect(scenario)}>
              <ListItemText
                primary={`Invoice $${scenario.invoiceAmount}`}
                secondary={`Automation: ${scenario.automationLevel}, Time: ${scenario.processingTime} days`}
              />
            </ListItem>
            {index < scenarios.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

export default ScenarioList;
