const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const inquirer = require('inquirer');
const {questions} = require('./questions');
const {
    isSafeToCreateProjectIn,
    initGit,
    updatePackageJson,
    printSuccessMessage,
} = require('./utils');

async function createProject(projectName, options) {
    let finalProjectName;

    // Quick mode (--yes flag)
    if (options.yes && !projectName) {
        finalProjectName = 'my-express-api';
    } else if (projectName) {
        // Project name provided as argument
        finalProjectName = projectName;
    } else {
        // Interactive mode - ask for project name
        const answers = await inquirer.prompt(questions);
        finalProjectName = answers.projectName;
    }

    const root = path.resolve(finalProjectName);

    // Create project directory
    console.log();
    const dirSpinner = ora(`Creating ${chalk.cyan(finalProjectName)}...`).start();

    try {
        fs.ensureDirSync(finalProjectName);

        if (!isSafeToCreateProjectIn(root, finalProjectName)) {
            dirSpinner.fail('Directory not empty or conflicts detected');
            process.exit(1);
        }

        dirSpinner.succeed(`Directory created: ${chalk.cyan(finalProjectName)}`);
    } catch (error) {
        dirSpinner.fail('Failed to create directory');
        throw error;
    }

    // Copy template files
    const copySpinner = ora('Copying template files...').start();
    const templateDir = path.join(__dirname, '..', 'templates', 'default');

    try {
        if (!fs.existsSync(templateDir)) {
            throw new Error(`Template directory not found: ${templateDir}`);
        }

        fs.copySync(templateDir, root, {
            filter: (src) => {
                const basename = path.basename(src);
                const relativePath = path.relative(templateDir, src);

                if (src === templateDir) return true;

                const excludedDirs = [
                    'node_modules', 'dist', 'logs', 'coverage',
                    '.git', '.idea', '.vscode'
                ];

                const excludedFiles = [
                    '.env.development', '.env.production', '.env.local', '.env',
                    'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
                    '.DS_Store', 'Thumbs.db', 'npm-debug.log'
                ];

                const parts = relativePath.split(path.sep);
                const isExcludedDir = excludedDirs.some(dir => parts.includes(dir));
                const isExcludedFile = excludedFiles.includes(basename);

                return !isExcludedDir && !isExcludedFile;
            },
        });

        copySpinner.succeed('Template files copied');
    } catch (error) {
        copySpinner.fail('Failed to copy template files');
        throw error;
    }

    // Update package.json
    const updateSpinner = ora('Configuring package.json...').start();
    try {
        updatePackageJson(root, finalProjectName);
        updateSpinner.succeed('package.json configured');
    } catch (error) {
        updateSpinner.fail('Failed to update package.json');
        throw error;
    }

    // Initialize git
    if (options.git) {
        const gitSpinner = ora('Initializing Git repository...').start();
        try {
            const success = initGit(root);
            if (success) {
                gitSpinner.succeed('Git repository initialized');
            } else {
                gitSpinner.warn('Git initialization skipped (not installed)');
            }
        } catch (error) {
            gitSpinner.warn('Git initialization failed');
        }
    }

    // Success message
    printSuccessMessage(finalProjectName);
}

module.exports = createProject;
