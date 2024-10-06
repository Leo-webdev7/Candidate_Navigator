import React, { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';


const CandidateSearch: React.FC = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);
  const [noMoreCandidates, setNoMoreCandidates] = useState(false);

  useEffect(() => {
    loadCandidate();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    } 
  }, []);

  

  const loadCandidate = async () => {
    setLoading(true);
    const users = await searchGithub();
    if (users.length === 0) {
      setNoMoreCandidates(true);
    } else {
      const user = users[0]; // Get the first user
      const candidateDetails: Candidate = await searchGithubUser(user.login);
      setCurrentCandidate(candidateDetails);
    }
    setLoading(false);
  };

 const handleSaveCandidate = () => {
    if (currentCandidate) {
      const updatedSavedCandidates = [...savedCandidates, currentCandidate];
      setSavedCandidates(updatedSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
    }
    loadCandidate();
  };

  const handleSkipCandidate = () => {
    loadCandidate();
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading ? (
        <p>Loading...</p>
      ) : noMoreCandidates ? (
        <p>No more candidates available</p>
      ) : currentCandidate ? (
        <div>
          <img src={currentCandidate.avatar_url} alt={`avatar`} width="100" height="100" />
          <h2>{currentCandidate.name || currentCandidate.login}</h2>
          <p>Username: {currentCandidate.login}</p>
          <p>Location: {currentCandidate.location || 'N/A'}</p>
          <p>Email: {currentCandidate.email || 'N/A'}</p>
          <p>Company: {currentCandidate.company || 'N/A'}</p>
          <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
          <div>
            <button onClick={handleSaveCandidate}>+</button>
            <button onClick={handleSkipCandidate}>-</button>
          </div>
        </div>
      ) : (
        <p>No candidate to display</p>
      )}
    </div>
  );
};




export default CandidateSearch;
