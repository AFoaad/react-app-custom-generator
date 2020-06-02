// "use strict";

/**
 *
 *
 * initial prompts
 *
 */

const isComponentExists = require("../utils/isExsist");

const createPrompts = (defaulComponentName = "ComponentName") => [
  {
    type: "input",
    name: "componentName",
    message: "What should it be called?",
    default: defaulComponentName,
    validate: isComponentExists,
  },
  {
    type: "confirm",
    name: "memo",
    message: "Do You wanna Wrap It with React.memo ?",
    default: true,
  },
];

module.exports = createPrompts;
