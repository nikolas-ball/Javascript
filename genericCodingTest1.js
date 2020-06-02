//generic coding test practice

//Given a 2d grid map of ‘1’s (land) and ‘0’s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//Example 1:

//Input:

//11110
//11010
//11000
//00000
//Output: 1

//Example 2:

//Input:

//11000
//11000
//00100
//00011
//Output: 3


//GOALS:
//Traverse the map
//Count any islands.
//Mark them as already visited so you don’t count them again. 
//==========================================================================================================
//begin

//First, we have to have some way to traverse the map looking for a possible island.
// Any place where there’s a “1” is the border of an island. 
//Second, we would want to be able to count that entire island. 
//But, third, we’d only want to count that island once.
// So we want to do something to make sure that if we encounter a border of the same island later,
// we wouldn’t count it again.
/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function(grid) {
//There’s two ways (at least) to mark the island as already counted.
// The first is to visit all the squares with “1” that are connected to the “1” we’ve found, and set them to “0”.
// This modifies the grid/map/whatever-you-want-to-call-it (the original input).
    let markIsland = function(grid, x, y, visited) {
      if(x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
        return;
      }
      if(visited[x][y] === true) {
        return;
      }
      visited[x][y] = true;
      if(grid[x][y] === '0') {
        return;
      }
      markIsland(grid, x - 1, y, visited);
      markIsland(grid, x + 1, y, visited);
      markIsland(grid, x, y - 1, visited);
      markIsland(grid, x, y + 1, visited);
    };
    
      let visited = [];
      for(let i = 0; i < grid.length; i++) {
        visited[i] = [];
      }
      let count = 0;
      for(let x = 0; x < grid.length; x++) {
        for(let y = 0; y < grid[x].length; y++) {
          if(!visited[x][y] && grid[x][y] === '1') {
             //if that is the case, then count the island
            //To count the island, we only need a counter, but we also need to insure that we don’t count it again later. 
            count++;
            markIsland(grid, x, y, visited);
          }
          visited[x][y] = true;
        }
      }
      return count;
    };
    //The markIsland function is a depth-first search that recursively
    // visits all adjacent squares to the current square, and changes any that are “1” to “0.”
    // The first few lines make sure that it doesn’t go “out of bounds” of the array.
    // The next few lines make sure we don’t continue visiting adjacent squares after we’ve
    // hit a zero. The rest of it is the recursive depth-first search for more “1”‘s to zero out.