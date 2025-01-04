import { writeJson, type Tree } from '@nx/devkit';
import {ReleaseFileOptions} from '../schema';
import { execSync } from 'node:child_process';

export function generateReleaseFile(tree:Tree, schema:ReleaseFileOptions ) {
  if(tree.exists("release-file.json")) return;
  writeJson(tree, "release-file.json", {"projectName":schema.projectName, "bumpType":schema.bumpType});
}

export function checkGitDirectory(){
  return true;
}