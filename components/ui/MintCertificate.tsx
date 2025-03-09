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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const mintCertificate = async () => {
    try {
      setStatus({ loading: true, message: 'Connecting to wallet...', error: false });

      if (!window.ethereum) {
        throw new Error('MetaMask is not installed. Please install it to use this feature.');
      }

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.JsonRpcProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const address = accounts[0];

      if (!address) throw new Error('No account connected. Please connect your wallet.');
      
      const signer = provider.getSigner(address);
      setStatus({ loading: true, message: 'Preparing transaction...', error: false });

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
        }
      ];

      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      setStatus({ loading: true, message: 'Minting certificate...', error: false });

      const tx = await contract.mintCertificate(
        formData.recipient,
        formData.ocid,
        formData.courseName,
        formData.studentName,
        formData.tokenURI
      );

      setStatus({ loading: true, message: 'Waiting for transaction confirmation...', error: false });
      await tx.wait();

      setStatus({ loading: false, message: `Certificate minted successfully!`, error: false });
      setFormData({ recipient: '', ocid: '', courseName: '', studentName: '', tokenURI: '' });

    } catch (error) {
      console.error('Error minting certificate:', error);
      setStatus({ loading: false, message: `Error: ${error.message}`, error: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mintCertificate();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#121212] text-[#e0e0e0] rounded-lg shadow-lg border border-[#222]">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#BB86FC]">Mint Certificate NFT</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {["recipient", "ocid", "courseName", "studentName", "tokenURI"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-[#BB86FC] mb-1 capitalize">
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className="w-full p-2 border border-[#333] bg-[#1e1e1e] text-white rounded-md focus:ring-2 focus:ring-[#BB86FC] focus:border-[#BB86FC] transition duration-200"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-[#6200ea] hover:bg-[#3700b3] text-white font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-50"
          disabled={status.loading}
        >
          {status.loading ? 'Processing...' : 'Mint Certificate'}
        </button>
      </form>
      
      {status.message && (
        <div className={`mt-4 p-3 rounded-md ${status.error ? 'bg-[#B00020] text-white' : 'bg-[#03DAC6] text-black'}`}>
          {status.message}
        </div>
      )}

      <div className="mt-4 text-sm text-[#a8a8a8]">
        <p>Note: You must be the contract owner to mint certificates.</p>
        <p>
          Network Details: ChainID: 656476, Arbitrum Sepolia 421614.  
          RPC: <a href="https://rpc.open-campus-codex.gelato.digital" target="_blank" rel="noopener noreferrer" className="underline text-[#BB86FC]">https://rpc.open-campus-codex.gelato.digital</a>
        </p>
        <p>
          Explorer: <a href="https://opencampus-codex.blockscout.com/" target="_blank" rel="noopener noreferrer" className="underline text-[#BB86FC]">https://opencampus-codex.blockscout.com/</a>
        </p>
      </div>
    </div>
  );
};

export default CertificateMintingForm;
