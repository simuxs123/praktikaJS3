let maryte=10;
let jonukas=1;
let kiekis=maryte+jonukas;
let i=0;
console.log(kiekis);

while(i<5){
    if(jonukas<10)
      jonukas+=2;
    if(maryte>3)
        maryte-=1;
        i++;
}
console.log(`Jonukas:${jonukas}, Maryte:${maryte}`);

let text= maryte>jonukas?"Maryte turi daugiau obuoliu":maryte<jonukas?"Jonukas turi daugiau obuoliu":"Atiduokim obuolius editai";
console.log(text);

kiekis=maryte+jonukas;
switch (kiekis) {
  case 5:
    kiek = "Maryte ir Jonukas turi 5 obuolius";
    break;
  case 10:
    kiek = "Maryte ir Jonukas turi 10 obuolius";
    break;
  case 15:
     kiek = "Maryte ir Jonukas turi 15 obuolius";
    break;
  case 20:
    kiek = "Maryte ir Jonukas turi 20 obuolius";
    break;
  default:
    kiek="Maryte ir Jonukas turi x obuolius";
    break;
}
console.log(kiek);

let arr=["obuolys","kriause","braske", "bananas", "slyvas", "apelsinas"];
console.log(`${arr[2]} ${arr[4]}`);
for(let i=0; i<arr.length; i++){
    console.log(`${arr[i]}`);
}