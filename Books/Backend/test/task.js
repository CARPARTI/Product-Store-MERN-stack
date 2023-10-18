process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
let chai = require("chai");
let chaiHttp = require("chai-http");
//const { response } = require("express");
let server = require("../routes/book-routes");
const booksController = require("../controllers/books-controller");

// Assertion Style
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe("Task API", () => {
    /**
     * Test the GET route
     */
    describe("GET all Books", () => {       
        it("It should GET all properties of book", async () => {
            chai.request(server)
                .get("/",booksController.getAllBooks)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("array");
                    response.body.lenght.should.be.eq(5)
                    done();
                })
        })//.timeout(10000);

        it("It should not GET properties of book", async () => {
            chai.request(server)
                .get("/s",booksController.getAllBooks)
                .end((err, response) => {
                    response.should.have.status(404);
                    //expect(response).to.have.status(200)
                    done();
                });
        })

    });

    /**
     * Test the GET by ID route
     */
    
    describe("GET all Books by ID", () => {       
        it("It should GET all properties of book by ID", async () => {
            chai.request(server)
                .get("/:id", booksController.getById)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property('id');
                    done();
                })
        })

        it("It should not GET all properties of book by ID", async () => {
            chai.request(server)
                .get("/:ids", booksController.getById)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })
    /**
     * Test the POST route
     */

     describe("POST all Books", () => {       
        it("It should POST all properties of book", async (done) => {
            
            let books = {
                name:"Zelys",
                author:"Alex Vass",
                description:"First Book",
                price:5120,
                available:true
            }

            chai.request(server)
                .post("/:id", booksController.addBook)
                .send(books)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a("object");
                    response.body.should.have.property('id');
                    response.body.should.have.property('name').eq("Zelys");
                    response.body.should.have.property('author').eq("Alex Vass");
                    response.body.should.have.property('description').eq("First Book");
                    response.body.should.have.property('price').eq(5120);
                    response.body.should.have.property('available').eq(true);
                    done();
                })
        })

        it("It should not POST all properties of book by ID", async (done) => {
            chai.request(server)
                .post("/:id", booksController.addBook)
                .send(books)
                .end((err, response) => {
                    response.should.have.status(500);
                    done();
                })
        })
    })

    /**
     * Test the PUT route
     */

    describe("PUT all Books", () => {       
        it("It should PUT all properties of book", async () => {
            let taskId = "62351bb30df9c35ced2c6438";
            let books = {
                name:"Zelys changed",
                author:"Alex Vass",
                description:"First Book",
                price:5120,
                available:false
            }

            chai.request(server)
                .put("/:id", booksController.updateBook + taskId)
                .send(books)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a("object");
                    response.body.should.have.property('id');
                    response.body.should.have.property('name').eq("Zelys changed");
                    response.body.should.have.property('author').eq("Alex Vass");
                    response.body.should.have.property('description').eq("First Book");
                    response.body.should.have.property('price').eq(5120);
                    response.body.should.have.property('available').eq(false);
                    done();
                })
        })

        it("It should not PUT all properties of book by ID", async (done) => {
            chai.request(server)
                .put("/:id", booksController.updateBook)
                .send(books)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })

    /**
     * Test the DELETE route
     */

     describe("DELETE a Books", () => {       
        it("It should DELETE properties of a book", async () => {

            chai.request(server)
                .delete("/",booksController.deleteBook)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                })
        })

        it("It should not DELETE properties of a book", async () => {
            
            chai.request(server)
                .delete("/",booksController.deleteBook)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })
});
