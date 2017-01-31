const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () =>{
  var res = utils.add(33,11);


expect(res).toBe(44).toBeA('number')
  // if (res !== 44){
  //   throw new Error(`Expected 44, but got ${res}`)
  // }
});


it('Should square a number' , () => {
  var res = utils.square(4)

expect(res).toBe(16).toBeA('number')
})

it('should varify first and last name are set' , () =>{
 var user = {location:'Las Vegas', age:20};
 var res = utils.setName(user, 'Elijah Prince');

 expect(res).toInclude({
   firstName:'Elijah',
   lastName:'Prince'
 });

})

// it('Should expect some values' , () => {
//   // expect(12).toNotBe(11);
//   // expect({name:'Elijah'}).toEqual({name:'Elijah'})
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name:'Eliah',
//     age:20,
//     location:'Las Vegas'
//   }).toInclude({
//     age:20
//   })
// });
