import { merge } from "../merge" //import merge function from merge.ts

describe('merge function', () =>{ //write unit test for merge function
    it('should merge three sorted arrays and return a sorted array', () =>{
        const collection1 = [1,3,6,7,9] //given collection1 as array of number sorted by ASC
        const collection2 = [10,9,8,5,2] //given collection2 as array of number sorted by DES
        const collection3 = [1,2,4,11,12] //given collection3 as array of number sorted by ASC

        const result = merge(collection1,collection2,collection3) //given result as a result from merge function

        expect(result).toEqual([1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12]) //expect result to equal to assumed output
    })
})
