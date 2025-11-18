const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const inquirer = require('inquirer');
const questions = require('./questions');
const {
    isSafeToCreateProjectIn,
    installDependencies,
    initGit,
    updatePackageJson,
} = require('./utils');

async function createProject(projectName, options) {
    let answers = {};

    // If project name not provided or --yes flag used
    if (!projectName || options.yes) {
        if (options.yes) {
            answers = {
                projectName: projectName || 'my-express-api',
                description: 'Express MongoDB TypeScript API with Authentication',
                author: '',
                packageManager: 'npm',
                initGit: options.git !== false,
                installDeps: options.install !== false,
            };
        } else {
            answers = await inquirer.prompt(questions);
        }
    } else {
        // Project name provided, ask remaining questions
        const remainingQuestions = questions.filter((q) => q.name !== 'projectName');
        const remainingAnswers = await inquirer.prompt(remainingQuestions);
        answers = { projectName, ...remainingAnswers };
    }

    const {
        projectName: finalProjectName,
        description,
        author,
        packageManager,
        initGit: shouldInitGit,
        installDeps,
    } = answers;

    const root = path.resolve(finalProjectName);
    const projectDisplayName = chalk.green(finalProjectName);

    console.log();
    console.log(`Creating a new Express API in ${chalk.green(root)}`);
    console.log();

    // Create project directory
    fs.ensureDirSync(finalProjectName);

    // Check if directory is safe
    if (!isSafeToCreateProjectIn(root, finalProjectName)) {
        process.exit(1);
    }

    // Copy template files
    const spinner = ora('Copying template files...').start();
    const templateDir = path.join(__dirname, '..', 'templates', 'default');

    try {
        // Check if template directory exists
        if (!fs.existsSync(templateDir)) {
            throw new Error(`Template directory not found: ${templateDir}`);
        }

        // Copy everything with smart filtering
        fs.copySync(templateDir, root, {
            filter: (src) => {
                const relativePath = path.relative(templateDir, src);

                // Skip the root template directory itself
                if (src === templateDir) {
                    return true;
                }

                // Extract filename from path
                const basename = path.basename(src);

                // ===== EXCLUDED DIRECTORIES =====
                const excludedDirs = [
                    'node_modules',
                    'dist',
                    'logs',
                    'coverage',
                    '.git',
                    '.idea',
                    '.vscode',
                ];

                // ===== EXCLUDED FILES =====
                const excludedFiles = [
                    '.env.development',    // Actual env files (not .example)
                    '.env.production',
                    '.env.local',
                    '.env',
                    'package-lock.json',
                    'yarn.lock',
                    'pnpm-lock.yaml',
                    '.DS_Store',
                    'Thumbs.db',
                    'npm-debug.log',
                    'yarn-debug.log',
                    'yarn-error.log',
                ];

                // Check if it's an excluded directory
                const parts = relativePath.split(path.sep);
                const isExcludedDir = excludedDirs.some(dir => parts.includes(dir));

                // Check if it's an excluded file
                const isExcludedFile = excludedFiles.includes(basename);

                // Include everything except excluded items
                return !isExcludedDir && !isExcludedFile;
            },
            overwrite: false,
            errorOnExist: false,
        });

        spinner.succeed('Template files copied');

        // Verify critical files were copied
        const criticalFiles = [
            '.gitignore',
            '.dockerignore',
            '.env.development.example',
            '.env.production.example',
            'package.json',
            'tsconfig.json',
            'Dockerfile',
            'docker-compose.yml',
            'Makefile',
            'src/server.ts',
            'src/app.ts',
        ];

        const missing = criticalFiles.filter(file => !fs.existsSync(path.join(root, file)));

        if (missing.length > 0) {
            console.log(chalk.yellow('\n⚠️  Warning: Some critical files are missing:'));
            missing.forEach(file => console.log(chalk.yellow(`   - ${file}`)));
            console.log();
        }

    } catch (error) {
        spinner.fail('Failed to copy template files');
        console.error(chalk.red(error.message));
        process.exit(1);
    }

    // Update package.json
    const updateSpinner = ora('Updating package.json...').start();
    try {
        updatePackageJson(root, finalProjectName, description, author);
        updateSpinner.succeed('package.json updated');
    } catch (error) {
        updateSpinner.fail('Failed to update package.json');
        console.error(error);
    }

    // Install dependencies
    if (installDeps) {
        const success = installDependencies(root, packageManager);
        if (success) {
            console.log(chalk.green('✓ Dependencies installed'));
        }
    } else {
        console.log(chalk.yellow('\n⚠️  Remember to install dependencies:'));
        console.log(chalk.cyan(`  cd ${finalProjectName}`));
        console.log(chalk.cyan(`  ${packageManager} install\n`));
    }

    // Initialize git
    if (shouldInitGit) {
        const gitSpinner = ora('Initializing git repository...').start();
        const success = initGit(root);
        if (success) {
            gitSpinner.succeed('Git repository initialized');
        } else {
            gitSpinner.fail('Git initialization failed');
        }
    }

    // Success message
    console.log();
    console.log(chalk.green('✨ Success! Created'), projectDisplayName);
    console.log();
    console.log('Inside that directory, you can run several commands:');
    console.log();
    console.log(chalk.cyan('  make setup'));
    console.log('    Initialize development and production environments');
    console.log();
    console.log(chalk.cyan('  make dev'));
    console.log('    Start the development server');
    console.log();
    console.log(chalk.cyan('  make up'));
    console.log('    Start production with Docker');
    console.log();
    console.log(chalk.cyan('  npm test'));
    console.log('    Run the test suite');
    console.log();
    console.log('We suggest that you begin by typing:');
    console.log();
    console.log(chalk.cyan('  cd'), finalProjectName);

    if (!installDeps) {
        console.log(chalk.cyan(`  ${packageManager} install`));
    }

    console.log(`  ${chalk.cyan('make setup')}`);
    console.log(`  ${chalk.cyan('make dev')}`);
    console.log();
    console.log('📚 Documentation:');
    console.log(`  http://localhost:5000/api-docs`);
    console.log();
    console.log('Happy coding! 🚀');
    console.log();
}

module.exports = createProject;
