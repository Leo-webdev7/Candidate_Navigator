import { useState, useEffect } from "react";
import { Candidate } from '../interfaces/Candidate.interface'

/* const SavedCandidates = () => {

  return (
    <>
      <h1>Potential Candidates</h1>  
    </>
  );
}; */

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

 /* return (
  <div>
    <h1>Saved Candidates</h1>
    {savedCandidates.length === 0 ? (
      <p>No candidates have been accepted</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Profile</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td><img src={candidate.avatar_url || 'N/A'} alt={'avatar'} width="100" height="100" /></td>
              <td>{candidate.name || candidate.login}</td>
              <td>{candidate.login}</td>
              <td>{candidate.location || 'N/A'}</td>
              <td>{candidate.email || 'N/A'}</td>
              <td>{candidate.company || 'N/A'}</td>
              <td><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></td>
              <td><button>Reject</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
); */

const handleAccept = (id: any) => {
    // Your logic to handle accepting a candidate
    console.log('Accepted candidate with id:', id);
    // Update the state or call a function to update the status of the candidate
  };

  const handleReject = (id: any) => {
    // Your logic to handle rejecting a candidate
    console.log('Rejected candidate with id:', id);
    // Update the state or call a function to update the status of the candidate
  };


return (
  <div>
    <h1>Saved Candidates</h1>
    {savedCandidates.length === 0 ? (
      <p>No candidates have been accepted</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Profile</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td><img src={candidate.avatar_url || 'N/A'} alt={'avatar'} width="100" height="100" /></td>
              <td>{candidate.name || candidate.login}</td>
              <td>{candidate.login}</td>
              <td>{candidate.location || 'N/A'}</td>
              <td>{candidate.email || 'N/A'}</td>
              <td>{candidate.company || 'N/A'}</td>
              <td><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></td>
              <td>
                {candidate.status === 'accepted' ? (
                  <span style={{ color: 'green' }}>✔️</span>
                ) : (
                  <button onClick={() => handleAccept(candidate.id)}>Accept</button>
                )}
              </td>
              <td>
                {candidate.status === 'rejected' ? (
                  <span style={{ color: 'red' }}>❌</span>
                ) : (
                  <button onClick={() => handleReject(candidate.id)}>Reject</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

};

export default SavedCandidates;



