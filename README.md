<h1 align="center">Beautiful CLI to scaffold production-ready Express + MongoDB + TypeScript API</h1>

<div align="center">

[![npm version](https://img.shields.io/npm/v/create-express-ts-mongo-app.svg)](https://www.npmjs.com/package/create-express-ts-mongo-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## ✨ What's Included

- ✅ Express + TypeScript
- ✅ MongoDB + Mongoose
- ✅ JWT Authentication
- ✅ User CRUD operations
- ✅ Role-based authorization
- ✅ Request validation
- ✅ Rate limiting
- ✅ Swagger API docs
- ✅ Winston logging
- ✅ Docker support
- ✅ Environment configs
- ✅ Jest testing setup
- ✅ Makefile automation

## 🚀 Installation

### Using npx (Recommended)

```bash
npx create-express-ts-mongo-app my-project
```

### Using npm

```bash
npm init express-ts-mongo-app my-project
```

## 📖 Usage

### Interactive Mode

```bash
npx create-express-ts-mongo-app
```

You'll be prompted for:

- **Project name** - Name of your project (validated as npm package name)

### Quick Start (Skip Prompts)

```bash
npx create-express-ts-mongo-app my-app --yes
```

### Command Options

| Option           | Description                                      |
|------------------|--------------------------------------------------|
| `[project-name]` | Name of your project                             |
| `-y, --yes`      | Skip prompts and use defaults (`my-express-api`) |
| `--no-git`       | Skip git initialization                          |
| `-v, --version`  | Show version number                              |
| `-h, --help`     | Show help                                        |

### Examples

```bash
# Interactive mode - prompts for project name
npx create-express-ts-mongo-app

# Create project with custom name
npx create-express-ts-mongo-app my-awesome-api

# Skip all prompts (uses default name: my-express-api)
npx create-express-ts-mongo-app --yes

# Create with custom name, skip prompts
npx create-express-ts-mongo-app my-api -y

# Create without git initialization
npx create-express-ts-mongo-app my-api --no-git
```

---


<div align="center">

### After Installation, Check The Full Documentation Provided Inside Your Project Folder ❗️

</div>
