const validatePackageName = require('validate-npm-package-name');
const chalk = require('chalk');

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
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
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:',
        default: 'Express MongoDB TypeScript API with Authentication',
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author name:',
        default: '',
    },
    {
        type: 'list',
        name: 'packageManager',
        message: 'Package manager:',
        choices: ['npm', 'yarn', 'pnpm'],
        default: 'npm',
    },
    {
        type: 'confirm',
        name: 'initGit',
        message: 'Initialize Git repository?',
        default: true,
    },
    {
        type: 'confirm',
        name: 'installDeps',
        message: 'Install dependencies now?',
        default: true,
    },
];

module.exports = questions;
