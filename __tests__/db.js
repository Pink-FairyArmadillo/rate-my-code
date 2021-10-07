const db = require('../models/models.js');
const path = require('path');
const supertest = require('supertest');

describe('db unit tests', () => {
    
  beforeAll((done) => {
    const query = `
      DROP TABLE users;
      CREATE TABLE users (
        _id SERIAL PRIMARY KEY,
        username varchar(255),
        password varchar(255)
        );
      `
    db.query(query);
    done();
  })

  afterAll((done) => {
    const query = `
       DELETE  
       FROM users; 
      `
    db.query(query);
    done();   
  })

//Test whether addUser adds a valid user and returns error if invalid
describe('addUser'), () => {
  it('adds valid user to db', () => {
    const query = `
    INSERT INTO users
   `


  })
}

//test whether addComment adds valid comment and returns error if invalid

//Test whether getPost retrieves correct post with associated comments


})