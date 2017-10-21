var supertest = require('supertest'),
    chai = require('chai'),
    should = require('should'),
    assert = require('assert'),
    app = require('../app/./app.js');

var request = supertest(app)
var expect = chai.expect;

describe('GET /setSecret/:number', function() {

    it('should return code 200', function(done) {
        request.get('/setSecret/1234')
            .expect(200)
            .end(function(err, res){
  		    		if (err) return done(err);
  					  done(err);
  			    });
    });

    it('should return a Content-Type application/json', function(done) {
        request.get('/setSecret/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  					  done(err);
  			    });
    });

    it('should return a correct message Json Object', function(done) {
        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  		    		should.not.exist(err);
  		    		should.exist(res);
  		    		res.body.should.be.an.Object;
  		    		should.exist(res.body.message);
  		    		done();
  			    });
    });

});

describe('GET /guess/:number', function() {
    it('should return code 200', function(done) {
        request.get('/guess/1234')
            .expect(200)
            .end(function(err, res){
  		    		if (err) return done(err);
  					       done();
  			    });
    });

    it('should return a Content-Type application/json', function(done) {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  					  done(err);
  			    });
    });

    it('should return a correct result Json Object', function(done) {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  		    		should.not.exist(err);
  		    		should.exist(res);
  		    		res.body.should.be.an.Object;
  		    		should.exist(res.body.result);
  		    		done(err);
  			    });
    });

    it('should guess the correct number', function(done) {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  		    		should.not.exist(err);
  		    		should.exist(res);
  		    		res.body.should.be.an.Object;
  		    		should.exist(res.body.result);
              assert.equal('XXXX',res.body.result);
  		    		done(err);
  			    });
    });
});
