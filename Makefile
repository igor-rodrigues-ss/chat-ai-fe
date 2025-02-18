.install-hook:
	@echo "make lint" > .git/hooks/pre-commit
	@chmod +x .git/hooks/pre-commit

format:
	@npx prettier . --write

lint:
	@npx eslint . --fix

install-dev: .install-hook
	@npm install

start:
	@npm run dev
