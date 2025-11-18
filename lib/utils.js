const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

/**
 * Check if directory exists and is empty
 */
function isSafeToCreateProjectIn(root, name) {
    const validFiles = [
        '.DS_Store',
        '.git',
        '.gitattributes',
        '.gitignore',
        '.gitlab-ci.yml',
        '.hg',
        '.hgcheck',
        '.hgignore',
        '.idea',
        '.npmignore',
        '.travis.yml',
        'LICENSE',
        'Thumbs.db',
        'docs',
        'mkdocs.yml',
        'npm-debug.log',
        'yarn-debug.log',
        'yarn-error.log',
    ];

    const conflicts = fs
        .readdirSync(root)
        .filter((file) => !validFiles.includes(file))
        .filter((file) => !/\.iml$/.test(file));

    if (conflicts.length > 0) {
        console.log(
            chalk.red(`The directory ${chalk.green(name)} contains files that could conflict:`)
        );
        console.log();
        for (const file of conflicts) {
            console.log(`  ${file}`);
        }
        console.log();
        console.log('Either try using a new directory name, or remove the files listed above.');
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
 * Install dependencies
 */
function installDependencies(root, packageManager = 'npm') {
    console.log(chalk.cyan('\n📦 Installing dependencies...\n'));

    const commands = {
        npm: 'npm install',
        yarn: 'yarn install',
        pnpm: 'pnpm install',
    };

    try {
        execSync(commands[packageManager], {
            cwd: root,
            stdio: 'inherit',
        });
        return true;
    } catch (error) {
        console.error(chalk.red('Failed to install dependencies'));
        return false;
    }
}

/**
 * Initialize git repository
 */
function initGit(root) {
    if (!commandExists('git')) {
        console.log(chalk.yellow('Git is not installed, skipping git initialization'));
        return false;
    }

    try {
        execSync('git --version', { stdio: 'ignore' });
        execSync('git init', { cwd: root, stdio: 'ignore' });
        execSync('git add -A', { cwd: root, stdio: 'ignore' });
        execSync('git commit -m "Initial commit from create-create-express-ts-mongo-app"', {
            cwd: root,
            stdio: 'ignore',
        });
        return true;
    } catch (error) {
        console.log(chalk.yellow('Git initialization failed'));
        return false;
    }
}

/**
 * Update package.json with user inputs
 */
function updatePackageJson(root, projectName, description, author) {
    const packageJsonPath = path.join(root, 'package.json');
    const packageJson = fs.readJsonSync(packageJsonPath);

    packageJson.name = projectName;
    packageJson.version = '1.0.0';
    packageJson.description = description;
    packageJson.author = author;

    // Remove fields that should be regenerated
    delete packageJson.repository;
    delete packageJson.bugs;
    delete packageJson.homepage;

    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
}

module.exports = {
    isSafeToCreateProjectIn,
    commandExists,
    installDependencies,
    initGit,
    updatePackageJson,
};
