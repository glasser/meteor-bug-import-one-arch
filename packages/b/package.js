Package.describe({
  name: 'b',
  version: '0.0.1',
  summary: '',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
  api.use('ecmascript');
  api.addFiles('b.js');
  api.export('name');
});
