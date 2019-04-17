class GitController
{
    static newChat (req, res) {
        var fse = require('fs-extra');
        const path = require('path');
        var nodegit = require("nodegit"); //root to "git init" in
        var fileName = "thread1.txt";
        var fileContent = "greetings mates";
        var repoDir = "nodegit/";

        //localhost:3000/new-chat/tim.ryan@pwc.com -> directory /nodegit/tim.ryan@pwc.com
        //validate email here & check for existing repo with this email
        //new chat create here
        var isBare = 0;
        fse.ensureDir(path.resolve(repoDir))
        .then(function() {
            return nodegit.Repository.init(path.resolve(repoDir, req.params.email), isBare);
        })
        .then(function (repo) {
            repository = repo;
            console.log("path - join file to repo: " + path.join(repository.workdir(), fileName));
            return fse.writeFile(path.join(repository.workdir(), fileName), fileContent);
        })
        .then(function(){
            return repository.refreshIndex();
        })
        .then(function(idx) {
            index = idx
        })
        .then(function() {
            return index.addByPath(fileName);
        })
        .then(function() {
            return index.write();
        })
        .then(function() {
            return index.writeTree();
        })
        .then(function(oid) {
            var author = nodegit.Signature.now("Replace with repo owner", "repo owner email");
            var committer = nodegit.Signature.now("this committer", "committer email");
            return repository.createCommit("HEAD", author, committer, "message", oid, []);
        })
        .then(function(commitId) {
            console.log("New Commit: ", commitId);
        });
        //redirect here
        res.send('Create new git repo, redirect to chat screen to -> '+ req.params.email + ".git");
    }
}

module.exports = GitController;