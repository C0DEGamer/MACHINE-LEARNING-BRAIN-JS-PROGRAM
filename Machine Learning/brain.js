


const h1=document.querySelector(".displayout")	

const network=new brain.NeuralNetwork();

network.train([

  {input:[0,0,0,0],output:[0]},
  {input:[0,0,0,1],output:[0]},
  {input:[0,0,1,0],output:[0]},
  {input:[0,0,1,1],output:[0]},
  {input:[0,1,0,0],output:[0]},
  {input:[0,1,0,1],output:[0]},
  {input:[0,1,1,0],output:[0]},
  {input:[0,1,1,1],output:[0]},
  {input:[1,0,0,0],output:[1]},
  {input:[1,0,0,1],output:[1]},
  {input:[1,0,1,0],output:[1]},
  {input:[1,0,1,1],output:[1]},
  {input:[1,1,0,0],output:[1]},
  {input:[1,1,0,1],output:[1]},
  {input:[1,1,1,0],output:[1]},
  {input:[1,1,1,1],output:[1]}
  
	])



let output=network.run([1,0,0,0])//output will be 1[value will be closer to 1]
h1.innerText=output;

