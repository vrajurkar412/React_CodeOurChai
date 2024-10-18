import { useCallback, useEffect, useState } from 'react'

function App() {

  const [length, setLength] = useState("8")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copySuccess, setCopySuccess] = useState(false) // for showing modal dialog

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Include numbers if allowed
    if (numberAllowed) str += "0123456789";

    // Include special characters if allowed
    if (charAllowed) str += "!@#$%^&*()-_=+|[]{};:/?.>";

    // Generate the password based on the specified length
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex); // Append the selected character
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // Function to copy password to clipboard
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setCopySuccess(true); // Show modal
        setTimeout(() => setCopySuccess(false), 500); // Auto-hide after 2 seconds
      }, () => {
        alert('Failed to copy!'); // Handle failure case
      });
    }
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-xl rounded-lg px-8 py-10 mt-16 text-orange-500 bg-gradient-to-b from-gray-700 to-gray-900'>
        <h1 className='text-white text-center mb-6 text-4xl font-bold tracking-wide'>Password Generator</h1>

        <div className='flex shadow-lg rounded-lg overflow-hidden mb-6 bg-gray-800'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-3 px-4 text-lg bg-gray-800 text-white rounded-l-md placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out'
            placeholder='Your password will appear here'
            readOnly />
          <button
            className='bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-lg font-semibold rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out'
            onClick={copyToClipboard}>
            Copy
          </button>
        </div>

        <div className='flex flex-col gap-6 text-sm'>
          <div className='flex items-center gap-4'>
            <label className='text-white font-medium text-lg'>Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300'
              onChange={(e) => { setLength(e.target.value) }}
            />
          </div>

          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              className='w-5 h-5 text-blue-600 bg-gray-800 rounded border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all duration-300'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor='numberInput' className='text-white font-medium text-lg'>Include Numbers</label>
          </div>

          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              checked={charAllowed}
              id='characterInput'
              className='w-5 h-5 text-blue-600 bg-gray-800 rounded border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all duration-300'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor='characterInput' className='text-white font-medium text-lg'>Include Special Characters</label>
          </div>
        </div>
      </div>

      {/* copy success */}
      {copySuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-center py-4 px-6 rounded-md shadow-lg">
            <p className="text-green-500 text-xl font-semibold">Password Copied!</p>
          </div>
        </div>
      )}
    </>
  )
}

export default App;
