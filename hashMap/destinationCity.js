/**
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. 
 * Return the destination city, that is, the city without any path outgoing to another city.
 */



const destCity = (paths) => {
    let hashMap = {}
    
    for(let i  = 0; i < paths.length; i++){
        for(let j = 0; j < paths[i].length; j++){
            if(hashMap[paths[i][j]]){
                hashMap[paths[i][j]] += 1
            } else 
                hashMap[paths[i][j]] = 1
        }
    }

    for(let k  = 0; k < paths.length; k++){
        for(let l = 0; l < paths[k].length; l++){
            if(hashMap[paths[k][l]] === 1 && l === 1){
                return paths[k][l]
            }
         }
    }
};