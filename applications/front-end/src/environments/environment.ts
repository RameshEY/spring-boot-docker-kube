// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  name: "dev",

  messageServiceURLs: [{url: "http://localhost:8090/messages", source: "mongodb", healthUrl: "http://localhost:8090/health"},{url: "http://localhost:8100/messages", source: "mariadb", healthUrl: "http://localhost:8100/health"}]
  //messageServiceURLs: [{url: "http://192.168.99.100/mongo/messages", source: "mongodb"},{url: "http://192.168.99.100/mariadb/messages", source: "mariadb"}, {url: "http://192.168.99.100/cassandra/messages", source: "cassandra"}]
  //messageServiceURLs: []
};
