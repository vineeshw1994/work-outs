const a = [9,1,8,2,7,3,6,4]
console.log(a);
var i,j,minIndeex, temp

for(i=0;i<a.length;i++){
    minIndeex = i
    for(j=i+1;j<a.length;j++){
        if(a[j]< a[minIndeex]){
            minIndeex = j
        }
    }
        temp = a[i]
        a[i] = a[minIndeex]
        a[minIndeex] = temp
    
}

console.log(a);

// o(n2)
//o(n2)
//o(n2) 
