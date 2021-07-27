
// Create buttons

const btnMakeRectangle = $('#button-rectangle');//Q whats the best way to do this in DOM?  documnet.getelem by ID
const btnMakeSquare = $('#button-square');
const btnMakeCircle = $('#button-circle');
const btnMakeTriangle = $('#button-triangle');

//Declare input values

const rectangleHeightInput = $('#rectangleHeightInput');
const rectangleWidthInput = $('#rectangleWidthInput');

const squareLengthInput = $('#squareLengthInput');

const circleRadiusInput = $('#circleRadiusInput');

const triangleHeightInput = $('#triangleHeightInput');


const shapeDisplay = $('#shapeDisplay');

const offset = shapeDisplay.offset(); 
console.log({offset});

// console.log("offset left :" +offset.left);
// console.log("offset top :" +offset.top);

// console.log(offset.top+600);
// console.log(offset.left+600);


///upper bounds: 0,0(), 1,0()

//lower bounds: 1,0 , 1,1


// insert offset

    //local origin  //offset:










/*
Next steps



- jquery offset for display canvas




need bootstrap form w/ input fields 

*/

/*
Button >>> new instance

*/



///Main Shape class

class Shape  {
    
    constructor(name, height, width ) {
        
        this.name = name;
        this.height = Number(height);
        this.width = Number(width);
        this.shapeDiv = $(`<div class = ${this.name}> </div>`);
       
       
       // this.position();
        this.left = this.randoNumX();
        this.top = this.randoNumY();


        $(this.shapeDiv).css({

            //"display": inline-block,
            "height": `${this.height}px`,
            "width": `${this.width}px`,
            "top": `${this.top}px`,
            "left": `${this.left}px`,
            "float": none

            // need to add top & left setting



        }) 
       
        console.log("this top " +this.top);
        console.log(this.left);

       
        this.area();
        this.perimeter();
        console.log(this.shapeDiv);

        $(shapeDisplay).append(this.shapeDiv);


        
        
        
    }
    
    // positiional logic
    
    //random num generator
    randoNumX(){
        let randoNumX = Math.floor(Math.random()*600);
        console.log(`random number x: ${randoNumX}`);
        return randoNumX;
    }
    randoNumY(){
        let randoNumY = Math.floor(Math.random()*600);
        console.log(`random number y: ${randoNumY}`);
        return randoNumY;
    }


    
    position(){

        this.left = this.randoNumX()*-1;

        this.top = this.randoNumY();

        
        //return this.top;

    }
    /* function draw()
        top and left properties



// shape startX = 600- shapelengthX



    */
    
    // this is the area calc method
    area(){
    
        let areaShape = this.height * this.width;

        
        if (this.name === 'Circle') {

                areaShape = (Math.PI*this.height).toFixed(3);  //fix this!
            
                
        }
        if (this.name === 'Triangle') {

                areaShape = .5*this.height * this.height;
                
                

        }

        //console.log(this.name);
        //console.log(`area: ${areaShape}`);


     }


     perimeter(){

        // rectangle

        let perimeter = 2*(this.height + this.width).toFixed(2);
        
        
        if (this.name === 'Circle') {

            perimeter = (2*Math.PI*this.height).toFixed(2);
            

        }

        if (this.name === 'Triangle') {
            
            let a = this.height;
            let b = this.height;

            let H = Math.sqrt((a*a)+(b*b)); // sqrt(A^2+B^2)

            perimeter = this.height+this.height+H.toFixed(2);

           
            
        } 
            
        //console.log(this.name);
        console.log(`perimeter: ${perimeter}`);

     }

       
}


class Rectangle extends Shape {

    constructor () {

       
        let height = $(rectangleHeightInput).val();
        let width = $(rectangleWidthInput).val();

        super('Rectangle', height, width);
        
    }

}


class Square extends Shape {

    constructor () {

        
        let height = $(squareLengthInput).val();
        let width = height

        super('Square', height, width);
        
    }

}
class Circle extends Shape {

    constructor () {

      
        let height = $(circleRadiusInput).val();
        
        super('Circle', height); /// height = radius
        
    }

}
class Triangle extends Shape {

    constructor () {

        
        let height = $(triangleHeightInput).val();
        
        super('Triangle', height);
        
    }

}










//const newRectangle = new Rectangle ( )   /// need to fix this





/*

extends Shape

extends Shape
extends Shape
extends Shape



 */





///click event


// RECTANGLE CLICK EVENT

btnMakeRectangle.click(function(event){   

new Rectangle();

});

btnMakeSquare.click(function(event){   

    new Square();
    
});

btnMakeCircle.click(function(event){   

    new Circle();
    
});

btnMakeTriangle.click(function(event){   

    new Triangle();
    
});

/*

Add Output Console

*/