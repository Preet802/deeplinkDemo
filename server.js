require('./mocks/endpoints');
var shifu = require('@walmart/shifu');

shifu.start({
  host: 'localhost',
  mockedDirectory: './mocks',
  port: 3000,
  project: 'SparkMock'
});
