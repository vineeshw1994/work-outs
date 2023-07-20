class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total =0
        for(i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
      }
      set(key, value){
        const index = this.hash(key)
        this.table[index]=value
      }

      get(key){
        const index = this.hash(key)
        return this.table[index]
      }
      remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
      }

      display(){
        for( i=0;i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
      }
}
 
const table = new Hashtable(50)

//table.set('Name', 'vineesh')
//table.set('Age',28)
//table.set('place','Marthandam')
//table.set('domain','MERN')
//table.display()
//console.log(table.get("Name"));



	class HashTable {
		constructor() {
			this.table = new Array(10);
			this.size = 0;
		}
	
		_setKey(key) {
			return key % 10;
		}
	
		insert(value) {
			const index = this._setKey(value);
			this.table[index] = value;
			this.size++;
		}
	
		get(key) {
			const target = this._setKey(key);
			return this.table[target];
		}
	
		search(value) {
			const index = this._setKey(value);
			if (this.table[index] == value)
				console.log("The value is found at index : ", index);
			else
				console.log("Not found");
		}
	
		delete(key) {
			const index = this._setKey(key);
	
			if (this.table[index]) {
				this.table[index] = [];
				this.size--;
				return true;
			} else {
				return false;
			}
		}
    display(){
      for( i=0;i<this.table.length; i++){
          if(this.table[i]){
              console.log(i, this.table[i]);
          }
      }
    }
	}
	
	const hashExample = new HashTable();
	hashExample.insert(100);
	hashExample.insert(87);
	hashExample.insert(86);
	hashExample.insert(12);
	hashExample.insert(9);
	
	
    // hashExample.display()
	
	//hashExample.search(87); 
	//hashExample.search(10); 
	
	//console.log('After deletion ');
  
	//hashExample.delete(12);
	//hashExample.display()
	

