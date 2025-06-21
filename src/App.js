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
  }
];

function App() {
  const [projects, setProjects] = useState([allProjects[0]]); // user's claimed projects
  const [availableProjects, setAvailableProjects] = useState([allProjects[1]]); // unclaimed
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
