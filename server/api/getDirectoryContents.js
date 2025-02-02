const { readdirSync, readFileSync, statSync } = require("fs");
const path = require("path");
module.exports = function getDirectoryContents(directory) {
    const fullPath = path.join(__dirname, directory);
    const stats = statSync(fullPath);

    if (stats.isFile()) {
        return {
            type: "file",
            name: path.basename(directory),
            content: readFileSync(fullPath, "utf-8"),
        };
    } else if (stats.isDirectory()) {
        return {
            type: "folder",
            name: path.basename(directory),
            files: readdirSync(fullPath).map(file => getFileOrFolderContents(path.join(directory, file))),
        };
    }
    return null;
}