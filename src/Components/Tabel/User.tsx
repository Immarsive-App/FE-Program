import React from 'react';
import { Edit2, Trash2 } from 'react-feather'

const User = () => {
  return (
    <div className="max-w-full p-4 bg-white border border-gray-200 m-4 rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">Header 1</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">Header 2</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">Header 3</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">Header 4</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">Header 5</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">Header 6</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">Header 7</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">Header 8</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border">Data 1,1</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Data 1,2</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Data 1,3</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Data 1,4</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Data 1,5</td>
            <td className="px-6 py-4 whitespace-no-wrap border">Data 1,6</td>
            <td className="px-6 py-4 whitespace-no-wrap border">
              <button className='flex items-center'>
                <Edit2 size={25} />
              </button>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border">
              <button className='flex items-center'>
                <Trash2 size={25} />
              </button>
            </td>
          </tr>
          {/* Tambahkan baris lainnya sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default User;