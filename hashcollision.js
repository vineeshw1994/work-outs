class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total =0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
      }
      set(key, value){
        const index = this.hash(key)
        //this.table[index]=value
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]]
        } else{
            const samekeyitem = bucket.find(item=> item[0] === key)
            if(samekeyitem){
                samekeyitem[1] = value
            } else{
                bucket.push([key , value])
            }
        }
      }

      get(key){
        const index = this.hash(key)
        //return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            var samekeyitem = bucket.find(item => item[0] === key)
            if(samekeyitem){
                return samekeyitem[1]
            } 
        }
        return undefined
      }
      remove(key){
        const index = this.hash(key)
        //this.table[index] = undefined
        var bucket = this.table[index]
        if(bucket){
            var samekeyitem = bucket.find(item => item[0] === key)
            if(samekeyitem){
                bucket.splice(bucket.indexOf(samekeyitem),1)
            }
        }
      }

      display(){
        for( let i=0;i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
      }
}
 
const table = new Hashtable(50)
table.set('name', 'vineesh')
table.set('mane', 'wilson')
table.set('Age',28)
table.set('place','Marthandam')
table.set('domain','MERN')
table.display()
console.log(table.get("name"));
table.remove(mane)
table.display()