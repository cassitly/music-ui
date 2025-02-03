## Standalone UI Intergration App
This application, allows for an UI intergration within [music-code](https://github.com/cassitly/music-code), and other Private Casually Nyx plugins. I.E music-cover-renderer, and music-server. This is an heavily intergrated plugin using those private repositories as a dependencies. You will need to reprogram your own open source version, as of Feburary 2nd of 2025.
<br><br>
This Standalone App will still work without those private dependencies, though you will have to tweak the settings for it to work.
Right now, I do have plans to remake a Standalone version without those private dependencies being required, until this UI App is complete.

## Installing this application
To install and run this application, you can download the repository as a ZIP file or run the following commands in your projects folder.
This will download and install the full repository, and its dependencies (without the private dependencies of course.)
```cmd
git clone https://github.com/cassitly/music-ui.git
npm run build
```
<br>
If you're downloading the repository from a ZIP file, open the folder you've downloaded (extracted from the ZIP file) inside command prompt, and run ``npm run build`` to build it.
<br>

Now once you've downloaded and installed the repository. Run ``npm start`` to start the application, and a bunch of servers should be started.
Your output should look something like this.
```cmd

> music-ui@1.0.0 start
> concurrently "nodemon src/independent.js" "npm run electron"

[0] [nodemon] 2.0.22
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node src/independent.js`
[0] App is starting...
[1] 
[1] > music-ui@1.0.0 electron
[1] > electron packages/music-cover-renderer/render/main.js
[1]
[1] 
[0] Server running at http://localhost:3003
[0] Preview server running at http://localhost:3002
[0] Display server running at http://localhost:3001
[0] Server is running on http://localhost:3004

```

Once you've started the server go to the url you've set as the control panel, or the default url if you haven't set one.
Which is ``http://localhost:3004``, copy and paste this into your browser.

## Dependencies
- ``npmjs@latest`` is used for managing packages, aka a package manager.
- ``nodejs@latest`` is used for running the application.

**NPM Dependencies**
- ``"body-parser": "^1.20.1"``, Used for parsing the html/json body
- ``"concurrently": "^9.1.2"``, Used for running both the server and client at the same time
- ``"cors": "^2.8.5"``, Used for enabled iframe rendering
- ``"express": "^4.18.2"``, Used for html server creation
- ``"fs": "^0.0.1-security"``, Used for file management
- ``"nodemon": "^2.0.20"``, Used for running the files
- ``"path": "^0.12.7"``, Used for resolving paths

**Git Dependencies**
- ``music-code@latest``, Used for music data generation
- ``music-cover-renderer@latest``, Used for rendering the music cover
- ``api-plugin@latest``, Used for API interactions with the NAI endpoint
- ``music-server@latest``, Used for endpoint / Server Side interactons between clients
