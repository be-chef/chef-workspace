import { writeJson, type Tree } from '@nx/devkit';
import {ReleaseFileOptions} from '../schema';

export async function generateReleaseFile(tree:Tree, schema:ReleaseFileOptions ) {
  if(tree.exists("release-file.json"))
    throw new Error("release-file.json already exists! If you want to proceed with current package deployment, remove the existing file & run npm run generate-release-file");
  writeJson(tree, "release-file.json", {"projectName":schema.projectName, "bumpType":schema.bumpType});
}