const should = require("chai").should();
const expect = require("chai").expect;
const BloomFilter = require("../BloomFilter");


describe("Bloom filter test", ()=>{

    beforeEach(() => {
        bf = new BloomFilter();
    });

    it("Should be an object",()=>{
        bf.should.be.an("object");
    });

    it("should have size and storage properties", ()=>{
        bf.size.should.be.a("number");
        bf.storage.should.be.a("object");
    });

    it("Should have methods insert and contains getHashValues", ()=>{
        bf.insert.should.be.a("function")
        bf.contains.should.be.a("function")
        bf.getHashValues.should.be.a("function")
    });

    it("Storage interface should have getter, setter and dump", ()=>{
        bf.storage.getValue.should.be.a("function");
        bf.storage.setValue.should.be.a("function");
        bf.storage.dump.should.be.a("function");
    });

    it("getHashValues should return two hash values", ()=>{
        bf.getHashValues('asdasd').length.should.equal(2);
    });

    it("Should produce true for all inserted values and false for non inserted", ()=>{

        const animals = [
            "cat",
            "dog",
            "horse",
            "duck",
            "mouse"
        ]

        animals.forEach(animal => bf.insert(animal));

        bf.contains("cat").should.be.true;
        bf.contains("dog").should.be.true;
        bf.contains("horse").should.be.true;
        bf.contains("duck").should.be.true;
        bf.contains("mouse").should.be.true;

        bf.contains("Margkoss").should.be.false;
        
    });
});