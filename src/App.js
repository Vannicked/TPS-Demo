import React, { useState } from 'react';
import './App.css';

const allProjects = [
  {
    id: 1,
    name: 'Install Solar Panel',
    dueDate: '2025-06-30',
    location: 'Rooftop - Building A',
    procedure: {
      title: 'Solar Panel Setup',
      steps: [
        { id: 1, text: 'Inspect roof', completed: false, info: 'Check for damage or debris before starting installation.' },
        { id: 2, text: 'Install mounting brackets', completed: false, info: 'Secure brackets tightly to withstand weather.' },
        { id: 3, text: 'Connect wiring', completed: false, info: 'Follow electrical codes and safety procedures.' },
        { id: 4, text: 'Place solar panels', completed: false, info: 'Align panels properly for max sun exposure.' },
        { id: 5, text: 'Test output', completed: false, info: 'Use a multimeter to verify power output.' }
      ]
    }
  },
  {
    id: 2,
    name: 'Battery Installation',
    dueDate: '2025-07-10',
    location: 'Basement B',
    procedure: {
      title: 'Battery System Prep',
      steps: [
        { id: 1, text: 'Prepare site', completed: false, info: 'Clear and clean installation space.' },
        { id: 2, text: 'Mount inverter', completed: false, info: 'Drill and install inverter mount.' },
        { id: 3, text: 'Connect battery bank', completed: false, info: 'Wire and configure battery units.' },
        { id: 4, text: 'Safety check', completed: false, info: 'Verify electrical safety and system grounding.' }
      ]
    }
  },

  {
    id: 3,
    name: 'HVAC Commissioning',
    dueDate: '2025-07-20',
    location: 'Building C – Utility Room',
    procedure: {
      title: 'HVAC Start-Up and Commissioning',
      steps: [
        { id: 1, text: 'Verify equipment model and serial number', completed: false, info: 'Cross-check installed unit with project specs.' },
        { id: 2, text: 'Inspect ductwork connections', completed: false, info: 'Ensure sealed and insulated per design.' },
        { id: 3, text: 'Power on unit', completed: false, info: 'Check voltage and current draw.' },
        { id: 4, text: 'Test temperature differential', completed: false, info: 'Measure inlet vs outlet temperature (cooling/heating).' },
        { id: 5, text: 'Submit commissioning report', completed: false, info: 'Attach test results and observations.' }
      ]
    }
  },

  {
    id: 4,
    name: 'Backup Generator Installation',
    dueDate: '2025-07-28',
    location: 'Outdoor Compound – North Yard',
    procedure: {
      title: 'Backup Generator Setup',
      steps: [
        { id: 1, text: 'Prepare concrete base', completed: false, info: 'Ensure level platform for generator mount.' },
        { id: 2, text: 'Position generator', completed: false, info: 'Use crane or lift to place accurately.' },
        { id: 3, text: 'Connect fuel line', completed: false, info: 'Check for leaks, pressure test if needed.' },
        { id: 4, text: 'Wire to transfer switch', completed: false, info: 'Follow NEC code guidelines.' },
        { id: 5, text: 'Test run generator', completed: false, info: 'Observe load response and sound levels.' }
      ]
    }
  },

  {
    id: 5,
    name: 'Lighting System QA',
    dueDate: '2025-08-05',
    location: 'Office Floor – Level 2',
    procedure: {
      title: 'Final Lighting Installation QA',
      steps: [
        { id: 1, text: 'Check fixture alignment', completed: false, info: 'Ensure all lights are centered and level.' },
        { id: 2, text: 'Verify bulb type and wattage', completed: false, info: 'Match spec sheet requirements.' },
        { id: 3, text: 'Check switch functionality', completed: false, info: 'All zones must operate correctly.' },
        { id: 4, text: 'Inspect dimming capability', completed: false, info: 'Dimmers should operate smoothly.' },
        { id: 5, text: 'Capture before/after photos', completed: false, info: 'Document installation status for approval.' }
      ]
    }
  },

  {
    id: 6,
    name: 'Overhead Power Line Installation',
    dueDate: '2025-08-10',
    location: 'Zone 4 – Utility Corridor',
    procedure: {
      title: 'Power Line Setup',
      steps: [
        { id: 1, text: 'Mark utility poles location', completed: false, info: 'Ensure pole spacing aligns with local code.' },
        { id: 2, text: 'Install utility poles', completed: false, info: 'Use crane to plant poles securely with concrete.' },
        { id: 3, text: 'String conductors', completed: false, info: 'Install wire with sag tension and clearance specs.' },
        { id: 4, text: 'Install insulators and crossarms', completed: false, info: 'Mount securely to prevent arcing or failure.' },
        { id: 5, text: 'Grounding and lightning protection', completed: false, info: 'Attach grounding rods and surge protectors.' },
        { id: 6, text: 'Perform high-voltage safety test', completed: false, info: 'Verify insulation resistance and continuity.' }
      ]
    }
  },

  {
    id: 7,
    name: 'Smart Meter Deployment',
    dueDate: '2025-08-15',
    location: 'Residential Block – Area 5',
    procedure: {
      title: 'Smart Meter Installation',
      steps: [
        { id: 1, text: 'Deactivate existing meter', completed: false, info: 'Notify customer and shut down safely.' },
        { id: 2, text: 'Remove old meter', completed: false, info: 'Inspect panel and remove device safely.' },
        { id: 3, text: 'Install new smart meter', completed: false, info: 'Mount according to utility standards.' },
        { id: 4, text: 'Connect to data network', completed: false, info: 'Ensure meter syncs with grid system.' },
        { id: 5, text: 'Test data transmission', completed: false, info: 'Confirm usage data uploads successfully.' }
      ]
    }
  },

  {
    id: 8,
    name: 'Electrical Panel Upgrade',
    dueDate: '2025-08-20',
    location: 'Building B – Main Room',
    procedure: {
      title: 'Panel Swap & Load Testing',
      steps: [
        { id: 1, text: 'Turn off main breaker', completed: false, info: 'Ensure full de-energization before panel access.' },
        { id: 2, text: 'Label all circuits', completed: false, info: 'Mark each line clearly before disconnecting.' },
        { id: 3, text: 'Remove old panel', completed: false, info: 'Unscrew and carefully disconnect wiring.' },
        { id: 4, text: 'Install new panel', completed: false, info: 'Securely fit and bolt down.' },
        { id: 5, text: 'Reconnect circuits & test load', completed: false, info: 'Ensure proper voltage and breaker response.' }
      ]
    }
  },

  {
    id: 9,
    name: 'Transformer Inspection',
    dueDate: '2025-08-25',
    location: 'Substation Delta',
    procedure: {
      title: 'Mid-Year Transformer Check',
      steps: [
        { id: 1, text: 'Check oil levels', completed: false, info: 'Inspect and top off dielectric fluid if needed.' },
        { id: 2, text: 'Inspect bushings', completed: false, info: 'Look for cracks or signs of discharge.' },
        { id: 3, text: 'Test winding resistance', completed: false, info: 'Verify balance and temperature rise.' },
        { id: 4, text: 'Clean air intake filters', completed: false, info: 'Remove dust buildup from fans or vents.' },
        { id: 5, text: 'Log performance readings', completed: false, info: 'Document voltage, current, and temperature.' }
      ]
    }
  },


];


