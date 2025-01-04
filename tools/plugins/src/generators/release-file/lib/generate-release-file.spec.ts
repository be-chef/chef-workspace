import { generateReleaseFile, checkGitDirectory } from './generate-release-file';
import { readJson, writeJson, type Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import {ReleaseFileOptions} from '../schema';
import { execSync } from 'node:child_process';

// Mock child_process
jest.mock("node:child_process", () => ({
  execSync: jest.fn(),
}));

describe('Test before generating release file', () => {
  it("should return true if the git directory is clean", () => {
    (execSync as jest.Mock).mockReturnValue("");
    expect(checkGitDirectory()).toBeTruthy();
  });

  it("should return false if the git directory is not clean", ()=>{
    (execSync as jest.Mock).mockReturnValue("modified: example/test.txt");
    expect(checkGitDirectory()).toBeFalsy();
  });
});

// Should we 

describe('Tests for generate release file', () => {
  let tree:Tree;
  let dummySchema: ReleaseFileOptions = {
    projectName: "test-project",
    bumpType: "minor"
  }

  beforeEach(()=>{
    tree = createTreeWithEmptyWorkspace();
  })

  it('Create release-file.json file', () => {
   
    generateReleaseFile(tree, dummySchema);
    expect(tree.exists("release-file.json")).toBeTruthy();

    const releaseFile = readJson<ReleaseFileOptions>(tree,"release-file.json");

    expect(releaseFile.bumpType).toEqual("minor");
    expect(releaseFile.projectName).toEqual("test-project");
    
  });

  it('does not override existing release-file.json file', () => {
    writeJson(tree, "release-file.json", {"projectName":"dummy-project", "bumpType":"dummy-test"})
    generateReleaseFile(tree, dummySchema);

    expect(tree.exists("release-file.json")).toBeTruthy();

    const releaseFile = readJson<ReleaseFileOptions>(tree,"release-file.json");

    expect(releaseFile.bumpType).toEqual("dummy-test");
    expect(releaseFile.projectName).toEqual("dummy-project");
    
  });

});

// test before generating release file 
// Should check if git working directory is clean or not 