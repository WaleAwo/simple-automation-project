const axios = require('axios').default;

test("test for an API - retrieving data", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');

    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.data['name']).toEqual("Leanne Graham");
    expect(response.data['company']['bs']).toEqual("harness real-time e-markets");
});

test("test for an API - submitting data", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        title: "My blog post title",
        body: "This is the text of my latest blog post."
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response.data);
    expect(response.status).toBe(201);
    expect(typeof response.data['id']).toBe('number');
});