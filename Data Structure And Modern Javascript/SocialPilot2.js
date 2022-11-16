//More questions 

let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
  //Question 1
  const{innerData} = nestedData;
  const {numberData} = innerData;
  const {primeNumbers} = numberData;
  for(const item of primeNumbers){
      console.log(item);  
  }
  
  // Question 2
  const{fibonnaci} = numberData;
  console.log('Even fibonnaci number')
  for(let i=0;i<fibonnaci.length;i++){
      if(fibonnaci[i]%2==0){
          console.log(fibonnaci[i]);
      }
  }
  
  //Question 3 
  const {order} = innerData;
  console.log(order[1]);
  
  
  //Question 4
  // const {addSnack} = innerData;
  innerData.addSnack("chocolate");
  const{snacks} = innerData
  console.log(snacks);
  
 