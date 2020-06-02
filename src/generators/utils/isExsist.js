/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require("fs");
const path = require("path");

const pageComponents = fs.readdirSync(path.join(__dirname, "../../components"));
const pageContainers = fs.readdirSync(path.join(__dirname, "../../Pages"));

const components = pageComponents.concat(pageContainers);

function validate(comp) {
  if (/.+/.test(comp)) {
    return components.indexOf(comp) >= 0
      ? "A component or Page with this name already exists"
      : true;
  }

  return "The name is required";
}

module.exports = validate;
