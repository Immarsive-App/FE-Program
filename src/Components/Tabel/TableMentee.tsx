import React, { FC } from 'react'

import DetailButton from '../new/DetailButton'
import DeleteButton from '../new/DeleteButton'
import EditButton from '../new/EditButton'

interface TableMenteeProps {
    id: number,
    full_name: string,
    kelas: string,
    status: string,
    education_type: string,
    gender: string,
    onClick: React.MouseEventHandler
    onClick2: React.MouseEventHandler
    onClick3: React.MouseEventHandler
};

const TableMentee: FC<TableMenteeProps> = ({ id, full_name, kelas, status, education_type, gender, onClick, onClick2, onClick3 }) => {
    return (
        <>
            <tr>
                <td className="p-2 border text-left">{id}</td>
                <td className="p-2 border text-left">{full_name}</td>
                <td className="p-2 border text-center">{kelas}</td>
                <td className="p-2 border text-center">{status}</td>
                <td className="p-2 border text-center">{education_type}</td>
                <td className="p-2 border text-center">{gender}</td>

                <td className="p-2 border text-center justify-item-center">
                    <DetailButton
                        id='detail'
                        label='Detail'
                        onClick={onClick}
                    />
                </td>
                <td className="p-2 border flex justify-center">
                    {/* <button className="flex items-center gap-3 px-3 py-1 mx-4 bg-yellow-300 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none mx-1">
                        <Edit />Edit
                    </button> */}
                    <EditButton
                    id='edit'
                    label='Edit'
                    onClick3={onClick3}
                    />
                    <DeleteButton
                        id='delete'
                        label='Delete'
                        onClick2={onClick2}
                    />
                </td>
            </tr>
        </>
    )
}

export default TableMentee