import React from 'react';
import './App.css'
import Web3 from 'web3';

const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      console.log(accounts);
    }
    catch (error) {
      console.log(error);
    }
  }
}

function App() {
  return (
    <div className='bg-gray-200 min-h-screen'>
      {/* Header */}
      <header className='bg-gray-800 py-4'>
        <div className='container mx-auto text-center text-white text-2xl font-bold'>
          SneaX
        </div>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
      </header>

      {/* Image scrollbar */}
      <div>
        <img src='src/assets/images/logos/converse.png' className='inline-block w-20 mx-0'/>
        <img src='src/assets/images/logos/diesel.png' className='inline-block w-40 mx-4'/>
        <img src='src/assets/images/logos/reebok.png' className='inline-block w-40 mx-4'/>
        <img src='src/assets/images/logos/vans.jpg' className='inline-block w-40 mx-4'/>
      </div>

      {/* Grid of Sneakers */}
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sneaker 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src="src/assets/images/Reebok-Black.jpg" alt="Sneaker 1" className="w-full h-64 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">Reebook</h2>
          <p className="text-gray-600">Black</p>
          <p className="text-lg font-bold mt-2">PRICE HERE</p>
        </div>

        {/* Sneaker 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src="src/assets/images/diesel-green.jpg" alt="Sneaker 1" className="w-full h-64 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">Diesel</h2>
          <p className="text-gray-600">Black</p>
          <p className="text-lg font-bold mt-2">PRICE HERE</p>
        </div>

        
      </div>
    </div>
  )
}

export default App
