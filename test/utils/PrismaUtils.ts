// https://github.com/prisma/prisma/issues/5230
// https://github.com/blitz-js/blitz/blob/canary/packages/core/src/prisma-utils.ts
// https://qiita.com/TsuyoshiUshio@github/items/cf4b28e7999403f7a04c
// https://nodejs.org/api/child_process.html
import util from 'util';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const exec = util.promisify(require('child_process').exec);

export const resetDatabase = async (): Promise<void> => {
  await exec('npx migrate reset --force');
};

// export const seedingData = async () => {
//   console.log('seeding data ...');

//   if (process.env.NODE_ENV === 'production') {
//     throw new Error('You cannnot seed data in a production environment');
//   }

//   await new Promise((res, rej) => {
//     const process = spawn('prisma', ['db', 'seed', '--preview-feature']);

//     process.on('close', (code) => (code === 0 ? res(0) : rej(code)));
//   });
// };
