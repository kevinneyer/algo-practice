const expect = require('chai').expect 
const assert = require('chai').assert
const topKFrequentWords = require('../hashMap/topKFrequentWords')

describe('topKFrequentWords', function(){
    it('Given a non-empty list of words, return the k most frequent elements', function(){
        assert(topKFrequentWords(["i", "love", "my", "cat", "cat", "love"], 2), ["love", "cat"])
    })
}) 