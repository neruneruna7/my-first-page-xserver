.PHONY: build

build:
	@echo 'starting $@'
	npm run build
	cp -r ./dist/* ../../public_html/
	@echo 'finished $@'