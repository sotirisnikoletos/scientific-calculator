class Calculator{


    constructor(previousOperandTextElement,currentOperandTextElement){
        
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }

  clear()
    {
    this.currentOperand=''
    this.previousOperand=''
    this.operation=''
    
    }  


  delete()
  {
    this.currentOperand=this.currentOperand.toString().slice(0,-1)

    }


  appendNumber(number)
  {
      if(number==='.' && this.currentOperand.includes('.')) return
      this.currentOperand=this.currentOperand.toString() + number.toString()

    }


  chooseOperation(operation)
  {
      if(this.currentOperand==='') return
      if (this.previousOperand!=='')
      {
          this.compute()
        }
      this.operation=operation
      this.previousOperand=this.currentOperand
      this.currentOperand=''
      


  }

  compute() 
  {

        let computation
        const prev = parseFloat(this.previousOperand)
        const current=parseFloat(this.currentOperand)

        if (isNaN(prev) || isNaN(current)) return
            switch (this.operation) 
            {
                case '+' :
                    computation=prev+current
                    break
            
                case '-' :
                    computation=prev-current
                    break
                case '*' :
                    computation=prev*current
                    break
                case '/':
                    computation=prev/current
                    break
                case 'pow' :
                    computation=Math.pow(prev,current) 
                    break
                
                default:
                    return

            }

    this.currentOperand=computation
    this.operation=''
    this.previousOperand=''
    

        }


 computesqrt(){
    this.previousOperand=`square root of ${this.currentOperand} is`  + '\r' 
    this.currentOperand= `${Math.sqrt(this.currentOperand)}`
    
    return
 }

 computefact(){
    this.previousOperand=`factorial of ${this.currentOperand} is`  + '\r' 
    let answer = 1;
    if (this.currentOperand == 0 || this.currentOperand == 1){
      return answer;
    }else{
      for(var i = this.currentOperand; i >= 1; i--){
        answer = answer * i;
      }
    this.currentOperand=`${answer}`    }  
 }


 


  updateDisplay(){
    this.currentOperandTextElement.innerText=this.currentOperand


      if(this.operation!=null) {
            if(this.operation==='sqrt' || this.operation==='fact'){
                
                this.previousOperandTextElement.innerText=this.previousOperand
                this.currentOperandTextElement.innerText=this.operation
                    
                    return

                    
          }

      
        this.previousOperandTextElement.innerText=`${this.previousOperand} ${this.operation}`
        
        }
    }

}

    const numberButtons = document.querySelectorAll('[data-number]')
    const operationButtons = document.querySelectorAll('[data-operation]')
    const equalsButton = document.querySelector('[data-equals]')
    const deleteButton = document.querySelector('[data-delete]')
    const allClearButton = document.querySelector('[data-allclear]')
    const previousOperandTextElement = document.querySelector('[data-previous-operand]')
    const currentOperandTextElement = document.querySelector('[data-current-operand]')
    const sqrtButton=document.querySelector(('[data-operation2]'))
    const factButton=document.querySelector(('[data-operation3]'))


    const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

    numberButtons.forEach(button => {
        button.addEventListener('click', ()  =>  {
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
        })
    })


    operationButtons.forEach(button2 => {
        button2.addEventListener('click', ()  =>  {
            calculator.chooseOperation(button2.innerText)
            calculator.updateDisplay()
        })
    })


    equalsButton.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
    })

    allClearButton.addEventListener('click',button => {
        calculator.clear()
        calculator.updateDisplay()
        
        
        
        
    })

    deleteButton.addEventListener('click',button => {
        calculator.delete()
        calculator.updateDisplay()
    })


    sqrtButton.addEventListener('click' ,button => {
        calculator.computesqrt()
        calculator.updateDisplay()
    })



factButton.addEventListener('click',() => {
    calculator.computefact()
    calculator.updateDisplay()
})