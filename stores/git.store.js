var nodegit = require('nodegit');

class GitStore
{
    static initRepo (path, is_bare) {
        nodegit.Repository.init(path, is_bare).then((repository) => {
            return repository;
        });
    }

    static commit () {

    }

    static push () {
        
    }
}

module.exports = GitStore;