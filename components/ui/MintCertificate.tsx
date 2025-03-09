import React, { useState } from 'react';
import { ethers } from 'ethers';

const CertificateMintingForm = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    ocid: '',
    courseName: '',
    studentName: '',
    tokenURI: ''
  });
  const [status, setStatus] = useState({ loading: false, message: '', error: false });

  // Update form data when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Placeholder function for uploading to Pinata (replace with your actual implementation)
  const uploadToPinata = async (metadata) => {
      // Simulate uploading metadata to Pinata
      // In a real application, you'd use the Pinata SDK or an API call here
      console.log("Simulating upload to Pinata with metadata:", metadata);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request

      const dummyIpfsHash = 'QmWATGH6vAZSbY64j94rz6Ky2vGF33aCz8h5g5y9S9qvLN';  // Example IPFS hash
      return {
          data: {
              IpfsHash: dummyIpfsHash
          }
      };
  };

  // Function to connect to the contract and mint the certificate
  const mintCertificate = async () => {
    try {
      setStatus({ loading: true, message: 'Connecting to wallet...', error: false });
      
      // Check if MetaMask is installed
      if (!window.ethereum) {
        throw new Error('MetaMask is not installed. Please install it to use this feature.');
      }

      // Request account access from MetaMask
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Create a provider - use a more direct approach to avoid ENS lookups
      // First create a JsonRpcProvider directly without ENS support
      const provider = new ethers.JsonRpcProvider(window.ethereum, {
        chainId: 656476,
        name: 'Arbitrum Sepolia'
      });
      
      // Get the signer in a way that avoids automatic ENS resolution
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const address = accounts[0];
      
      if (!address) {
        throw new Error('No account connected. Please connect your wallet.');
      }
      
      // Use provider's getSigner
      const signer = provider.getSigner(address);
      
      setStatus({ loading: true, message: 'Preparing transaction...', error: false });
      
      // Replace with your actual contract address
      const contractAddress = '0xYourContractAddressHere';
      const contractABI = [
        {
          "inputs": [
            { "internalType": "address", "name": "_to", "type": "address" },
            { "internalType": "string", "name": "_OCID", "type": "string" },
            { "internalType": "string", "name": "_courseName", "type": "string" },
            { "internalType": "string", "name": "_studentName", "type": "string" },
            { "internalType": "string", "name": "_tokenURI", "type": "string" }
          ],
          "name": "mintCertificate",
          "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" },
            { "indexed": false, "internalType": "string", "name": "OCID", "type": "string" },
            { "indexed": true, "internalType": "address", "name": "studentWallet", "type": "address" },
            { "indexed": false, "internalType": "string", "name": "studentName", "type": "string" },
            { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
          ],
          "name": "CertificateMinted",
          "type": "event"
        }
      ];
      
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // UPLOAD METADATA TO PINATA AND GET THE IPFS HASH
      setStatus({ loading: true, message: 'Uploading metadata to Pinata...', error: false });
      const metadata = {
          recipient: formData.recipient,
          ocid: formData.ocid,
          courseName: formData.courseName,
          studentName: formData.studentName
      };

      const pinataResponse = await uploadToPinata(metadata); // Call your Pinata upload function

      if (!pinataResponse || !pinataResponse.data || !pinataResponse.data.IpfsHash) {
          throw new Error('Failed to upload metadata to Pinata.');
      }

      const ipfsHash = pinataResponse.data.IpfsHash;
      const tokenURI = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;

      // Update the form data with the tokenURI
      setFormData(prev => ({ ...prev, tokenURI: tokenURI }));
      
      // Call the mintCertificate function on your contract
      setStatus({ loading: true, message: 'Minting certificate...', error: false });
      const tx = await contract.mintCertificate(
        formData.recipient,
        formData.ocid,
        formData.courseName,
        formData.studentName,
        tokenURI // Use the updated tokenURI
      );
      
      setStatus({ loading: true, message: 'Waiting for transaction confirmation...', error: false });
      const receipt = await tx.wait();
      
      // Attempt to extract the token ID from logs
      let tokenId;
      if (receipt.logs) {
        for (const log of receipt.logs) {
          try {
            // Parse the log with contract interface
            const parsedLog = contract.interface.parseLog({
              topics: log.topics,
              data: log.data
            });
            
            if (parsedLog && parsedLog.name === 'CertificateMinted') {
              tokenId = parsedLog.args[0].toString();
              break;
            }
          } catch (e) {
            // Skip logs that can't be parsed
            continue;
          }
        }
      }
      
      setStatus({ 
        loading: false, 
        message: `Certificate minted successfully! ${tokenId ? `Token ID: ${tokenId}` : ''}`, 
        error: false 
      });
      
      // Reset the form after successful minting, EXCEPT for tokenURI
      setFormData(prev => ({
        recipient: '',
        ocid: '',
        courseName: '',
        studentName: '',
        tokenURI: prev.tokenURI // Keep the tokenURI in the form after minting
      }));
      
    } catch (error) {
      console.error('Error minting certificate:', error);
      setStatus({ 
        loading: false, 
        message: `Error: ${error.message || 'Something went wrong'}`, 
        error: true 
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mintCertificate();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Mint Certificate NFT</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipient Address
          </label>
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            placeholder="0x..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Certificate ID (OCID)
          </label>
          <input
            type="text"
            name="ocid"
            value={formData.ocid}
            onChange={handleChange}
            placeholder="CERT-2023-001"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Name
          </label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="Blockchain Development 101"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Name
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Token URI (Metadata URL)
          </label>
          <input
            type="text"
            name="tokenURI"
            value={formData.tokenURI}
            onChange={handleChange}
            placeholder="https://example.com/metadata/cert123.json"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
            disabled={status.loading}
          >
            {status.loading ? 'Processing...' : 'Mint Certificate'}
          </button>
        </div>
      </form>
      
      {status.message && (
        <div className={`mt-4 p-3 rounded-md ${status.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {status.message}
        </div>
      )}
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Note: You must be the contract owner to mint certificates.</p>
        <p>
          Network Details: ChainID: 656476, Settlement Layer: Arbitrum Sepolia 421614.
          RPC: <a href="https://rpc.open-campus-codex.gelato.digital" target="_blank" rel="noopener noreferrer" className="underline">https://rpc.open-campus-codex.gelato.digital</a>
        </p>
        <p>
          Explorer: <a href="https://opencampus-codex.blockscout.com/" target="_blank" rel="noopener noreferrer" className="underline">https://opencampus-codex.blockscout.com/</a>
        </p>
      </div>
    </div>
  );
};

export default CertificateMintingForm;
