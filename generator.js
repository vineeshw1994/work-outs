function* indexGenerator(){
    let index =1;
    while(true){
        yield index++
    }
}

const gen = indexGenerator()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);