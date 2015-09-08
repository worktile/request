var request = require('request');
var urls = ["http://requestb.in/uhsa66uh","http://localhost:8800/EySdK-BT","http://localhost:8880/"];
//request.get(url+"?ddd=fff", function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});

//urls.forEach(function(url){
//    request.post(url + "?hello=22222", {
//        form: {key: 'value'},
//        headers:{
//            "content-type":"application/x-www-form-urlencoded;charset=UTF-8"
//        }
//    }, function (error, response, body) {
//        if (!error) {
//            console.log(body);
//        }
//    });
//});



//request.post(urls[1] + "?ddd=fff", {body: "sssss"}, function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});
var json = {"ref":"refs/heads/master","before":"579d74f5abbeeceab1bb1a65b99296dbfaa9ed04","after":"2ff6c52848b89729407ed1d5d4cbfc26a790ce4a","created":false,"deleted":false,"forced":false,"base_ref":null,"compare":"https://github.com/why520crazy/pbox/compare/579d74f5abbe...2ff6c52848b8","commits":[{"id":"2ff6c52848b89729407ed1d5d4cbfc26a790ce4a","distinct":true,"message":"change readme.md","timestamp":"2015-09-08T11:33:42+08:00","url":"https://github.com/why520crazy/pbox/commit/2ff6c52848b89729407ed1d5d4cbfc26a790ce4a","author":{"name":"why520crazy","email":"why520crazy@163.com","username":"why520crazy"},"committer":{"name":"why520crazy","email":"why520crazy@163.com","username":"why520crazy"},"added":[],"removed":[],"modified":["README.md"]}],"head_commit":{"id":"2ff6c52848b89729407ed1d5d4cbfc26a790ce4a","distinct":true,"message":"change readme.md","timestamp":"2015-09-08T11:33:42+08:00","url":"https://github.com/why520crazy/pbox/commit/2ff6c52848b89729407ed1d5d4cbfc26a790ce4a","author":{"name":"why520crazy","email":"why520crazy@163.com","username":"why520crazy"},"committer":{"name":"why520crazy","email":"why520crazy@163.com","username":"why520crazy"},"added":[],"removed":[],"modified":["README.md"]},"repository":{"id":12190854,"name":"pbox","full_name":"why520crazy/pbox","owner":{"name":"why520crazy","email":"why520crazy@users.noreply.github.com"},"private":false,"html_url":"https://github.com/why520crazy/pbox","description":"jquery 弹框的一个插件","fork":false,"url":"https://github.com/why520crazy/pbox","forks_url":"https://api.github.com/repos/why520crazy/pbox/forks","keys_url":"https://api.github.com/repos/why520crazy/pbox/keys{/key_id}","collaborators_url":"https://api.github.com/repos/why520crazy/pbox/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/why520crazy/pbox/teams","hooks_url":"https://api.github.com/repos/why520crazy/pbox/hooks","issue_events_url":"https://api.github.com/repos/why520crazy/pbox/issues/events{/number}","events_url":"https://api.github.com/repos/why520crazy/pbox/events","assignees_url":"https://api.github.com/repos/why520crazy/pbox/assignees{/user}","branches_url":"https://api.github.com/repos/why520crazy/pbox/branches{/branch}","tags_url":"https://api.github.com/repos/why520crazy/pbox/tags","blobs_url":"https://api.github.com/repos/why520crazy/pbox/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/why520crazy/pbox/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/why520crazy/pbox/git/refs{/sha}","trees_url":"https://api.github.com/repos/why520crazy/pbox/git/trees{/sha}","statuses_url":"https://api.github.com/repos/why520crazy/pbox/statuses/{sha}","languages_url":"https://api.github.com/repos/why520crazy/pbox/languages","stargazers_url":"https://api.github.com/repos/why520crazy/pbox/stargazers","contributors_url":"https://api.github.com/repos/why520crazy/pbox/contributors","subscribers_url":"https://api.github.com/repos/why520crazy/pbox/subscribers","subscription_url":"https://api.github.com/repos/why520crazy/pbox/subscription","commits_url":"https://api.github.com/repos/why520crazy/pbox/commits{/sha}","git_commits_url":"https://api.github.com/repos/why520crazy/pbox/git/commits{/sha}","comments_url":"https://api.github.com/repos/why520crazy/pbox/comments{/number}","issue_comment_url":"https://api.github.com/repos/why520crazy/pbox/issues/comments{/number}","contents_url":"https://api.github.com/repos/why520crazy/pbox/contents/{+path}","compare_url":"https://api.github.com/repos/why520crazy/pbox/compare/{base}...{head}","merges_url":"https://api.github.com/repos/why520crazy/pbox/merges","archive_url":"https://api.github.com/repos/why520crazy/pbox/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/why520crazy/pbox/downloads","issues_url":"https://api.github.com/repos/why520crazy/pbox/issues{/number}","pulls_url":"https://api.github.com/repos/why520crazy/pbox/pulls{/number}","milestones_url":"https://api.github.com/repos/why520crazy/pbox/milestones{/number}","notifications_url":"https://api.github.com/repos/why520crazy/pbox/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/why520crazy/pbox/labels{/name}","releases_url":"https://api.github.com/repos/why520crazy/pbox/releases{/id}","created_at":1376804292,"updated_at":"2014-09-30T03:22:54Z","pushed_at":1441683234,"git_url":"git://github.com/why520crazy/pbox.git","ssh_url":"git@github.com:why520crazy/pbox.git","clone_url":"https://github.com/why520crazy/pbox.git","svn_url":"https://github.com/why520crazy/pbox","homepage":"http://why520crazy.github.io/pbox","size":568,"stargazers_count":1,"watchers_count":1,"language":"JavaScript","has_issues":true,"has_downloads":true,"has_wiki":true,"has_pages":true,"forks_count":0,"mirror_url":null,"open_issues_count":0,"forks":0,"open_issues":0,"watchers":1,"default_branch":"master","stargazers":1,"master_branch":"master"},"pusher":{"name":"why520crazy","email":"why520crazy@users.noreply.github.com"},"sender":{"login":"why520crazy","id":3959960,"avatar_url":"https://avatars.githubusercontent.com/u/3959960?v=3","gravatar_id":"","url":"https://api.github.com/users/why520crazy","html_url":"https://github.com/why520crazy","followers_url":"https://api.github.com/users/why520crazy/followers","following_url":"https://api.github.com/users/why520crazy/following{/other_user}","gists_url":"https://api.github.com/users/why520crazy/gists{/gist_id}","starred_url":"https://api.github.com/users/why520crazy/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/why520crazy/subscriptions","organizations_url":"https://api.github.com/users/why520crazy/orgs","repos_url":"https://api.github.com/users/why520crazy/repos","events_url":"https://api.github.com/users/why520crazy/events{/privacy}","received_events_url":"https://api.github.com/users/why520crazy/received_events","type":"User","site_admin":false}};

request.put(urls[1], {json:{}},function (error, response, body) {
    if (!error) {
        console.log(body);
    }
});

//request.put(urls[1]+"?sss=ddf", {form:{key:'value',book:"122"}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});

//
//var body = '<?xml version="1.0" encoding="utf-8"?>' +
//    '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">'+
//    '<soap12:Body>......</soap12:Body></soap12:Envelope>';
//request.post(urls[1] + "?ddd=fff", {body:body,headers:{'Content-Type': 'text/xml'}}, function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});

//request.put(url, {json:{key:'value'}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});