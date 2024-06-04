import { merge } from "../merge"

describe('merge function', () =>{
    it('should merge three sorted arrays and return a sorted array', () =>{
        const collection1 = [1,3,6,7,13]
        const collection2 = [11,9,8,5,2]
        const collection3 = [4,6,8,10,12]

        const result = merge(collection1,collection2,collection3)

        expect(result).toEqual([1,2,3,4,5,6,6,7,8,8,9,10,11,12,13])
    })
})
