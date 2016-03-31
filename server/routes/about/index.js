import Router from 'koa-router';

const about = new Router();

async function route(context) {
  context.body = require('../../views')({
    title: `${process.env.NAME} - About`,
    content: `
    <h1>Univera - About Page</h1>
    <hr/>
    <h2>This is a page for test of individual route handling.</h2>
    `
  });
}

export default about.get('about', '/about', route);
