#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const createProject = require('../lib/createProject');
const pkg = require('../package.json');

// ASCII Art Banner
console.log();
console.log(chalk.cyan('╔═══════════════════════════════════════════════════════════╗'));
console.log(chalk.cyan('║                                                           ║'));
console.log(chalk.cyan('║   ') + chalk.bold.white('Express + MongoDB + TypeScript API') + chalk.cyan('                      ║'));
console.log(chalk.cyan('║   ') + chalk.gray('Production-Ready Backend Starter') + chalk.cyan('                        ║'));
console.log(chalk.cyan('║                                                           ║'));
console.log(chalk.cyan('╚═══════════════════════════════════════════════════════════╝'));
console.log();

program
    .name('create-express-ts-mongo-app')
    .version(pkg.version, '-v, --version', 'output the current version')
    .description(chalk.gray('🚀 Create a production-ready Express API with MongoDB, TypeScript & JWT Auth'))
    .argument('[project-name]', 'name of your project')
    .option('-y, --yes', 'skip project name prompt and use default', false)
    .option('--no-git', 'skip git initialization', false)
    .addHelpText('after', `
${chalk.bold('Examples:')}
  ${chalk.cyan('$')} npx create-express-ts-mongo-app
  ${chalk.cyan('$')} npx create-express-ts-mongo-app my-api
  ${chalk.cyan('$')} npx create-express-ts-mongo-app my-api --no-git
  ${chalk.cyan('$')} npx create-express-ts-mongo-app -y

${chalk.bold('What\'s included:')}
  ${chalk.green('✓')} Express + TypeScript
  ${chalk.green('✓')} MongoDB + Mongoose
  ${chalk.green('✓')} JWT Authentication
  ${chalk.green('✓')} User CRUD operations
  ${chalk.green('✓')} Role-based authorization
  ${chalk.green('✓')} Request validation
  ${chalk.green('✓')} Rate limiting
  ${chalk.green('✓')} Swagger API docs
  ${chalk.green('✓')} Winston logging
  ${chalk.green('✓')} Docker support
  ${chalk.green('✓')} Environment configs
  ${chalk.green('✓')} Jest testing setup
  ${chalk.green('✓')} Makefile automation

${chalk.bold('Need help?')} ${chalk.cyan('https://github.com/kamyabtabani/create-express-ts-mongo-app')}
`)
    .action(async (projectName, options) => {
        try {
            await createProject(projectName, options);
        } catch (error) {
            console.error(chalk.red('\n❌ Error:'), error.message);
            process.exit(1);
        }
    });

program.parse(process.argv);
