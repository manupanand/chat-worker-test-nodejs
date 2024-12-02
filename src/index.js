export default {
    async fetch(request) {
      const { method, url } = request;
      const pathname = new URL(url).pathname;
  
      if (method === 'GET' && pathname === '/hello') {
        return new Response('Hello, GET request received!', {
          headers: { 'Content-Type': 'text/plain' },
        });
      }
  
      if (method === 'POST' && pathname === '/data') {
        const body = await request.json();
        return new Response(`POST request received with data: ${JSON.stringify(body)}`, {
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      // Default 404 response
      return new Response('Not Found', { status: 404 });
    },
  };
  