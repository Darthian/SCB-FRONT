// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // SERVER_URL: 'https://scb-back-balanceador-820761814.us-east-1.elb.amazonaws.com/SCB-Back/',
  // SERVER_URL: 'https://scb-back-balanceador-820761814.us-east-1.elb.amazonaws.com/SCB-Back/',
  // SERVER_LOCAL: 'https://scb-back-balanceador-820761814.us-east-1.elb.amazonaws.com/SCB-Back/',
  SERVER_URL: 'http://localhost:8080/',
  SERVER_LOCAL: 'http://localhost:8080/',
  ClientUrl: 'http://localhost:4200/'
};
