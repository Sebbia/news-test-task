# Sample news Web-client

## Development

To build and launch a project with an integrated web server run this:
```
npm install && npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Building

The API server base url can be overriden with `REACT_APP_API_BASE_URL` environment variable as shown in the example below.

```
npm ci
export REACT_APP_API_BASE_URL=http://api_server_url_and_port
npm build
```

Build results can be found in `/build` folder. 