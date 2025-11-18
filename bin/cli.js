#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');
const createProject = require('../lib/createProject');

console.log(chalk.cyan(`
╔══════════════════════════════════════════════════╗
║   Express MongoDB TypeScript API Generator      ║
║              v${packageJson.version}                          ║
╚══════════════════════════════════════════════════╝
`));

program
    .version(packageJson.version)
    .argument('[project-name]', 'Name of your project')
    .option('-y, --yes', 'Skip prompts and use defaults')
    .option('--no-git', 'Skip git initialization')
    .option('--no-install', 'Skip npm install')
    .description('Create a new Express MongoDB TypeScript API project')
    .action(async (projectName, options) => {
        try {
            await createProject(projectName, options);
        } catch (error) {
            console.error(chalk.red('\n❌ Error:'), error.message);
            process.exit(1);
        }
    });

program.parse(process.argv);
