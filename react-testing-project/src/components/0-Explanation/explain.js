// explain the difference between getBy, findBy, queryBy:

// getBy
//  throws an error if the element isn’t found—use it when the element must be there immediately.

// queryBy
// returns null if the element isn’t found—use it when absence is expected or optional.

// findBy
// returns a promise and waits for the element—use it for async rendering or delayed appearance.
