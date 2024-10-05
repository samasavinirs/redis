const client = require('./client');

async function init(params) {
    await client.set('user:4', 'Samaagain')
    await client.set('msg:4', 'Hi from mode.js')
    const result = await client.get('user:3');
    console.log('Result -> ', result)
    
    //const result1 = await client.get('msg:4');
    //console.log('Result -> ', result1)
    client.expire("msg:4", 10);
    //await client.set
}

init();