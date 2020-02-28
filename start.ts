import DemoServer from './src/DemoServer';

if (process.argv[2] !== 'test') {
  const server = new DemoServer();
  server.start(3001);
}
  else {

}