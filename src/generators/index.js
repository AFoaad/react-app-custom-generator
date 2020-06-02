
const path = require("path");
const childProcess = require("child_process");

// generators 
const pageGenerator = require("./page/index");
const componentGenerator = require("./component/index");


module.exports = function (plop) {
    // create your generators here
    plop.setGenerator("component", componentGenerator);
    plop.setGenerator('page',pageGenerator);

    plop.setActionType(
        'prettify',
        (answers, config) => {

            const folderPth = `${path.join(
                __dirname,
                "../",
                config.path,
                plop.getHelpers("properCase")(answers.componentName),
                "**.ts"
            )}`;

            try {
                childProcess.execSync(`yarn prettify "${folderPth}"`)
            } catch (error) {
                throw error;
            }
        }
    )
};