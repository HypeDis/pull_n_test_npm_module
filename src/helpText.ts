export const helpText = ` 

LIST OF COMMANDS:

--init <filepath>
Create the studentData.json from a csv file.
The csv should be formatted as
firstName, lastName, githubHandle, repoName

--createAll
Create the folders and does an initial pull for each repo.

--pullAll
run "git pull origin master on every folder"

--testAll <filename>
run "npm test <filename>" for each folder.
Use '!' for file name to bypass file name validation`;
