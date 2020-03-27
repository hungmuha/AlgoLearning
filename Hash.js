//naive version of hash function
function hash(key, arrayLen) {
    let total =0;
    for(let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) %arrayLen;
    }
    return total;
}
//improved version of the hash function
function hash(key, arrayLen) {
    let total =0;
    let WEIRD_PRIME = 31; //using prime to reducing conllision but it is quite complicated
    for(let i = 0; i< Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) %arrayLen;
    }
    return total;
}

class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }

    set(key,value) {
        var index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        } 
        this.keyMap[index].push([key,value]);
    }
    get(key) {
        var index = this._hash(key);
        if(this.keyMap[index]){
            for(let arr of this.keyMap[index]) {
                if(arr[0]===key) return arr[1];
            }
        }
        return undefined;
    }
    keys() {
        var keys = [];
        for(let i = 0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length;j++) {
                    if(!keys.includes(this.keyMap[i][j][0])){
                        keys.push(this.keyMap[i][j][0]);
                    }
                    
                }
            }
        }
        return keys;
    }
    values() {
        var values = [];
        for(let i = 0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length;j++) {
                    if(!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return values;
    }
  }
  
  let ht = new HashTable(17);
  ht.set("maroon","#800000")
  ht.set("yellow","#FFFF00")
  ht.set("olive","#808000")
  ht.set("salmon","#FA8072")
  ht.set("lightcoral","#F08080")
  ht.set("mediumvioletred","#C71585")
  ht.set("plum","#DDA0DD")
  console.log(ht.get("maroon"));
  console.log(ht.keys());
  console.log(ht.values());
  
