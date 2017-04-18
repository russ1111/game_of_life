
function createArrayOfOnes(num){
    var newArray = [];
    
    for(var i=0; i<num; i++){
        newArray[i] = 1;
    }
    
    return newArray;
}

var rowOfCells = createArrayOfOnes(10);

function createNumArraysOfNumOnes(num){
    var newArrayGrid = [];
    
    for(var i=0; i<num; i++){
        newArrayGrid[i] = createArrayOfOnes(num);
    }
    
    return newArrayGrid;
}

var grid = createNumArraysOfNumOnes(10);
var tempGrid = createNumArraysOfNumOnes(10);
var neighborTally = 0;

//create starting shapes
grid[5][7] = 0; 
grid[6][5] = 0;
grid[6][7] = 0;
grid[7][6] = 0;
grid[7][7] = 0;

//grid[rowOfCells.length-1][rowOfCells.length-1] = 0;
//grid[rowOfCells.length-1][rowOfCells.length-2] = 0;
//grid[rowOfCells.length-1][rowOfCells.length-3] = 0;
//grid[rowOfCells.length-1][rowOfCells.length-4] = 0;


function calculateNeighbors(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            //check upper left corner
            if(i == 0 & j == 0){
                if(grid[0][1] == 0){
                    neighborTally++;
                } 
                if(grid[1][0] == 0){
                    neighborTally++;
                }
                if(grid[1][1] == 0){
                    neighborTally++;
                }
                
                if(grid[0][0] == 1){
                    if(neighborTally == 3){
                        tempGrid[0][0] = 0;
                    } else {
                        tempGrid[0][0] = 1;
                    }
                } 
                if(grid[0][0] == 0){
                    if(neighborTally<2){
                        tempGrid[0][0] = 1;
                    }
                    if(neighborTally == 2 || neighborTally == 3){
                        tempGrid[0][0] = 0;
                    }
                    if(neighborTally>3){
                        tempGrid[0][0] = 1;
                    }
                }
                neighborTally = 0;
            }
            
            
            //check top row
            if(i == 0 && ((j > 0) && (j < rowOfCells.length))){
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
            
            
            //check upper right corner
            if(i == 0 & j == rowOfCells.length-1){
                if(grid[0][rowOfCells.length-2] == 0){
                    neighborTally++;
                } 
                if(grid[1][rowOfCells.length-2] == 0){
                    neighborTally++;
                }
                if(grid[1][rowOfCells.length-1] == 0){
                    neighborTally++;
                }
                
                if(grid[0][rowOfCells.length-1] == 1){
                    if(neighborTally == 3){
                        tempGrid[0][rowOfCells.length-1] = 0;
                    } else {
                        tempGrid[0][rowOfCells.length-1] = 1;
                    }
                } 
                if(grid[0][rowOfCells.length-1] == 0){
                    if(neighborTally<2){
                        tempGrid[0][rowOfCells.length-1] = 1;
                    }
                    if(neighborTally == 2 || neighborTally == 3){
                        tempGrid[0][rowOfCells.length-1] = 0;
                    }
                    if(neighborTally>3){
                        tempGrid[0][rowOfCells.length-1] = 1;
                    }
                }

                neighborTally = 0;
            }
            
            
            //check left column
            if((i > 0 && i < rowOfCells.length-1) && j == 0){
                if(grid[i-1][j] == 0){
                    neighborTally++;    
                }
                if(grid[i-1][j+1] == 0){
                    neighborTally++;    
                }
                if(grid[i][j+1] == 0){
                    neighborTally++;    
                }
                if(grid[i+1][j] == 0){
                    neighborTally++;    
                }
                if(grid[i+1][j+1] == 0){
                    neighborTally++;    
                }
                
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
            
            //check right column
            if((i > 0 && i < rowOfCells.length-1) && j == rowOfCells.length-1){
                if(grid[i-1][j-1] == 0){
                    neighborTally++;    
                }
                if(grid[i-1][j] == 0){
                    neighborTally++;    
                }
                if(grid[i][j-1] == 0){
                    neighborTally++;    
                }
                if(grid[i+1][j-1] == 0){
                    neighborTally++;    
                }
                if(grid[i+1][j] == 0){
                    neighborTally++;    
                }
                
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
            
            
             //check lower left corner
            if(i == rowOfCells.length-1 && j == 0){
                if(grid[rowOfCells.length-2][0] == 0){
                    neighborTally++;
                } 
                if(grid[rowOfCells.length-2][1] == 0){
                    neighborTally++;
                }
                if(grid[rowOfCells.length-1][1] == 0){
                    neighborTally++;
                }
                
                if(grid[rowOfCells.length-1][0] == 1){
                    if(neighborTally == 3){
                        tempGrid[0][0] = 0;
                    } else {
                        tempGrid[0][0] = 1;
                    }
                } 
                if(grid[rowOfCells.length-1][0] == 0){
                    if(neighborTally<2){
                        tempGrid[rowOfCells.length-1][0] = 1;
                    }
                    if(neighborTally == 2 || neighborTally == 3){
                        tempGrid[rowOfCells.length-1][0] = 0;
                    }
                    if(neighborTally>3){
                        tempGrid[rowOfCells.length-1][0] = 1;
                    }
                }
                neighborTally = 0;
            }
            
            
            //check bottom row
            if(i == rowOfCells.length-1 && ((j > 0) && (j < rowOfCells.length-1))){
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
//                console.log(neighborTally);
                neighborTally = 0;
            }
            
            
            //check lower right corner
            if(i == rowOfCells.length-1 && j == rowOfCells.length-1){
                if(grid[rowOfCells.length-2][rowOfCells.length-2] == 0){
                    neighborTally++;
                } 
                if(grid[rowOfCells.length-2][rowOfCells.length-1] == 0){
                    neighborTally++;
                }
                if(grid[rowOfCells.length-1][rowOfCells.length-2] == 0){
                    neighborTally++;
                }
                
                if(grid[rowOfCells.length-1][rowOfCells.length-1] == 1){
                    if(neighborTally == 3){
                        tempGrid[rowOfCells.length-1][rowOfCells.length-1] = 0;
                    } else {
                        tempGrid[rowOfCells.length-1][rowOfCells.length-1] = 1;
                    }
                } 
                if(grid[rowOfCells.length-1][rowOfCells.length-1] == 0){
                    if(neighborTally<2){
                        tempGrid[rowOfCells.length-1][rowOfCells.length-1] = 1;
                    }
                    if(neighborTally == 2 || neighborTally == 3){
                        tempGrid[rowOfCells.length-1][rowOfCells.length-1] = 0;
                    }
                    if(neighborTally>3){
                        tempGrid[rowOfCells.length-1][rowOfCells.length-1] = 1;
                    }
                }
                neighborTally = 0;
            }
            
            
            //general cases
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

calculateNeighbors();

var updatedGrid = tempGrid;


for(var i=0; i<10; i++){
//    console.log(grid[i]);
    console.log(updatedGrid[i]);
}







