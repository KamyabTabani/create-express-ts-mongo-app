const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

/**
 * Check if directory is safe to create project in
 */
function isSafeToCreateProjectIn(root, name) {
    const validFiles = [
        '.DS_Store', '.git', '.gitattributes', '.gitignore',
        '.gitlab-ci.yml', '.hg', '.hgcheck', '.hgignore',
        '.idea', '.npmignore', '.travis.yml', 'LICENSE',
        'Thumbs.db', 'docs', 'mkdocs.yml', 'npm-debug.log',
        'yarn-debug.log', 'yarn-error.log',
    ];

    const conflicts = fs
        .readdirSync(root)
        .filter((file) => !validFiles.includes(file))
        .filter((file) => !/\.iml$/.test(file));

    if (conflicts.length > 0) {
        console.log();
        console.log(chalk.red(`❌ The directory ${chalk.cyan(name)} contains files that could conflict:`));
        console.log();
        conflicts.forEach((file) => console.log(`   ${chalk.yellow(file)}`));
        console.log();
        console.log(chalk.yellow('Either use a new directory name, or remove the files listed above.'));
        console.log();
        return false;
    }

    return true;
}

/**
 * Check if command exists
 */
function commandExists(command) {
    try {
        execSync(`${command} --version`, { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

/**
 * Initialize git repository
 */
function initGit(root) {
    if (!commandExists('git')) {
        return false;
    }

    try {
        execSync('git init', { cwd: root, stdio: 'ignore' });
        execSync('git add -A', { cwd: root, stdio: 'ignore' });
        execSync('git commit -m "Initial commit from create-express-ts-mongo-app"', {
            cwd: root,
            stdio: 'ignore',
        });
        return true;
    } catch {
        return false;
    }
}

/**
 * Update package.json
 */
function updatePackageJson(root, projectName) {
    const packageJsonPath = path.join(root, 'package.json');
    const packageJson = fs.readJsonSync(packageJsonPath);

    packageJson.name = projectName;
    packageJson.version = '1.0.0';
    packageJson.description = 'Express MongoDB TypeScript API with Authentication';
    packageJson.author = '';

    delete packageJson.repository;
    delete packageJson.bugs;
    delete packageJson.homepage;

    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
}

/**
 * Print beautiful success message
 */
function printSuccessMessage(projectName) {
    console.log();
    console.log(chalk.green('╔═══════════════════════════════════════════════════════════╗'));
    console.log(chalk.green('║                                                           ║'));
    console.log(chalk.green('║   ') + chalk.bold.white('✨ Success! Your project is ready!') + chalk.green('                      ║'));
    console.log(chalk.green('║                                                           ║'));
    console.log(chalk.green('╚═══════════════════════════════════════════════════════════╝'));
    console.log();

    console.log(chalk.bold('🚀 Get started:'));
    console.log();
    console.log(chalk.cyan(`   cd ${projectName}`));
    console.log(chalk.cyan('   make setup'));
    console.log(chalk.cyan('   make dev'));
    console.log();

    console.log(chalk.bold('📚 Available commands:'));
    console.log();
    console.log(chalk.gray('   Development:'));
    console.log(chalk.white('   make dev') + chalk.gray('           - Start development server'));
    console.log(chalk.white('   make test') + chalk.gray('          - Run tests'));
    console.log();
    console.log(chalk.gray('   Production:'));
    console.log(chalk.white('   make build') + chalk.gray('         - Build Docker'));
    console.log(chalk.white('   make up') + chalk.gray('            - Start with Docker'));
    console.log(chalk.white('   make down') + chalk.gray('          - Stop Docker containers'));
    console.log();
    console.log(chalk.gray('   Utilities:'));
    console.log(chalk.white('   make env-secrets') + chalk.gray('   - Generate JWT secrets'));
    console.log(chalk.white('   make help') + chalk.gray('          - Show all commands'));
    console.log();

    console.log(chalk.bold('📖 Documentation:'));
    console.log(chalk.cyan('   http://localhost:5000/api-docs'));
    console.log();

    console.log(chalk.bold('🎯 Features included:'));
    console.log();
    console.log(chalk.green('   ✓') + ' Express + TypeScript');
    console.log(chalk.green('   ✓') + ' MongoDB + Mongoose');
    console.log(chalk.green('   ✓') + ' JWT Authentication');
    console.log(chalk.green('   ✓') + ' User Management (CRUD)');
    console.log(chalk.green('   ✓') + ' Request Validation & Rate Limiting');
    console.log(chalk.green('   ✓') + ' Swagger API Documentation');
    console.log(chalk.green('   ✓') + ' Docker & Environment Configs');
    console.log(chalk.green('   ✓') + ' Jest Testing Setup');
    console.log();

    console.log(chalk.bold.red('Check The README.md File Provided In Your Project Folder For Full Documentation ❗️'));
    console.log();
    console.log(chalk.bold.cyan('Happy coding! 🎉'));
    console.log();
}

module.exports = {
    isSafeToCreateProjectIn,
    commandExists,
    initGit,
    updatePackageJson,
    printSuccessMessage,
};
