
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

conditional logic for area calcs✅
btn clicks for new shapes✅

- jquery offset for display canvas


// - git commit: shape display test for square working, saving before draw function creation

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


        $(this.shapeDiv).css({

            "height": `${this.height}px`,
            "width": `${this.width}px`

        }) 
       

       
        this.area();
        this.perimeter();
console.log(this.shapeDiv);

        $(document.body).append(this.shapeDiv);


        
    }
    
    // positiional logic
    
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

        console.log(this.name);
        console.log(`area: ${areaShape}`);


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
            
        console.log(this.name);
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