
test: node_modules
	@node_modules/hydro/bin/hydro test/*.test.js \
		--setup test/hydro.conf.js

node_modules: package.json
	@packin install \
		--meta package.json \
		--folder node_modules

.PHONY: test
