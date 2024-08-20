import React, { useState } from 'react'
const api = import.meta.env.VITE_API_URL;

export default function FileUpload({ onFileUpload }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${api}/api/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        onFileUpload(data.data);
    };

    return (
        <div className="flex border justify-center items-center">
            <input onChange={handleFileChange} className="block w-full px-8 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
            {/* <input type="file" className='' onChange={handleFileChange} /> */}
            <button
                className="px-16 py-2 bg-blue-500 text-white rounded"
                onClick={handleUpload}
            >
                Upload
            </button>
        </div>
    );
}
