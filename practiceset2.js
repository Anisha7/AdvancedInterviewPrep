// Notes:
// 1. Triplets: sort + double pointer
// 2. Ways to sum: DP, I wrote a two-dimensional dp when I was preparing, 
// but it can actually be optimized into one. Wei's

// Questions:
// 1. Triplet, that is, to find the combination of all three numbers for the array, 
// and the sum is less than or equal to the target.
// 2. Prime Factor Visitation, that is, give two arrays, one is composed of 0, 1 
// elements to represent the state of the bulb, and the other array nums, find 
// all the prime factors of the nums element, and then locate all the positions 
// of the bulb array that are integer multiples of the prime factor The bulb turns 
// over and returns to its final state.
// 3. Birthday Card Collection
// --- Each card has a unique id (starting from 1), and the cost is equal to its id. 
// A already has some cards. B wants to buy cards that he doesn't have. The cost of 
// the cards must be less than or equal to his budget. At the same time, buy as many 
// cards as possible. Returns the id of the cards bought by B.
// --- input: A_collection_array, B_budget
// --- output: B_collection_array
// 4. Ways to Sum
// --- Given a number total and a number weight, calculate how many ways to 
// achieve the sum of several numbers (1---weight) total
// --- Example: total = 8, weight = 2 => res = 5
// --- [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1