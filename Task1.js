// TASK 1//
let star=""
for(let i=1;i<4;i++){
  for(let j=1;j<=i;j++){
    star+=j+" "
  }
  star+="\n"
  
}

console.log(star)

let star01=""
for(let i=4;i>0;i--){
  
  for(let j=3;j>=i;j--){
    star01+=i+" "
  }
  star01+="\n"
  
}

console.log(star01)

let star02=""
for(let i=1;i<4;i++){
  for(let a=3;a>=i;a--){
    star02+=" "
  }
  for(let j=1;j<=i;j++){
    star02+=i+" "
  }
  star02+="\n"
  
}

console.log(star02)


let forth=""
for(let i=3;i>=1;i--){
  for(let j=1;j<=i;j++){
    forth+=j+" "
  }
  forth+="\n"
}
console.log(forth)

let fifth=""

for(let i=1;i<=3;i++){
  for(let j=3;j>=i;j--){
    fifth+= i+" "
  }
  fifth+="\n"
}
console.log(fifth)

let sixth=""

for(let i=1;i<=3;i++){
  for(let j=1;j<=i;j++){
    sixth+= i+" "
  }
  sixth+="\n"
}
console.log(sixth)

let seventh=""


for(let i=1;i<=3;i++){
  for(let a=3;a>=i;a--){
    seventh+=" "
  }
  for(let j=1;j<=i;j++){
    seventh+="1"+" "
  }
  seventh+="\n"
}
console.log(seventh)


  

