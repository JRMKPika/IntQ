//possibly adjust test in package json
// "test": "echo \"Error: no test specified\" && exit 1",

const fs = require('fs');
const path = require('path');
const request = require('supertest');
const jest = require('jest');
// const {describe} = require('jest');
const {describe} = require('superjest');
const {it} = require('jest')
const mocha = require('mocha');

//to test all endpoints joins them together...not sure if endpoints written correctly yet or exactly how working
// const testJsonFile = path.join(__dirname, '..', 'server', 'db', 'index.html')
const testJsonFile = path.join(__dirname, '..', 'server', 'index.html')



const server = 'http://localhost:3000';

describe('Static files', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content', () => request(server))
        .get('/')
        //don't really get the regex
        .expect('Content-Type', /text\/html/)
        .expect(200)
    });
  });
})