// App.js - React component to interact with EduChain Certificate smart contract
"use client"
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { abi } from '@/abi'; // Using the ABI you provided

function App() {
  // State variables
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [certificates, setCertificates] = useState([]);
  
  // Form state for minting certificates
  const [mintForm, setMintForm] = useState({
    studentAddress: '',
    ocid: '',
    courseName: '',
    studentName: '',
    tokenURI: ''
  });
  
  // Form state for verification
  const [verifyForm, setVerifyForm] = useState({
    studentAddress: '',
    ocid: ''
  });
  
  // Form state for retrieving certificate
  const [getCertForm, setGetCertForm] = useState({
    tokenId: ''
  });
  
  // Certificate details when retrieved
  const [certDetails, setCertDetails] = useState(null);
  
  // Verification result
  const [verificationResult, setVerificationResult] = useState(null);

  // Connect to MetaMask and contract
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        setLoading(true);
        
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        
        // Create ethers provider and connect to contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
        // Replace with your deployed contract address
        const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
        const eduChainContract = new ethers.Contract(contractAddress, abi, signer);
        setContract(eduChainContract);
        
        // Check if connected account is contract owner
        const ownerAddress = await eduChainContract.owner();
        setIsOwner(ownerAddress.toLowerCase() === accounts[0].toLowerCase());
        
        // Load certificates for this user
        loadUserCertificates(accounts[0], eduChainContract);

        setLoading(false);
      } else {
        alert("Please install MetaMask to use this application");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setLoading(false);
    }
  };

  // Load certificates owned by the user
  const loadUserCertificates = async (userAddress, contractInstance) => {
    try {
      setLoading(true);
      const balance = await contractInstance.balanceOf(userAddress);
      const balanceNumber = balance.toNumber();
      
      const certificatesList = [];
      
      for (let i = 0; i < balanceNumber; i++) {
        // Get token ID for owner at index
        const tokenId = await contractInstance.tokenOfOwnerByIndex(userAddress, i);
        
        // Get certificate details
        const certificate = await contractInstance.getCertificate(tokenId);
        
        certificatesList.push({
          tokenId: tokenId.toString(),
          ocid: certificate[0],
          courseName: certificate[1],
          studentName: certificate[2],
          studentWallet: certificate[3],
          completionDate: new Date(certificate[4].toNumber() * 1000).toLocaleDateString(),
          verified: certificate[5]
        });
      }
      
      setCertificates(certificatesList);
      setLoading(false);
    } catch (error) {
      console.error("Error loading certificates:", error);
      setLoading(false);
    }
  };

  // Handle form input changes for minting
  const handleMintFormChange = (e) => {
    const { name, value } = e.target;
    setMintForm({
      ...mintForm,
      [name]: value
    });
  };
  
  // Handle form input changes for verification
  const handleVerifyFormChange = (e) => {
    const { name, value } = e.target;
    setVerifyForm({
      ...verifyForm,
      [name]: value
    });
  };
  
  // Handle form input changes for getting certificate
  const handleGetCertFormChange = (e) => {
    const { name, value } = e.target;
    setGetCertForm({
      ...getCertForm,
      [name]: value
    });
  };

  // Mint a new certificate
  const mintCertificate = async (e) => {
    e.preventDefault();
    
    if (!isOwner) {
      alert("Only the contract owner can mint certificates");
      return;
    }
    
    try {
      setLoading(true);
      
      const tx = await contract.mintCertificate(
        mintForm.studentAddress,
        mintForm.ocid,
        mintForm.courseName,
        mintForm.studentName,
        mintForm.tokenURI
      );
      
      await tx.wait();
      
      alert("Certificate minted successfully!");
      
      // Clear form
      setMintForm({
        studentAddress: '',
        ocid: '',
        courseName: '',
        studentName: '',
        tokenURI: ''
      });
      
      // Reload certificates
      loadUserCertificates(account, contract);
      
      setLoading(false);
    } catch (error) {
      console.error("Error minting certificate:", error);
      alert("Error minting certificate. See console for details.");
      setLoading(false);
    }
  };

  // Verify course completion
  const verifyCourseCompletion = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      const result = await contract.verifyCourseCompletion(
        verifyForm.studentAddress,
        verifyForm.ocid
      );
      
      setVerificationResult(result);
      setLoading(false);
    } catch (error) {
      console.error("Error verifying course completion:", error);
      setVerificationResult(false);
      setLoading(false);
    }
  };

  // Get certificate details
  const getCertificate = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      const certificate = await contract.getCertificate(getCertForm.tokenId);
      
      setCertDetails({
        ocid: certificate[0],
        courseName: certificate[1],
        studentName: certificate[2],
        studentWallet: certificate[3],
        completionDate: new Date(certificate[4].toNumber() * 1000).toLocaleDateString(),
        verified: certificate[5]
      });
      
      setLoading(false);
    } catch (error) {
      console.error("Error getting certificate:", error);
      setCertDetails(null);
      alert("Error getting certificate. Check if the token ID exists.");
      setLoading(false);
    }
  };

  // Revoke a certificate (owner only)
  const revokeCertificate = async (tokenId) => {
    if (!isOwner) {
      alert("Only the contract owner can revoke certificates");
      return;
    }
    
    try {
      setLoading(true);
      
      const tx = await contract.revokeCertificate(tokenId);
      await tx.wait();
      
      alert("Certificate revoked successfully!");
      
      // Reload certificates
      loadUserCertificates(account, contract);
      
      setLoading(false);
    } catch (error) {
      console.error("Error revoking certificate:", error);
      alert("Error revoking certificate. See console for details.");
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>EduChain Certificate Platform</h1>
        {!account ? (
          <button onClick={connectWallet} disabled={loading}>
            {loading ? "Connecting..." : "Connect Wallet"}
          </button>
        ) : (
          <div className="account-info">
            <p>Connected: {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</p>
            <p>{isOwner ? "Admin Access" : "Student Access"}</p>
          </div>
        )}
      </header>

      {account && (
        <main>
          <section className="certificates-section">
            <h2>Your Certificates</h2>
            {loading ? (
              <p>Loading certificates...</p>
            ) : certificates.length > 0 ? (
              <div className="certificates-grid">
                {certificates.map((cert) => (
                  <div key={cert.tokenId} className="certificate-card">
                    <h3>{cert.courseName}</h3>
                    <p><strong>OCID:</strong> {cert.ocid}</p>
                    <p><strong>Student:</strong> {cert.studentName}</p>
                    <p><strong>Completed:</strong> {cert.completionDate}</p>
                    <p><strong>Status:</strong> {cert.verified ? "Verified" : "Revoked"}</p>
                    {isOwner && (
                      <button 
                        onClick={() => revokeCertificate(cert.tokenId)}
                        className="revoke-button"
                        disabled={!cert.verified}
                      >
                        Revoke Certificate
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>No certificates found for this address.</p>
            )}
          </section>

          {isOwner && (
            <section className="admin-section">
              <h2>Admin Functions</h2>
              
              <div className="form-container">
                <h3>Mint New Certificate</h3>
                <form onSubmit={mintCertificate}>
                  <div className="form-group">
                    <label>Student Address:</label>
                    <input
                      type="text"
                      name="studentAddress"
                      value={mintForm.studentAddress}
                      onChange={handleMintFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Open Course ID (OCID):</label>
                    <input
                      type="text"
                      name="ocid"
                      value={mintForm.ocid}
                      onChange={handleMintFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Course Name:</label>
                    <input
                      type="text"
                      name="courseName"
                      value={mintForm.courseName}
                      onChange={handleMintFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Student Name:</label>
                    <input
                      type="text"
                      name="studentName"
                      value={mintForm.studentName}
                      onChange={handleMintFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Token URI (Metadata URL):</label>
                    <input
                      type="text"
                      name="tokenURI"
                      value={mintForm.tokenURI}
                      onChange={handleMintFormChange}
                      required
                    />
                  </div>
                  
                  <button type="submit" disabled={loading}>
                    {loading ? "Processing..." : "Mint Certificate"}
                  </button>
                </form>
              </div>
            </section>
          )}

          <section className="verification-section">
            <h2>Verify Course Completion</h2>
            
            <div className="form-container">
              <form onSubmit={verifyCourseCompletion}>
                <div className="form-group">
                  <label>Student Address:</label>
                  <input
                    type="text"
                    name="studentAddress"
                    value={verifyForm.studentAddress}
                    onChange={handleVerifyFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Open Course ID (OCID):</label>
                  <input
                    type="text"
                    name="ocid"
                    value={verifyForm.ocid}
                    onChange={handleVerifyFormChange}
                    required
                  />
                </div>
                
                <button type="submit" disabled={loading}>
                  {loading ? "Verifying..." : "Verify Completion"}
                </button>
              </form>
              
              {verificationResult !== null && (
                <div className={`verification-result ${verificationResult ? "success" : "failure"}`}>
                  {verificationResult 
                    ? "Verification successful! This student has completed the course." 
                    : "Verification failed. No valid certificate found for this student and course."}
                </div>
              )}
            </div>
          </section>

          <section className="get-certificate-section">
            <h2>Get Certificate Details</h2>
            
            <div className="form-container">
              <form onSubmit={getCertificate}>
                <div className="form-group">
                  <label>Token ID:</label>
                  <input
                    type="text"
                    name="tokenId"
                    value={getCertForm.tokenId}
                    onChange={handleGetCertFormChange}
                    required
                  />
                </div>
                
                <button type="submit" disabled={loading}>
                  {loading ? "Retrieving..." : "Get Certificate"}
                </button>
              </form>
              
              {certDetails && (
                <div className="certificate-details">
                  <h3>Certificate Details</h3>
                  <p><strong>OCID:</strong> {certDetails.ocid}</p>
                  <p><strong>Course Name:</strong> {certDetails.courseName}</p>
                  <p><strong>Student Name:</strong> {certDetails.studentName}</p>
                  <p><strong>Student Wallet:</strong> {certDetails.studentWallet}</p>
                  <p><strong>Completion Date:</strong> {certDetails.completionDate}</p>
                  <p><strong>Status:</strong> {certDetails.verified ? "Verified" : "Revoked"}</p>
                </div>
              )}
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;