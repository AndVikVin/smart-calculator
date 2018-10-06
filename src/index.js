class SmartCalculator {
  constructor(initialValue) {
    // your implementation
			this.result = initialValue;
			SmartCalculator.prototype.valueOf = ()=>{
				return this.result
			};
			let calculatedArr = [initialValue];
			this.calculate = (operator,number)=>{
				calculatedArr.push(operator)
				calculatedArr.push(number)
				let arr = calculatedArr.slice()
				for(let i = arr.length-1; i>0; i--){	
					if(arr[i] === '**'){
						let count = arr[i-1];
						for(let k = 1; k<arr[i+1]; k++){
							count *= arr[i-1]	
						}
					arr[i] = count
					arr.splice(i-1,1)					
					arr.splice(i,1)					
					}
				};
				for(let i = 0; i<arr.length; i++){
					if(arr[i] === '*'){
						arr[i] = arr[i-1] * arr[i+1]				
						arr.splice(i-1,1)
						arr.splice(i,1)						
						i = 0						
					} else if(arr[i] === '/'){
						arr[i] = arr[i-1] / arr[i+1]				
						arr.splice(i-1,1)
						arr.splice(i,1)						
						i = 0				
					}		
				};
				for(let i = 0; i<arr.length; i++){
					if(arr[i] === '+'){
						arr[i] = arr[i-1] + arr[i+1]
						arr.splice(i-1,1)
						arr.splice(i,1)				
						i=0				
					} else if(arr[i] === '-'){
						arr[i] = arr[i-1] - arr[i+1]					
						arr.splice(i-1,1)
						arr.splice(i,1)				
						i=0					
					}		
				}
				this.result = arr[0]				
			};	 
	};
	

  add(number) {
    // your implementation
		this.calculate('+',number)
		return this
  }
  
  subtract(number) {
    // your implementation
		this.calculate('-',number)
		return this
  }

  multiply(number) {
    // your implementation
		this.calculate('*',number)
		return this
  }

  devide(number) {
    // your implementation
		this.calculate('/',number)
		return this
  }

  pow(number) {
    // your implementation
    this.calculate('**',number)
	return this
  }
}

module.exports = SmartCalculator;
