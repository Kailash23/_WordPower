import {
  DocumentDirectoryPath,
  unlink,
  downloadFile,
  exists,
} from 'react-native-fs';
import {unzip} from 'react-native-zip-archive';
import {save} from '../../utils';
import {DB_EXITS_FLAG_KEY} from '../../config/storeKey';
import {DATABASE_URL} from '@env';
console.log(DATABASE_URL);
const zippedDBFile = DocumentDirectoryPath + '/WordPowerDB.zip';
const databaseFolder = DocumentDirectoryPath + '/WordPowerDB';

export const downloadDb = progressCb => {
  return new Promise(async (resolve, reject) => {
    try {
      deleteZippedDbFile();
      deleteDbFolder();
      save(DB_EXITS_FLAG_KEY, false);
      const downloadPromise = downloadFile({
        fromUrl: DATABASE_URL,
        toFile: zippedDBFile,
        progress: ({contentLength, jobId, bytesWritten}) => {
          if (downloadPromise.jobId === jobId) {
            if (contentLength === -1) {
              contentLength = 8058298;
            }
          }
          progressCb(bytesWritten / contentLength);
        },
      });

      let {statusCode} = await downloadPromise.promise;
      console.log('Download Complete!', {statusCode});

      if (statusCode === 200) {
        let zipResult = await unZipDbFile();
        console.log('File unzipping Complete!', zipResult);
        deleteZippedDbFile();
        save(DB_EXITS_FLAG_KEY, true);
        resolve({statusCode, message: 'Database downloaded successfully!'});
      } else {
        reject({statusCode, message: 'Database downloaded failed!'});
      }
    } catch (e) {
      reject(e);
    }
  });
};

const unZipDbFile = async () => {
  try {
    return await unzip(zippedDBFile, DocumentDirectoryPath);
  } catch (e) {
    throw new Error('Unzip error', e);
  }
};

const deleteFile = async filePath => {
  try {
    if (await exists(filePath)) {
      await unlink(filePath);
    }
  } catch (e) {
    throw new Error('Delete error :', e);
  }
};

const deleteZippedDbFile = () => {
  deleteFile(zippedDBFile);
};

const deleteDbFolder = () => {
  deleteFile(databaseFolder);
};
