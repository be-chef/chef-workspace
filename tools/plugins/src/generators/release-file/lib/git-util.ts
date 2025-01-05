import { execSync } from 'node:child_process';
import { workspaceRoot } from '@nx/devkit';

export const isGitClean = (): Boolean =>{
  const output = execSync('git status --porcelain --untracked-file=no', { encoding: 'utf8' });
  return !output;
}

export const commit = (message: string): void =>{
  try {
    // Stage all changes
    execSync('git add .');

    execSync(`git commit -m "${message}" `);

    console.log("Changes committed successfully.");
  } catch (error) {
    console.error("Error committing changes:", error);
  }
}