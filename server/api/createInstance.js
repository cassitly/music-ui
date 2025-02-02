const { generateItems } = require('../../packages/music-code/src/generator/bin.pkg');
const { writeConfig } = require('../../packages/music-code/src/settings');
const { writeFileSync, readFileSync, readdirSync, existsSync } = require("fs");

const getDirectoryContents = require('./getDirectoryContents.js');
const appReady = require('../../packages/music-code/app');
const path = require("path");
const { rmSync } = require("fs");

function writeInstanceWithPrompt(prompt) {
    writeFileSync(path.join(__dirname, "../../packages/music-code/assets/settings-prompt.txt"), prompt, "utf-8");
    appReady();
}

function writeInstanceWithStyle(style) {
    writeFileSync(path.join(__dirname, "../../packages/music-code/assets/settings-style.txt"), style, "utf-8");
    appReady();
}

function createInstanceWithSettings(prompt, style) {
    // Implement logic to create an instance with the given prompt and style
    generateItems();
    writeConfig();

    // Check if both prompt and style are provided
    if (!style) writeInstanceWithPrompt(prompt); else
    if (!prompt) writeInstanceWithStyle(style); else

    // If both prompt and style are provided
    if (style && prompt) {
        writeInstanceWithPrompt(prompt);
        writeInstanceWithStyle(style);

        // Run the application & generate the instance.
        appReady();
    }
}

module.exports = async function instances(app) {
    app.get("/instances", async function(req, res) {
        /** Instance Request Body
         * {
                body: {
                    prompt: "",
                    style: "",
                    command: "",
                    instance: ""
                },
                file: {
                    path: "",
                    name: "",
                }
            }
         */
        const { prompt, style, command, instance } = req.body;

        // Check if commands are provided
        if (!command) return res.status(400).json({ error: "Commands are required." });

        if (command === "@create") {
            if (instance) return res.status(400).json({ error: "Provided Instance..???" });

            // Create an Instance
            createInstanceWithSettings(prompt, style);

            // Return the instance
            getDirectoryContents(path.join(__dirname, "../../packages/music-code/bin")).then(data => {
                const instance = res.status(200).json(data);
                // Return the instance
                return instance;
            });

            res.status(200).json({ message: "Instance created successfully.", request: "Awaiting Approval" });
        }

        if (command === "@view") {
            // View the instance
            getDirectoryContents(path.join(__dirname, "../../packages/music-code/bin/", instance)).then(data => {
                const instance = res.status(200).json(data);
                // Return the instance
                return instance;
            });

            res.status(200).json({ message: "Viewed Instance: " + instance });
        }

        if (command === "@upload") {
            // Upload the audio to the instance
            if (existsSync(path.join(__dirname, "../../packages/music-code/bin/", instance, "/audio.wav"))) return res.status(200).json({ message: "Audio already exists." });

            await writeFileSync(path.join(__dirname, "../../packages/music-code/bin/", instance, "/audio.wav"), readFileSync(req.file.path), "utf-8");
            await rmSync(req.file.path);

            // Return the instance
            res.status(200).json({ message: "Audio uploaded successfully." });
        }

        if (command === "@delete") {
            // Check if it exists in the first place
            if (!readdirSync(path.join(__dirname, "../../packages/music-code/bin/")).length) return res.status(200).json({ message: "No instances found." });

            // Delete the instance
            await getDirectoryContents(path.join(__dirname, "../../packages/music-code/bin/", instance)).then(data => {
                rmdirSync(path.join(__dirname, "../../packages/music-code/bin/", instance), { recursive: true, force: true });
                res.status(200).json({ message: "Deleting Instance: " + instance });
            });

            // Return the instance, once deleted
            setTimeout(() => {
                if (!readdirSync(path.join(__dirname, "../../packages/music-code/bin/")).length) return res.status(200).json({ message: "Deleted Instance: " + instance });  
            }, 3000);
        }
    });
}