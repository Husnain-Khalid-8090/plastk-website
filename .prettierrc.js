module.exports = {
  singleQuote: true,
  // endOfLine: 'auto',
  endOfLine: false,
  semi: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
