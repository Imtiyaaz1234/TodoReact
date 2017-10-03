# TodoReact

When cloning the project, you have to:
#####
-npm install

######
Once that is done:

######
-go to the project source

#######
-Once in project source use git bash and prebuild export PATH=$PATH:./node_modules/.bin

#######
-After that use browserify src/js/app.js -t babelify --verbose --debug --poll -o dev/build.js to run
