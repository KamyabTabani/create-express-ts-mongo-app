const validatePackageName = require('validate-npm-package-name');
const chalk = require('chalk');

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: chalk.bold('📦 Project name:'),
        default: 'my-express-api',
        validate: (input) => {
            const validation = validatePackageName(input);
            if (validation.validForNewPackages) {
                return true;
            }
            return chalk.red(
                `Invalid project name: ${validation.errors?.[0] || validation.warnings?.[0]}`
            );
        },
        transformer: (input) => chalk.cyan(input),
    },
];

module.exports = {questions};
