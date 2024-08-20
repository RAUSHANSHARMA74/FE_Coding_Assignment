import fs from "fs"
const fileUpload = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    fs.readFile(req.file.path, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file.');
        }

        const rows = data.split('\n').map(row => row.split(','));

        res.json({ data: rows });
    });
}

export { fileUpload };