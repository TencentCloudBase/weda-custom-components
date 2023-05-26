module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.wxss',
      options: { parser: 'css' },
    },
    {
      files: '*.wxml',
      options: {
        parser: 'html',
        printWidth: 400,
      },
    },
    {
      files: '*.wxs',
      options: { parser: 'espree' },
    },
  ],
};
