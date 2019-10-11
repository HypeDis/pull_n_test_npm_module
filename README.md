# Pull 'n Test

## Pull and test multiple repos simultaneously! WOW!

## Installation:

```
npm i -g @hypedis/pnt
```

## Commands:

Use the pnt keyword before all commands
Example:

```
pnt --init ./students.csv
```

--init \<filepath> <br>
Create the studentData.json from a csv file.
The csv should be formatted as
firstName, lastName, githubHandle, repoName

--createAll <br>
Create the folders and does an initial pull for each repo.

--pullAll <br>
run "git pull origin master on every folder"

--testAll \<filename> <br>
run "npm test \<filename>" for each folder.
Use '!' for file name to bypass file name validation
