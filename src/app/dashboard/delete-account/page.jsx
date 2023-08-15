import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col form mb-5">
        <h1>"Enter password to confirm"</h1>
    <input
      type="password"

      className="w-full border border-gray-300 px-4 py-2 h-10 input"
    />
    <button
      className="btn hover:bg-indigo-900 text-white px-2 py-2 h-10 w-48 text-xs font-bold uppercase btn"
    >
      Confirm
    </button>
  </div>
  )
}

export default page