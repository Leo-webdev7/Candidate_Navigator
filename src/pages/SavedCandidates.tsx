import React from 'react';
import { useState, useEffect } from "react";
import { Candidate } from '../interfaces/Candidate.interface'

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates]: any = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);


const handleAccept = (id: string) => {
    const updatedCandidates = savedCandidates.map((candidate: Candidate) => {
      if (candidate.id === id) {
        return { ...candidate, status: 'accepted' };
      }
      return candidate;
    });
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  const handleReject = (id: string) => {
    const updatedCandidates = savedCandidates.map((candidate: Candidate) => {
      if (candidate.id === id) {
        return { ...candidate, status: 'rejected' };
      }
      return candidate;
    });
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
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
          {savedCandidates.map((candidate: Candidate) => (
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
                  <span className="status" style={{ color: 'red' }}>❌</span>
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








