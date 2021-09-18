const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-cors'));

let p1 = {
  name: "TVS RTR 2001",
  price: 164000,
  quantity: 1,
  productPic: "https://images-na.ssl-images-amazon.com/images/I/61FMbYqZVxL._SY355_.jpg",
  limitedProduct: false
}
let p2 = {
  name: "NS  200",
  price: 174000,
  quantity: 5,
  productPic: "https://imgd.aeplcdn.com/1200x900/bw/models/tvs-apache-rtr-200-4v-single-channel-abs--bs-vi20200922135525.jpg",
  limitedProduct: true
}
const mockProductDB = [p1, p2];

fastify.get('/product', function (request, reply) {
  const { query = '' } = request.query;
  reply.send({
    status: 'successful',
    data: mockProductDB.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
  });
});

fastify.post('/product', function (request, reply) {
  let newProduct = {
    name: request.body.name,
    price: request.body.price,
    quantity: request.body.quantity,
    productPic: request.body.productPic,
    limitedProduct: request.body.limitedProduct
  }
  mockProductDB.push(newProduct);
  reply.send({ status: 'created', data: newProduct.name });
});

fastify.get('/products', function (request, reply) {

  reply.send({
    status: 'successful',
    data: mockProductDB
  });
});

fastify.listen(3000);