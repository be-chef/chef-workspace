import { execSync } from 'node:child_process';

export const isGitClean = (): Boolean =>{
  const output = execSync('git status --porcelain --untracked-file=no', { encoding: 'utf8' });
  console.log(output==undefined);
  return true;
}

isGitClean();