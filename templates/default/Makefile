#SHELL := C:/Program Files/Git/usr/bin/bash.exe #IF YOU ARE USING POWERSHELL OR CMD IN WINDOWS , UNCOMMENT THIS LINE

.PHONY: help setup setup-dev setup-prod install dev test build up down restart logs clean

# ============================================
# CONFIGURATION
# ============================================
# Environment files
ENV_FILE_DEV = .env.development
ENV_FILE_PROD = .env.production

# Default values
MONGO_USERNAME ?= admin
MONGO_PASSWORD ?= password123
PORT ?= 5000

# ============================================
# 📋 HELP & INFO
# ============================================

help: ## Show this help message
	@echo '╔══════════════════════════════════════════════════╗'
	@echo '║     📦 Express MongoDB TypeScript Project       ║'
	@echo '╚══════════════════════════════════════════════════╝'
	@echo ''
	@echo '🔵 Development Commands:'
	@echo '  make dev              - Start development server (local MongoDB)'
	@echo '  make test             - Run tests'
	@echo '  make db-shell-dev     - Open local MongoDB shell'
	@echo ''
	@echo '🔴 Production Commands:'
	@echo '  make up               - Start production (Docker)'
	@echo '  make down             - Stop production'
	@echo '  make logs             - View production logs'
	@echo '  make db-shell         - Open production MongoDB shell'
	@echo ''
	@echo '⚙️  Setup Commands:'
	@echo '  make setup            - First time setup (dev + prod)'
	@echo '  make setup-dev        - Setup development only'
	@echo '  make setup-prod       - Setup production only'
	@echo ''
	@echo '📚 All Available Commands:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