function App() {
  const [projects, setProjects] = useState([allProjects[0]]); // Claimed projects (you can set any number)
  const [availableProjects, setAvailableProjects] = useState(allProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openInfoStepId, setOpenInfoStepId] = useState(null);
  const [showAddProjects, setShowAddProjects] = useState(false); // toggles add view

  const handleToggleStep = (stepId) => {
    const updatedProject = {
      ...selectedProject,
      procedure: {
        ...selectedProject.procedure,
        steps: selectedProject.procedure.steps.map(step =>
          step.id === stepId ? { ...step, completed: !step.completed } : step
        )
      }
    };
    setSelectedProject(updatedProject);
  };

  const toggleInfo = (stepId) => {
    setOpenInfoStepId(openInfoStepId === stepId ? null : stepId);
  };

  const handleSubmit = () => {
    alert('Procedure completed and submitted!');
    setSelectedProject(null);
    setOpenInfoStepId(null);
  };

  const handleRemoveProject = (projectId) => {
    const removedProject = projects.find(p => p.id === projectId);
    if (removedProject) {
      setProjects(projects.filter(p => p.id !== projectId));
      setAvailableProjects([...availableProjects, removedProject]);
    }
  };
  

  const allStepsComplete = selectedProject?.procedure.steps.every(step => step.completed);

  const addProjectToList = (projectId) => {
    const projectToAdd = availableProjects.find(p => p.id === projectId);
    if (projectToAdd) {
      setProjects([...projects, projectToAdd]);
      setAvailableProjects(availableProjects.filter(p => p.id !== projectId));
    }
  };

  return (
    <div className="App">
      <h1>Project Manager</h1>

      {!selectedProject && !showAddProjects && (
        <>
          <button className="fab-add" onClick={() => setShowAddProjects(true)}>
  Add Projects
</button>
          <ul>
          {projects.map(project => (
            <li key={project.id}>
              <div className="step-row">
                <div
                  style={{ cursor: 'pointer', flexGrow: 1 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <strong>{project.name}</strong> – Due: {project.dueDate}
                </div>
                <button
                className="info-btn remove-btn"
                onClick={() => handleRemoveProject(project.id)}
              >
                Remove
                </button>
              </div>
            </li>
          ))}          
          </ul>
        </>
      )}

      {showAddProjects && !selectedProject && (
        <>
          <h2>Available Projects</h2>
          <ul>
            {availableProjects.length === 0 && <p>No available projects.</p>}
            {availableProjects.map(project => (
              <li key={project.id}>
                <strong>{project.name}</strong> – Due: {project.dueDate}
                <br />
                <button
                  onClick={() => addProjectToList(project.id)}
                  style={{ marginTop: '0.5rem' }}
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowAddProjects(false)}>Back</button>
        </>
      )}

      {selectedProject && (
        <div>
          <h2>{selectedProject.name}</h2>
          <p><strong>Due:</strong> {selectedProject.dueDate}</p>
          <p><strong>Location:</strong> {selectedProject.location}</p>
          <h3>{selectedProject.procedure.title}</h3>
          <ul>
            {selectedProject.procedure.steps.map(step => (
              <li
                key={step.id}
                className={
                  new Date(selectedProject.dueDate) < new Date() && !step.completed
                    ? 'overdue'
                    : ''
                }
              >
                <div className="step-row">
                  <label className="step-text">
                    <input
                      type="checkbox"
                      checked={step.completed}
                      onChange={() => handleToggleStep(step.id)}
                    />
                    <span>{' '}{step.text}</span>
                  </label>
                  <button
                    className="info-btn"
                    onClick={() => toggleInfo(step.id)}
                  >
                    Info
                  </button>
                </div>
                {openInfoStepId === step.id && (
                  <div className="info-box">
                    {step.info}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button disabled={!allStepsComplete} onClick={handleSubmit}>
            Submit
          </button>
          <br /><br />
          <button onClick={() => {
            setSelectedProject(null);
            setOpenInfoStepId(null);
          }}>
            Back to Projects
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
