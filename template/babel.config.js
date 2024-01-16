function babelConfig(api) {
  if (api) {
    api.cache(false);
  }
  const presets = ["module:@react-native/babel-preset"];
  const plugins = [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          tests: ["./tests/"],
          components: "./src/views/components",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ];
  const env = {
    production: {
      plugins: ["transform-remove-console"],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
}

module.exports = babelConfig;
