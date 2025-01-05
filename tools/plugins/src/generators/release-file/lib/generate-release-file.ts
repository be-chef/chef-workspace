import { writeJson, type Tree } from '@nx/devkit';
import {ReleaseFileOptions} from '../schema';
import { writeFileSync } from 'node:fs';

export async function generateReleaseFile(tree:Tree, schema:ReleaseFileOptions ) {
  if(tree.exists("release-file.json"))
    throw new Error("release-file.json already exists! If you want to proceed with current package deployment, remove the existing file & run npm run generate-release-file");
  writeFileSync("release-file.json", JSON.stringify({"projectName":schema.projectName, "bumpType":schema.bumpType}));
}