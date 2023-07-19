// import axios from "axios";
// import { useEffect, useState } from "react";

// const Profile = ({ }) => {

//     // const [transactionHash, setTransactionHash] = useState('');
//     // const [showInput, setShowInput] = useState(false);

//     // const getProfileInfo = async () => {}

//     // useEffect(() => {
//     //   getProfileInfo(); 
//     // }, [_currentAccount, _currentSquare, _currentBalance, _currentQuestStatus]);

//     const verifyTxn = async ( _transactionHash ) => {
//       try {
//         const response = await axios.get("http://localhost:8080/confirmTransaction", {
//           params: {
//             transactionHash: _transactionHash
//       },
//       });
      
//       if (response.data) {
//         alert("Verified. You can roll the dice!");
//         await _FoteisonGameContract.QuestStatusToTrue();
//         _setCurrentQuestStatus(true);
//         setShowInput(false);
//         setTransactionHash('');
//       }else{
//         alert("Not verified. You can't roll the dice!");
//       }
//     } catch (e) {
//       alert("Not verified. You can't roll the dice!");
//     }
//   };

//   const handleShowInput = () => {
//     if(showInput === true){
//     setShowInput(false);
//     }else{
//     setShowInput(true);
//     }
//   };

//   const handleInputChange = (e) => {
//     setTransactionHash(e.target.value);
//   };

//   const handleInputSubmit = async () => {
//     await verifyTxn(transactionHash);
//     setShowInput(false);
//   };

//     const gridSize = 50;
//     const centerX = Math.floor(gridSize / 2);
//     const centerY = Math.floor(gridSize / 2);
//     const x = _currentSquare %  gridSize - centerX;
//     const y = Math.floor( _currentSquare / gridSize) - centerY;
  
//     return (
//       <>
//         <div className="profile-name">
//           {_ENS ? _ENS : _currentAccount}
//         </div>
//         <div className="profile-each-informaton">
//           <p>Coordinates: {x}, {y}</p>
//           {/* <p>Quest: {_currentQuestStatus ? "No quest" : "Do quest"}</p> */}
//           {/* <button className="verify-button" onClick={getProfileInfo}>Renew ProfileInfo</button> */}
//           {/* <button className="verify-button" onClick={handleShowInput}>
//             Verify Transaction
//           </button> */}
//           {/* {showInput && (
//             <div>
//               <input type="text" value={transactionHash} onChange={handleInputChange} placeholder="input hash value"/>
//               <button onClick={handleInputSubmit}>verify</button>
//             </div>
//         )} */}

//         </div>
//       </>
//     );
//   };
  
// export default Profile;