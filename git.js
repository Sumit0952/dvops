//git - version control system used to track changes in code files 
//devops used git everywhere

//Source code management
//CI/CD pipelines (Jenkins, GitHub Actions)
//infrastructure as Code (Terraform, Ansible, Helm charts)
//Rollbacks & collaboration


//git init - Initialize a new git repository
//git add file.txt - add file to staging
//git add ./ - add all files to staging
//git comit -m "message" - save snapshot to local repo
//git status - check current status of repo
//git log - view commit history
//git branch - view or create branches
//git checkout branch_name - switch to a different branch
//git remote add origin <repo_url> - connect to github
// git push origin main - upload to remote repoqsitory
// git pull origin main - fetch and merge changes from remote repository

//brach
//git branch new_feature - create a new branch named new_feature
//git checkout new_feature - switch to the new_feature branch
//git merge new_feature - merge changes from new_feature branch into the current branch 


// git reset --soft head~1 - undo last commit but keep changes staged
// git reset --hard head~1 - undo last commit and discard changes

//git revert <commit_id> - create a new commit that undoes changes from a specific commit

// git remove origin - remove remote repository link
// git remote set-url origin <new_repo_url> - change remote repository URL
// git remote -v


// git merge conflict - occurs when changes in different branches conflict with each other
// to resolve merge conflict - manually edit files to fix conflicts, then stage and commit the changes

// cherry pick
// git checkout main
// git cherry-pick <commit_id> - apply changes from a specific commit to the current branch

// stash
// git stash - temporarily save changes that are not ready to be committed
// git stash apply - reapply stashed changes
// git stash pop - reapply stashed changes and remove them from the stash list
