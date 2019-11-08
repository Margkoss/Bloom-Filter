const mmh = require('murmurhash').v3;
const fnv = require('fnv-plus').hash;


class BloomFilter{

    /**
     * 
     * @param {number} size - The size of the bloom filter storage
     */
    constructor(size = 100){
        //Larger arrays, reduce the likelihood of false positives
        this.size = size;
        this.storage = this.createStorage(size);
    }

    /**
     * 
     * @param {string} item - Item to insert into storage
     */
    insert(item){
        const hashValues = this.getHashValues(item);
        
        hashValues.forEach(element => {
            this.storage.setValue(Number(element));
        });
    }

    /**
     * 
     * @param {string} item - Item to check if contained
     * @returns {boolean}
     */
    contains(item){
        const hashValues = this.getHashValues(item);

        for(let i = 0; i < hashValues.length; i++){
            if(!this.storage.getValue(hashValues[i])){
                return false;
            }
        }

        return true;

    }

    /**
     * Creates data storage for filter
     * 
     * @param {number} size - Size of the data storage
     * @returns {object} 
     */
    createStorage(size){

        //Initialize all indeces to false
        const storage = new Array(size).fill(false);
        
        return {
            getValue(i){
                return storage[i];
            },
            setValue(i){
                storage[i] = true;
            },
            dump(){
                return storage;
            }
        };

    }

    /**
     * Runs hash functions and returns array of results
     * 
     * @param {string} item - String to be hashed
     * @returns {number[]}
     */
    getHashValues(item){

        return [
            Math.abs(fnv(item).dec() % this.size),
            Math.abs(mmh(item) % this.size)
        ]

    }

}

module.exports = BloomFilter;