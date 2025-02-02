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
*If you're downloading the repository from a ZIP file, open the folder you've downloaded (extracted from the ZIP file) inside command prompt, and run these commands below.*
```cmd
npm run build
```

Now once you've downloaded and installed the repository. Run ``npm start`` to start the application, and a bunch of servers should be started.
Your output should look something like this.
```cmd

```

Once you've started the server go to the url you've set as the control panel, or the default url if you haven't set one.
Which is ``http://localhost:3004``, copy and paste this into your browser.

## Dependencies
- ``npmjs@latest`` is used for managing packages, aka a package manager.
- ``nodejs@latest`` is used for running the application.

**NPM Dependencies**
- Add dependencies here
