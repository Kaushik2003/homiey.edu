export const abi = [{
	"compiler": {
		"version": "0.8.28+commit.7893614a"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "approved",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "ApprovalForAll",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "string",
						"name": "OCID",
						"type": "string"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "studentWallet",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "string",
						"name": "studentName",
						"type": "string"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"name": "CertificateMinted",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "certificates",
				"outputs": [
					{
						"internalType": "string",
						"name": "OCID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "studentName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "studentWallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "completionDate",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "verified",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "getApproved",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "getCertificate",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					}
				],
				"name": "isApprovedForAll",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_to",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_OCID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_courseName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_studentName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_tokenURI",
						"type": "string"
					}
				],
				"name": "mintCertificate",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "ownerOf",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "revokeCertificate",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "setApprovalForAll",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes4",
						"name": "interfaceId",
						"type": "bytes4"
					}
				],
				"name": "supportsInterface",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "tokenURI",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_student",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_OCID",
						"type": "string"
					}
				],
				"name": "verifyCourseCompletion",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		],
		"devdoc": {
			"events": {
				"Approval(address,address,uint256)": {
					"details": "Emitted when `owner` enables `approved` to manage the `tokenId` token."
				},
				"ApprovalForAll(address,address,bool)": {
					"details": "Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
				},
				"Transfer(address,address,uint256)": {
					"details": "Emitted when `tokenId` token is transferred from `from` to `to`."
				}
			},
			"kind": "dev",
			"methods": {
				"approve(address,uint256)": {
					"details": "See {IERC721-approve}."
				},
				"balanceOf(address)": {
					"details": "See {IERC721-balanceOf}."
				},
				"getApproved(uint256)": {
					"details": "See {IERC721-getApproved}."
				},
				"getCertificate(uint256)": {
					"details": "Gets the certificate details for a specific token ID",
					"params": {
						"_tokenId": "The ID of the certificate to query"
					},
					"returns": {
						"_0": "Certificate details including OCID, course name, student name, etc."
					}
				},
				"isApprovedForAll(address,address)": {
					"details": "See {IERC721-isApprovedForAll}."
				},
				"mintCertificate(address,string,string,string,string)": {
					"details": "Mints a new certificate NFT with course completion details",
					"params": {
						"_OCID": "Open Course ID of the completed course",
						"_courseName": "Name of the completed course",
						"_studentName": "Name of the student",
						"_to": "Address of the student receiving the certificate",
						"_tokenURI": "URI pointing to the certificate metadata"
					},
					"returns": {
						"_0": "New token ID of the minted certificate"
					}
				},
				"name()": {
					"details": "See {IERC721Metadata-name}."
				},
				"owner()": {
					"details": "Returns the address of the current owner."
				},
				"ownerOf(uint256)": {
					"details": "See {IERC721-ownerOf}."
				},
				"renounceOwnership()": {
					"details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
				},
				"revokeCertificate(uint256)": {
					"details": "Revokes a certificate if necessary (e.g., issued in error)",
					"params": {
						"_tokenId": "The ID of the certificate to revoke"
					}
				},
				"safeTransferFrom(address,address,uint256)": {
					"details": "See {IERC721-safeTransferFrom}."
				},
				"safeTransferFrom(address,address,uint256,bytes)": {
					"details": "See {IERC721-safeTransferFrom}."
				},
				"setApprovalForAll(address,bool)": {
					"details": "See {IERC721-setApprovalForAll}."
				},
				"supportsInterface(bytes4)": {
					"details": "See {IERC165-supportsInterface}."
				},
				"symbol()": {
					"details": "See {IERC721Metadata-symbol}."
				},
				"tokenURI(uint256)": {
					"details": "See {IERC721Metadata-tokenURI}."
				},
				"transferFrom(address,address,uint256)": {
					"details": "See {IERC721-transferFrom}."
				},
				"transferOwnership(address)": {
					"details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
				},
				"verifyCourseCompletion(address,string)": {
					"details": "Verifies if a student has completed a specific course",
					"params": {
						"_OCID": "Open Course ID to verify",
						"_student": "Address of the student"
					},
					"returns": {
						"_0": "True if the student has a valid certificate for the course"
					}
				}
			},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"basic.sol": "EduChainCertificate"
		},
		"evmVersion": "cancun",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"@openzeppelin/contracts@4.7.3/access/Ownable.sol": {
			"keccak256": "0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673",
			"license": "MIT",
			"urls": [
				"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2",
				"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y"
			]
		},
		"@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol": {
			"keccak256": "0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e",
			"license": "MIT",
			"urls": [
				"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea",
				"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB"
			]
		},
		"@openzeppelin/contracts@4.7.3/token/ERC721/IERC721.sol": {
			"keccak256": "0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f",
			"license": "MIT",
			"urls": [
				"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f",
				"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x"
			]
		},
		"@openzeppelin/contracts@4.7.3/token/ERC721/IERC721Receiver.sol": {
			"keccak256": "0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da",
			"license": "MIT",
			"urls": [
				"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708",
				"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV"
			]
		},
		"@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721URIStorage.sol": {
			"keccak256": "0x5c3501c1b70fcfc64417e9da5cc6a3597191baa354781e508e1e14cc0e50a038",
			"license": "MIT",
			"urls": [
				"bzz-raw://899c87a849a94c848818d0afede6961d2c87665af1dd23a5c983e78981a65691",
				"dweb:/ipfs/QmUeFDffQRDmX87FX3MRxN3bmpUxDTWpWLwPJzeAJ3yF6H"
			]
		},
		"@openzeppelin/contracts@4.7.3/token/ERC721/extensions/IERC721Metadata.sol": {
			"keccak256": "0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9",
			"license": "MIT",
			"urls": [
				"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146",
				"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf"
			]
		},
		"@openzeppelin/contracts@4.7.3/utils/Address.sol": {
			"keccak256": "0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10",
			"license": "MIT",
			"urls": [
				"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487",
				"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG"
			]
		},
		"@openzeppelin/contracts@4.7.3/utils/Context.sol": {
			"keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
			"license": "MIT",
			"urls": [
				"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
				"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
			]
		},
		"@openzeppelin/contracts@4.7.3/utils/Counters.sol": {
			"keccak256": "0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1",
			"license": "MIT",
			"urls": [
				"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee",
				"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu"
			]
		},
		"@openzeppelin/contracts@4.7.3/utils/Strings.sol": {
			"keccak256": "0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3",
			"license": "MIT",
			"urls": [
				"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638",
				"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9"
			]
		},
		"@openzeppelin/contracts@4.7.3/utils/introspection/ERC165.sol": {
			"keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
			"license": "MIT",
			"urls": [
				"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
				"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
			]
		},
		"@openzeppelin/contracts@4.7.3/utils/introspection/IERC165.sol": {
			"keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
			"license": "MIT",
			"urls": [
				"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
				"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
			]
		},
		"basic.sol": {
			"keccak256": "0xfb3fe60091c85620c4a79bfafc59726914776dc8b7926a6d48c877cb0e9ad20c",
			"license": "MIT",
			"urls": [
				"bzz-raw://36a76c686f2cefe3849a48e30745e98c0656aef50a8c658f4cebd5bbaf9e16e2",
				"dweb:/ipfs/QmWZ8swRF9T34sAc5KpikYuBStJM8YaMXNQx7Xogz59PZE"
			]
		}
	},
	"version": 1
}]