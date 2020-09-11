const multer = require('multer')
const path = require("path");

module.exports = multer({
    storage: multer.diskStorage({
        destination: './public/uploads/',
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + path.extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    }),
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/jpe|svg|jpeg|png|gif|JPEG|JPG|PNG$i/)) {
            cb(new Error("File Not Supported"), false);
            return;
        }
        cb(null, true);
    }
});

