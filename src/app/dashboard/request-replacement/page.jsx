import React from 'react';

const SimpleTable = () => {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border-t-2 border-b-2 border-gray-300">
            <th className="px-4 py-2 text-center">REQUEST ID</th>
            <th className="px-4 py-2 text-center">ORDER ID</th>
            <th className="px-4 py-2 text-center">TYPE</th>
            <th className="px-4 py-2 text-center">ITEMS</th>
            <th className="px-4 py-2 text-center">STATUS</th>
            <th className="px-4 py-2 text-center">CREATED DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-t border-b border-gray-300 px-4 py-2 text-center">123</td>
            <td className="border-t border-b border-gray-300 px-4 py-2 text-center">456</td>
            <td className="border-t border-b border-gray-300 px-4 py-2 text-center">Replacement</td>
            <td className="border-t border-b border-gray-300 px-4 py-2 text-center">2</td>
            <td className="border-t border-b border-gray-300 px-4 py-2 text-center">Pending</td>
            <td className="border-t border-b border-gray-300 px-4 py-2 text-center">2023-08-14</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">124</td>
            <td className="px-4 py-2 text-center">457</td>
            <td className="px-4 py-2 text-center">Return</td>
            <td className="px-4 py-2 text-center">3</td>
            <td className="px-4 py-2 text-center">Approved</td>
            <td className="px-4 py-2 text-center">2023-08-15</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