info: ## Show project information
	@echo "╔══════════════════════════════════════════════════╗"
	@echo "║        📦 Project Information                    ║"
	@echo "╚══════════════════════════════════════════════════╝"
	@echo ""
	@echo "📂 Project: $$(basename $$(pwd))"
	@echo ""
	@echo "🔵 Development:"
	@echo "  Command:  make dev"
	@echo "  MongoDB:  mongodb://localhost:27017/myapp_dev"
	@echo ""
	@echo "🔴 Production:"
	@echo "  Command:  make up"
	@if [ -f $(ENV_FILE_PROD) ]; then \
		MONGO_PORT=$$(grep "^MONGO_PORT=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		echo "  MongoDB:  localhost:$${MONGO_PORT:-27018} (Docker)"; \
	fi
	@echo ""
	@echo "🐳 Docker:"
	@docker --version 2>/dev/null || echo "  ❌ Docker not installed"
	@docker compose version 2>/dev/null || echo "  ❌ Docker Compose not installed"
	@echo ""
	@echo "📦 Node.js:"
	@node --version 2>/dev/null || echo "  ❌ Node not installed"
	@npm --version 2>/dev/null || echo "  ❌ npm not installed"
	@echo ""
	@echo "🌐 URLs:"
	@echo "  API:     http://localhost:$(PORT)"
	@echo "  Swagger: http://localhost:$(PORT)/api-docs"
	@echo "  Health:  http://localhost:$(PORT)/health"

# ============================================
# 🚀 SETUP (First Time Only)
# ============================================

setup: ## Complete setup (dev + prod)
	@echo "⚙️  Setting up project..."
	@make setup-dev
	@make setup-prod
	@echo ""
	@echo "╔══════════════════════════════════════════════════╗"
	@echo "║  ✅ Setup Complete!                             ║"
	@echo "╚══════════════════════════════════════════════════╝"
	@echo ""
	@echo "📋 What was created:"
	@echo "  ✅ .env.development (local development config)"
	@echo "  ✅ .env.production (Docker production config)"
	@echo "  ✅ node_modules (dependencies installed)"
	@echo ""
	@echo "🔵 Development:"
	@echo "  Command:  make dev"
	@echo "  MongoDB:  mongodb://localhost:27017/myapp_dev"
	@echo ""
	@echo "🔴 Production:"
	@echo "  1. Edit .env.production"
	@echo "  2. Change MONGO_PASSWORD"
	@echo "  3. Run: make env-secrets"
	@echo "  4. Copy secrets to .env.production"
	@echo "  5. Run: make up"

setup-dev: ## Setup development environment
	@echo "⚙️  Setting up development environment..."
	@if [ ! -f $(ENV_FILE_DEV) ]; then \
		if [ -f .env.development.example ]; then \
			cp .env.development.example $(ENV_FILE_DEV); \
			echo "✅ $(ENV_FILE_DEV) created from template"; \
		else \
			echo "⚠️  .env.development.example not found, creating basic config..."; \
			echo "NODE_ENV=development" > $(ENV_FILE_DEV); \
			echo "PORT=5000" >> $(ENV_FILE_DEV); \
			echo "MONGODB_URI=mongodb://localhost:27017/myapp_dev" >> $(ENV_FILE_DEV); \
			echo "JWT_SECRET=dev-secret-key" >> $(ENV_FILE_DEV); \
			echo "JWT_EXPIRE=7d" >> $(ENV_FILE_DEV); \
			echo "JWT_REFRESH_SECRET=dev-refresh-secret" >> $(ENV_FILE_DEV); \
			echo "JWT_REFRESH_EXPIRE=30d" >> $(ENV_FILE_DEV); \
			echo "RATE_LIMIT_WINDOW_MS=900000" >> $(ENV_FILE_DEV); \
			echo "RATE_LIMIT_MAX_REQUESTS=1000" >> $(ENV_FILE_DEV); \
			echo "CORS_ORIGIN=http://localhost:3000" >> $(ENV_FILE_DEV); \
			echo "LOG_LEVEL=debug" >> $(ENV_FILE_DEV); \
			echo "✅ $(ENV_FILE_DEV) created with defaults"; \
		fi; \
	else \
		echo "ℹ️  $(ENV_FILE_DEV) already exists"; \
	fi
	@npm install
	@echo "✅ Development environment ready!"
	@echo ""
	@echo "📋 Next: make dev"

setup-prod: ## Setup production environment
	@echo "⚙️  Setting up production environment..."
	@if [ ! -f $(ENV_FILE_PROD) ]; then \
		if [ -f .env.production.example ]; then \
			cp .env.production.example $(ENV_FILE_PROD); \
			echo "✅ $(ENV_FILE_PROD) created from template"; \
		else \
			echo "⚠️  .env.production.example not found, creating basic config..."; \
			echo "NODE_ENV=production" > $(ENV_FILE_PROD); \
			echo "PORT=5000" >> $(ENV_FILE_PROD); \
			echo "APP_CONTAINER_NAME=express-api" >> $(ENV_FILE_PROD); \
			echo "MONGO_CONTAINER_NAME=mongodb" >> $(ENV_FILE_PROD); \
			echo "MONGO_PORT=27018" >> $(ENV_FILE_PROD); \
			echo "MONGO_USERNAME=admin" >> $(ENV_FILE_PROD); \
			echo "MONGO_PASSWORD=CHANGE_THIS_PASSWORD" >> $(ENV_FILE_PROD); \
			echo "MONGO_DATABASE=myapp" >> $(ENV_FILE_PROD); \
			echo "MONGODB_URI=mongodb://admin:CHANGE_THIS_PASSWORD@mongodb:27017/myapp?authSource=admin" >> $(ENV_FILE_PROD); \
			echo "JWT_SECRET=CHANGE_THIS_SECRET" >> $(ENV_FILE_PROD); \
			echo "JWT_EXPIRE=7d" >> $(ENV_FILE_PROD); \
			echo "JWT_REFRESH_SECRET=CHANGE_THIS_REFRESH_SECRET" >> $(ENV_FILE_PROD); \
			echo "JWT_REFRESH_EXPIRE=30d" >> $(ENV_FILE_PROD); \
			echo "RATE_LIMIT_WINDOW_MS=900000" >> $(ENV_FILE_PROD); \
			echo "RATE_LIMIT_MAX_REQUESTS=100" >> $(ENV_FILE_PROD); \
			echo "CORS_ORIGIN=http://localhost:3000" >> $(ENV_FILE_PROD); \
			echo "LOG_LEVEL=error" >> $(ENV_FILE_PROD); \
			echo "✅ $(ENV_FILE_PROD) created with defaults"; \
		fi; \
		echo ""; \
		echo "⚠️  IMPORTANT: Update these in $(ENV_FILE_PROD):"; \
		echo "  1. MONGO_PASSWORD"; \
		echo "  2. JWT_SECRET (run: make env-secrets)"; \
		echo "  3. JWT_REFRESH_SECRET (run: make env-secrets)"; \
		echo "  4. MONGODB_URI (update with your MONGO_PASSWORD)"; \
	else \
		echo "ℹ️  $(ENV_FILE_PROD) already exists"; \
	fi
	@echo ""
	@echo "📋 Next steps:"
	@echo "  1. Edit $(ENV_FILE_PROD)"
	@echo "  2. Run: make env-secrets"
	@echo "  3. Run: make up"

install: ## Install npm dependencies
	npm install

# ============================================
# 🔵 DEVELOPMENT (Local - No Docker)
# ============================================

dev: ## Start development server (local MongoDB)
	@if [ ! -f $(ENV_FILE_DEV) ]; then \
		echo "❌ $(ENV_FILE_DEV) not found!"; \
		echo "Run: make setup-dev"; \
		exit 1; \
	fi
	@echo "🔵 Starting development (local MongoDB)..."
	@npm run dev

test: ## Run tests
	npm test

test-watch: ## Run tests in watch mode
	npm run test:watch

build-local: ## Build TypeScript locally
	npm run build

db-shell-dev: ## Open local MongoDB shell
	@echo "🐚 Opening local MongoDB shell..."
	@mongosh mongodb://localhost:27017/myapp_dev

# ============================================
# 🔴 PRODUCTION (Docker)
# ============================================

up: ## Start production services
	@if [ ! -f $(ENV_FILE_PROD) ]; then \
		echo "❌ $(ENV_FILE_PROD) not found!"; \
		echo "Run: make setup-prod"; \
		exit 1; \
	fi
	@echo "🚀 Starting production services..."
	@docker compose --env-file $(ENV_FILE_PROD) up -d
	@echo "✅ Services started!"
	@echo "📡 API: http://localhost:5000"
	@echo "📚 Docs: http://localhost:5000/api-docs"
	@echo "🗄️  MongoDB: localhost:27018"

down: ## Stop production services
	@echo "🛑 Stopping services..."
	@docker compose --env-file $(ENV_FILE_PROD) down
	@echo "✅ Services stopped!"

restart: ## Restart production services
	@echo "🔄 Restarting services..."
	@docker compose --env-file $(ENV_FILE_PROD) restart
	@echo "✅ Services restarted!"

stop: ## Stop services without removing
	@docker compose --env-file $(ENV_FILE_PROD) stop

build: ## Build Docker images
	@if [ ! -f $(ENV_FILE_PROD) ]; then \
		echo "❌ $(ENV_FILE_PROD) not found!"; \
		echo "Run: make setup-prod"; \
		exit 1; \
	fi
	@echo "🔨 Building Docker images..."
	@docker compose --env-file $(ENV_FILE_PROD) build

rebuild: ## Rebuild and restart production
	@echo "🔨 Rebuilding and restarting..."
	@docker compose --env-file $(ENV_FILE_PROD) down
	@docker compose --env-file $(ENV_FILE_PROD) up --build -d
	@echo "✅ Rebuild complete!"

up-build: ## Build and start services
	@echo "🔨 Building and starting services..."
	@docker compose --env-file $(ENV_FILE_PROD) up --build -d

# ============================================
# 📊 LOGS & MONITORING
# ============================================

logs: ## View production app logs
	@docker compose --env-file $(ENV_FILE_PROD) logs -f app

logs-db: ## View production MongoDB logs
	@docker compose --env-file $(ENV_FILE_PROD) logs -f mongodb

logs-all: ## View all production logs
	@docker compose --env-file $(ENV_FILE_PROD) logs -f

logs-tail: ## View last 100 lines of app logs
	@docker compose --env-file $(ENV_FILE_PROD) logs --tail=100 app

ps: ## List running containers
	@echo "📋 Running containers:"
	@docker compose --env-file $(ENV_FILE_PROD) ps

status: ## Show detailed service status
	@echo "📊 Service Status:"
	@docker compose --env-file $(ENV_FILE_PROD) ps
	@echo ""
	@echo "💾 Disk Usage:"
	@docker system df

health: ## Check API health
	@echo "🏥 Checking health..."
	@curl -s http://localhost:$(PORT)/health | jq 2>/dev/null || curl -s http://localhost:$(PORT)/health

ping: ## Ping the API
	@echo "🏓 Pinging API..."
	@curl -s http://localhost:$(PORT)/ | jq 2>/dev/null || curl -s http://localhost:$(PORT)/

stats: ## Show container resource usage
	@docker stats --no-stream

# ============================================
# 🗄️ DATABASE OPERATIONS
# ============================================

db-shell: ## Open production MongoDB shell
	@echo "🐚 Opening production MongoDB shell..."
	@MONGO_USER=$$(grep "^MONGO_USERNAME=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
	MONGO_PASS=$$(grep "^MONGO_PASSWORD=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
	docker compose --env-file $(ENV_FILE_PROD) exec mongodb mongosh -u $$MONGO_USER -p $$MONGO_PASS --authenticationDatabase admin

db-backup: ## Backup production database
	@echo "💾 Creating database backup..."
	@mkdir -p backups
	@MONGO_USER=$$(grep "^MONGO_USERNAME=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
	MONGO_PASS=$$(grep "^MONGO_PASSWORD=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
	docker compose --env-file $(ENV_FILE_PROD) exec -T mongodb mongodump -u $$MONGO_USER -p $$MONGO_PASS --authenticationDatabase admin --archive > backups/backup-$$(date +%Y%m%d-%H%M%S).archive
	@echo "✅ Backup created in backups/ directory"

db-restore: ## Restore database (FILE=backup-file)
	@if [ -z "$(FILE)" ]; then \
		echo "❌ Please specify FILE=backups/backup-xxx.archive"; \
		exit 1; \
	fi
	@echo "📥 Restoring database from $(FILE)..."
	@MONGO_USER=$$(grep "^MONGO_USERNAME=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
	MONGO_PASS=$$(grep "^MONGO_PASSWORD=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
	docker compose --env-file $(ENV_FILE_PROD) exec -T mongodb mongorestore -u $$MONGO_USER -p $$MONGO_PASS --authenticationDatabase admin --archive < $(FILE)
	@echo "✅ Database restored!"

db-drop: ## Drop database (DANGEROUS!)
	@echo "⚠️  WARNING: This will delete all data!"
	@read -p "Are you sure? [y/N] " -n 1 -r; \
	echo; \
	if [ "$$REPLY" = "y" ] || [ "$$REPLY" = "Y" ]; then \
		MONGO_USER=$$(grep "^MONGO_USERNAME=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		MONGO_PASS=$$(grep "^MONGO_PASSWORD=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		docker compose --env-file $(ENV_FILE_PROD) exec mongodb mongosh -u $$MONGO_USER -p $$MONGO_PASS --authenticationDatabase admin --eval "db.dropDatabase()"; \
		echo "✅ Database dropped!"; \
	fi

db-connection: ## Show MongoDB Compass connection strings
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "📱 MongoDB Compass Connection Strings:"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "🔵 Development: mongodb://localhost:27017/myapp_dev"
	@echo ""
	@if [ -f $(ENV_FILE_PROD) ]; then \
		MONGO_USER=$$(grep "^MONGO_USERNAME=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		MONGO_PASS=$$(grep "^MONGO_PASSWORD=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		MONGO_PORT=$$(grep "^MONGO_PORT=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		MONGO_DB=$$(grep "^MONGO_DATABASE=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		echo "🔴 Production:  mongodb://$$MONGO_USER:$$MONGO_PASS@localhost:$$MONGO_PORT/$$MONGO_DB?authSource=admin"; \
	fi
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ============================================
# 🐚 CONTAINER SHELL ACCESS
# ============================================

shell: ## Open shell in production app container
	@echo "🐚 Opening shell in app container..."
	@docker compose --env-file $(ENV_FILE_PROD) exec app sh

# ============================================
# ⚙️ ENVIRONMENT & CONFIGURATION
# ============================================

env-secrets: ## Generate JWT secrets
	@echo "🔐 Generated Secrets (copy to .env.production):"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "JWT_SECRET=$$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")"
	@echo "JWT_REFRESH_SECRET=$$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

env-show: ## Show production environment variables (masked)
	@echo "📋 Production Environment Variables:"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@if [ -f $(ENV_FILE_PROD) ]; then \
		MONGO_USER=$$(grep "^MONGO_USERNAME=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		NODE_ENV=$$(grep "^NODE_ENV=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		PORT=$$(grep "^PORT=" $(ENV_FILE_PROD) 2>/dev/null | cut -d '=' -f2); \
		echo "MONGO_USERNAME:    $$MONGO_USER"; \
		echo "MONGO_PASSWORD:    ********"; \
		echo "PORT:              $$PORT"; \
		echo "NODE_ENV:          $$NODE_ENV"; \
	else \
		echo "❌ $(ENV_FILE_PROD) not found"; \
	fi
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ============================================
# 🧹 CLEANUP
# ============================================

clean: ## Remove all containers, volumes, and images
	@echo "🧹 Cleaning up Docker resources..."
	@docker compose --env-file $(ENV_FILE_PROD) down -v --rmi all --remove-orphans
	@echo "✅ Cleanup complete!"

clean-volumes: ## Remove only volumes (keep images)
	@echo "🧹 Removing volumes..."
	@docker compose --env-file $(ENV_FILE_PROD) down -v
	@echo "✅ Volumes removed!"

prune: ## Remove all unused Docker resources
	@echo "🧹 Pruning Docker system..."
	@docker system prune -a --volumes -f
	@echo "✅ Docker system pruned!"

prune-images: ## Remove unused Docker images
	@docker image prune -a -f

prune-volumes: ## Remove unused Docker volumes
	@docker volume prune -f

# ============================================
# 🔧 UTILITIES (Less Common)
# ============================================

lint: ## Lint code
	@npm run lint 2>/dev/null || echo "⚠️  Lint script not configured in package.json"

format: ## Format code
	@npm run format 2>/dev/null || echo "⚠️  Format script not configured in package.json"

update: ## Update npm dependencies
	@npm update

outdated: ## Check for outdated packages
	@npm outdated

# ============================================
# 📦 PRODUCTION VARIANTS (Alternative)
# ============================================

prod: ## Alternative production start
	@echo "🏭 Starting production environment..."
	@docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build 2>/dev/null || make up
	@echo "✅ Production environment started!"

prod-logs: ## Alternative production logs
	@docker compose -f docker-compose.yml -f docker-compose.prod.yml logs -f 2>/dev/null || make logs

prod-down: ## Alternative production stop
	@docker compose -f docker-compose.yml -f docker-compose.prod.yml down 2>/dev/null || make down
