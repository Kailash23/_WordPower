import {
  readDir,
  DocumentDirectoryPath,
  unlink,
  downloadFile,
  exists,
} from 'react-native-fs';
import {unzip} from 'react-native-zip-archive';

const zippedDBFile = `${DocumentDirectoryPath}/WordPowerDB.zip`;
const databaseFolder = `${DocumentDirectoryPath}/WordPowerDB`;
const url = 'https://word-power-f39ad.web.app/WordPowerDB.zip';

export const downloadDataBase = progressCb => {
  return new Promise(async (resolve, reject) => {
    try {
      deleteZippedDbFile();
      deleteDbFolder();

      const downloadPromise = downloadFile({
        fromUrl: url,
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
        let zipResult = await unZipDatabseFile();
        console.log('File unzipping Complete!', zipResult);
        deleteZippedDbFile();
        resolve({statusCode, message: 'Database downloaded successfully!'});
      } else {
        reject({statusCode, message: 'Database downloaded failed!'});
      }
    } catch (e) {
      reject(e);
    }
  });
};

const unZipDatabseFile = async () => {
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
