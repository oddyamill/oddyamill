export const onRequest = () => new Response('I\'m a teapot', { 
  status: 418,
  headers: { 'Access-Control-Allow-Origin': '*' },
});
