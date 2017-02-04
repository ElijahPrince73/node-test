const request = require('supertest');
const expect = require('expect');

var app = require("./server").app;

it('should return hello world response' , (done) =>{
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page Not Found'
      });
    })
    .end(done);
})

it('should list all friends and age' , (done) =>{
  request(app)
  .get('/users')
  .expect((res) => {
    expect(res.body).toInclude({
      name:'Ana',
      age:25
    });
  })
  .end(done)
})
