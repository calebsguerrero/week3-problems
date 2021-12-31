const assert = require("assert");
const sort = require("../problems/02-recursive-sort.js");

describe("sort()", function () {
    it("should return an empty array if an empty array is passed in", function () {
        assert.deepEqual(sort([]), []);
    });

    it("should return a new array sorted from lowest to highest", function () {
        assert.deepEqual(sort([9]), [9]);
        assert.deepEqual(sort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
        assert.deepEqual(sort([14, 5, 10, 6, 3, 4, 21, 16, 9]), [3, 4, 5, 6, 9, 10, 14, 16, 21]);
    });
});
