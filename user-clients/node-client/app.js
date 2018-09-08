const { MatrixManager } = require('./MatrixManager.js')

const matrix = new MatrixManager()

matrix.clearQueue()


// Write your code here!
// all functions return a promise.
// example:

// matrix.setTile({x: 500, y: 600, c: "D35400"})
//  .then(resp => console.log(resp))
 
 var i;
 let start = {x: 460, y: 310, c: "D35400"}

for(start.y; start.y <= 499; start.y++){ 
console.log(start.y)
   for (start.x; start.x <= 485; start.x++) { 
      matrix.setTile(start)
      .then(resp => console.log(resp))
      // start.x +=1
      // obj.y +=1
      
   }
   start.x = 460
}





// matrix.getTile({x:500,y:400})
// .then(resp => console.log(resp))

//  x 458
//  y 310

//  x 485
//  y 335