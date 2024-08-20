import React, { useState } from 'react'

export default function DataTable({ data }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage] = useState(10);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);

    const handleRowSelect = (index) => {
        setSelectedRows((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const handleColumnSelect = (index) => {
        setSelectedColumns((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const startIndex = currentPage * rowsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse block md:table">
                <thead>
                    <tr>
                        {data[0].map((_, index) => (
                            <th
                                key={index}
                                onClick={() => handleColumnSelect(index)}
                                className={`cursor-pointer px-4 py-2 border ${selectedColumns.includes(index)
                                    ? 'bg-blue-200'
                                    : 'bg-gray-100'
                                    }`}
                            >
                                {`Column ${index + 1}`}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`${selectedRows.includes(rowIndex)
                                ? 'bg-blue-100'
                                : 'bg-white'
                                }`}
                        >
                            {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`px-4 py-2 border ${selectedColumns.includes(colIndex) ? 'bg-blue-50' : ''
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(rowIndex)}
                                        onChange={() => handleRowSelect(rowIndex)}
                                        className="mr-2"
                                    />
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Previous
                </button>
                <span className='text-white' >{`Page ${currentPage + 1}`}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={startIndex + rowsPerPage >= data.length}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
