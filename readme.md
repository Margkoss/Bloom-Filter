# Bloom Filter

This repository contains my JavaScript implementation of the bloom filter data stracture

## What it is
A Bloom filter is a space-efficient probabilistic data structure,that is used to test whether an element is a member of a set. False positive matches are possible, but false negatives are not – in other words, a query returns either "possibly in set" or "definitely not in set". Elements can be added to the set, but not removed. Read more about [bloom filters](https://en.wikipedia.org/wiki/Bloom_filter)

## Usage
Require the class

```javascript 
const BloomFilter = require('BloomFilter');
```

Instantiate a new bloom filter specifying its size 

```javascript 
let bloomFilter = new BloomFilter(300);
```

The methods to insert an element into the store is `insert` and to check if it is in the store is `contains`

```javascript
//Insert the string cat in the store
bloomFilter.insert("cat");
//Check if string dog is inserted in the store
let contained = bloomFilter.contains("dog");
```

## Instalation

Clone this repository with git and install the dependencies
```
git clone <this repo>
npm install
```

You can run tests by
```
npm test
```