import { Tree, formatFiles } from '@nx/devkit';
import { ReleaseFileOptions } from './schema';
import {generateReleaseFile, checkGitDirectory} from './lib/generate-release-file';

export default async function (tree: Tree, schema: ReleaseFileOptions) {
  await checkGitDirectory();
  await generateReleaseFile(tree, schema)
  // commit changes function call - execSync - child_process package ( node.js module )
  await formatFiles(tree);
}