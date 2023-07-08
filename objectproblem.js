const aobject = [{ m1: 10, m2: 20, m3: 30 }, { m4: 10, m5: 50 }];

let sum = 0;

for (let obj of aobject) {
  for (let key in obj) {
    sum += obj[key];
  }
}

//console.log(sum);