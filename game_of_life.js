var rows = 50,
    grid = createArray(rows),
    tempGrid = createArray(rows),
    neighborTally = 0;


function createRowOfCells(num){
    var rowOfCellsArray = [];
    
    for(var i=0; i<num; i++){
        rowOfCellsArray[i] = 1;
    }
    
    return rowOfCellsArray;
}

var rowOfCells = createRowOfCells(rows);

function createArray(num){
    var rowOfCellsArrayGrid = [];
    
    for(var i=0; i<num; i++){
        rowOfCellsArrayGrid[i] = createRowOfCells(num);
    }
    
    return rowOfCellsArrayGrid;
}

//create starting shapes
grid[5][7] = 0; 
grid[6][5] = 0;
grid[6][7] = 0;
grid[7][6] = 0;
grid[7][7] = 0;

function calculateNeighbors(){
    for(var i=0; i<rows; i++){
        for(var j=0; j<rows; j++){
            if((i>0 && j>0) && (i<rowOfCells.length-1 && j<rowOfCells.length-1)){
                    if(grid[i-1][j-1] == 0){
                        neighborTally++;    
                    }
                    if(grid[i-1][j] == 0){
                        neighborTally++;    
                    }
                    if(grid[i-1][j+1] == 0){
                        neighborTally++;    
                    }
                    if(grid[i][j-1] == 0){
                        neighborTally++;    
                    }
                    if(grid[i][j+1] == 0){
                        neighborTally++;    
                    }
                    if(grid[i+1][j-1] == 0){
                        neighborTally++;    
                    }
                    if(grid[i+1][j] == 0){
                        neighborTally++;    
                    }
                    if(grid[i+1][j+1] == 0){
                        neighborTally++;    
                    }
                
                    //set next iteration based on tally
                    if(grid[i][j] == 1){
                        if(neighborTally == 3){
                            tempGrid[i][j] = 0;
                        } else {
                            tempGrid[i][j] = 1;
                        }
                    }
                
                    if(grid[i][j] == 0){
                       if(neighborTally<2){
                            tempGrid[i][j] = 1;
                        }
                        if(neighborTally == 2 || neighborTally == 3){
                            tempGrid[i][j] = 0;
                        }
                        if(neighborTally>3){
                            tempGrid[i][j] = 1;
                        } 
                    }
                    neighborTally = 0;
            }
        }
    }
}

//updates grid and displays
function magicUpdate(){
    display(grid);
    
    // pre: grid is array of arrays 
    // pre: tempGrid is array of arrays
    calculateNeighbors();
    //post: grid is the same
    //post: tempGrid is grid iterated
    
    grid = tempGrid;
}

// displays a given grid to the user
function display(grid)
{
    for(var i=0; i<rows; i++){
        for(var j=0; j<rows; j++){
            document.write(grid[i][j]);
        }
        document.write('<br>')
    }
}


setInterval(magicUpdate, 2000);








