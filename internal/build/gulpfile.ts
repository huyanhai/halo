import { series } from 'gulp';

export const move = () => {
  console.log('move');
};

const copyFiles = () => {
  console.log('start');
};

export default series(copyFiles);
