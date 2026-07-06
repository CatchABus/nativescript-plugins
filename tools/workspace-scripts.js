module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				debug: {
					script: 'nx run demo:debug',
					description: '⚆  Debug  ',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@nativescript-community/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nativescript-community/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nativescript-community': {
			// @nativescript-community/ui-neumorphiclayout
			'ui-neumorphiclayout': {
				build: {
					script: 'nx run ui-neumorphiclayout:build.all',
					description: '@nativescript-community/ui-neumorphiclayout: Build',
				},
			},
			// @nativescript-community/ui-htmlcanvasapi
			'ui-htmlcanvasapi': {
				build: {
					script: 'nx run ui-htmlcanvasapi:build.all',
					description: '@nativescript-community/ui-htmlcanvasapi: Build',
				},
			},
			// @nativescript-community/ui-constraintlayout
			'ui-constraintlayout': {
				build: {
					script: 'nx run ui-constraintlayout:build.all',
					description: '@nativescript-community/ui-constraintlayout: Build',
				},
			},
			// @nativescript-community/nordic-dfu
			'nordic-dfu': {
				build: {
					script: 'nx run nordic-dfu:build.all',
					description: '@nativescript-community/nordic-dfu: Build',
				},
			},
			// @nativescript-community/dns-lookup
			'dns-lookup': {
				build: {
					script: 'nx run dns-lookup:build.all',
					description: '@nativescript-community/dns-lookup: Build',
				},
			},
			// @nativescript-community/ui-maplibre
			'ui-maplibre': {
				build: {
					script: 'nx run ui-maplibre:build.all',
					description: '@nativescript-community/ui-maplibre: Build',
				},
			},
			// @nativescript-community/ui-jsx
			'ui-jsx': {
				build: {
					script: 'nx run ui-jsx:build.all',
					description: '@nativescript-community/ui-jsx: Build',
				},
			},
			'build-all': {
				script: 'nx run-many --target=build.all --all',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'ui-neumorphiclayout': {
				script: 'nx run ui-neumorphiclayout:focus',
				description: 'Focus on @nativescript-community/ui-neumorphiclayout',
			},
			'ui-htmlcanvasapi': {
				script: 'nx run ui-htmlcanvasapi:focus',
				description: 'Focus on @nativescript-community/ui-htmlcanvasapi',
			},
			'ui-constraintlayout': {
				script: 'nx run ui-constraintlayout:focus',
				description: 'Focus on @nativescript-community/ui-constraintlayout',
			},
			'nordic-dfu': {
				script: 'nx run nordic-dfu:focus',
				description: 'Focus on @nativescript-community/nordic-dfu',
			},
			'dns-lookup': {
				script: 'nx run dns-lookup:focus',
				description: 'Focus on @nativescript-community/dns-lookup',
			},
			'ui-maplibre': {
				script: 'nx run ui-maplibre:focus',
				description: 'Focus on @nativescript-community/ui-maplibre',
			},
			'ui-jsx': {
				script: 'nx run ui-jsx:focus',
				description: 'Focus on @nativescript-community/ui-jsx',
			},
			reset: {
				script: 'nx g @nativescript/plugin-tools:focus-packages',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
