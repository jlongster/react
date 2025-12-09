// Simple test script to verify the React build works
const React = require('./build/node_modules/react/cjs/react.development.js');
const ReactDOMServer = require('./build/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js');

// Test React.createElement
const element = React.createElement('h1', null, 'Hello from the built React!');

// Render to string using ReactDOMServer
const html = ReactDOMServer.renderToString(element);

console.log('React version:', React.version);
console.log('Rendered HTML:', html);
console.log('\nBuild test successful!');
