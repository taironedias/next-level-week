import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');
            const originalname = file.originalname.replace(/\s+/g,'_');
            const filename = `${hash}-${originalname}`;

            callback(null, filename);
        }
    }),
    limits: { fileSize: 1 * 1024 * 1024 }, /** in bytes ccorresponding 2MB */
    fileFilter: function (request: any, file: any, callback: any) {
        if (
            file.mimetype !== 'image/png' &&
            file.mimetype !== 'image/jpg' &&
            file.mimetype !== 'image/jpeg'
        ) {
            request.fileValidationError = 'Only png, jpg and jpeg are allowed';
            return callback(null, false, new Error('Only png, jpg and jpeg are allowed'));
        }
        callback(null, true);
    }
};