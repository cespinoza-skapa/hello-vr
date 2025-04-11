const ghpages = require('gh-pages');
  
ghpages.publish('build', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Deployed to GitHub Pages');
    }
});