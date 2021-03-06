
// Create buttons

const btnMakeRectangle = $('#button-rectangle');
const btnMakeSquare = $('#button-square');
const btnMakeCircle = $('#button-circle');
const btnMakeTriangle = $('#button-triangle');

//Declare input values

const rectangleHeightInput = $('#rectangleHeightInput');
const rectangleWidthInput = $('#rectangleWidthInput');
const squareLengthInput = $('#squareLengthInput');
const circleRadiusInput = $('#circleRadiusInput');
const triangleHeightInput = $('#triangleHeightInput');

//Shape Display Canval
const shapeDisplay = $('#shapeDisplay');

//Display Panel:

const shapeNamePanel = $('#shapeName');
const shapeWidthPanel = $('#shapeWidth');
const shapeHeightPanel = $('#shapeHeight');
const shapeRadiusPanel = $('#shapeRadius');
const shapeAreaPanel = $('#shapeArea');
const shapePerimeterPanel = $('#shapePerimeter');


///Main Shape class

class Shape  {
    
    // general constructor parameters
    constructor(name, height, width ) {
        
        this.name = name;
        this.height = Number(height);
        this.width = Number(width);
        this.shapeDiv = $(`<div class = ${this.name}> </div>`);
        this.describe();
        this.position();          

        $(this.shapeDiv).css({

            "position": "absolute", 
            "height": `${this.height}px`,
            "width": `${this.width}px`,
            "top": `${this.top}px`,
            "left": `${this.left}px`,
        

        }) 
       
       
        this.area();
        this.perimeter();
       

        //append shape to canvas
        $(shapeDisplay).append(this.shapeDiv);
        
    }
    
    
    
    // positional logic
    
    //random num generator
    randomCoordinate(){
        let randomCoordinate = (Math.random()*1);
        console.log(`random number : ${randomCoordinate}`);
        return randomCoordinate;
    }
   

    
    position(){
        
        this.left = (590-this.width)*this.randomCoordinate();
        
        this.top = (590-this.height)*this.randomCoordinate();
        
        
    }
   
    
    // this is the area calc method
    area(){

        $(shapeAreaPanel).empty();
        let areaShape = this.height * this.width;
        
        
            if (this.name === 'Circle') {

                areaShape = (Math.PI*this.height*this.height).toFixed(3);  //fix this!
                
                
            }
            if (this.name === 'Triangle') {
                
                areaShape = .5*this.height * this.height;
                
            }
        
        console.log(`area: ${areaShape}`);
        $(shapeAreaPanel).append(`Area [px^2]: ${areaShape}`)

    }


     perimeter(){
        $(shapePerimeterPanel).empty();
        // rectangle
        
        let perimeter = 2*(this.height + this.width).toFixed(2);
        
        
            if (this.name === 'Circle') {
            
                perimeter = (2*Math.PI*this.height).toFixed(2);
                
                
            }

            if (this.name === 'Triangle') {
                
                let a = this.height;
                let b = this.height;

                let H = Math.sqrt((a*a)+(b*b)); // sqrt(A^2+B^2)

                perimeter = (this.height+this.height+H).toFixed(2);
                
                
                //console.log(`hypoteneuse: ${H}`);
                
            } 
        
       
        console.log(`perimeter: ${perimeter}`);
        $(shapePerimeterPanel).append("Perimeter [px]:" +perimeter)
        
    }
    
    // describe method - click shape displays properties
    describe(){
    
        //Shame Name:
        this.shapeDiv.click((event)=> {
            
            console.log(`Shape Name: ${this.name}`)
            
            
            // PANEL DISPLAY
            
            $(shapeNamePanel).empty();
            $(shapeNamePanel).append(`Shape Name: ${this.name}`)
        });

        //width:
        this.shapeDiv.click((event)=> {
            $(shapeWidthPanel).empty();
            
            if (this.name === 'Circle'){
                
                
                //input = radius| diameter = 2*radius
                console.log(`Circle Width (Diameter)[px]: ${this.width*2}`);
                console.log(`Radius[px]: ${this.width}`);

                    // PANEL DISPLAY
                    $(shapeWidthPanel).append(`Circle Width (Diameter)[px]: ${this.width*2}`)

            } else {

                console.log(`Shape Width: ${this.width}`);

                    // PANEL DISPLAY
                    $(shapeWidthPanel).append(`Shape Width[px]: ${this.width}`)

            }

            
        });

        //Height and Radius
        this.shapeDiv.click((event)=> {
            $(shapeHeightPanel).empty();
            $(shapeRadiusPanel).empty();

            if (this.name === 'Circle'){

                //input = radius| diameter = 2*radius
                console.log(`Circle Height (Diameter): ${this.width*2}`);

                // PANEL DISPLAY
                $(shapeHeightPanel).append(`Circle Height (Diameter)[px]: ${this.width*2}`)
                $(shapeRadiusPanel).append(`Radius [px]: ${this.width}`)
                

            } else {
                console.log(`Shape Height: ${this.height}`);

                // PANEL DISPLAY
                $(shapeHeightPanel).append(`Shape Height[px]: ${this.width}`)
                $(shapeRadiusPanel).append("Radius [px]: N/A")

            }
            
            


        });

        //Area:
        this.shapeDiv.click((event)=>this.area()) 
        
            $(shapeAreaPanel).empty();
            
          

        //Perimeter:
        this.shapeDiv.click((event)=>this.perimeter()) 
        
            // Q: Why can't we put the append here?
            

            
        
        this.shapeDiv.dblclick((event)=> $(this.shapeDiv).remove(this.Shape)) 
        
       
}
}






class Rectangle extends Shape {

    constructor () {

        let height = $(rectangleHeightInput).val();
        let width = $(rectangleWidthInput).val();

        // calls parent constructor, imports shape specific name
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
        let width = height
        
        super('Circle', height, width); /// height = radius
        
    }

}
class Triangle extends Shape {

    constructor () {

        
        let height = $(triangleHeightInput).val();
        super('Triangle', height, height);
        

        $(this.shapeDiv).css({
            
            "height": `0px`,
            "width": `0px`,
            "border-bottom": `${this.height}px solid transparent`,
            "border-left": `${this.width}px solid rgba( 255, 255, 0, .5)`

        }) 
        console.log(`border-bottom ${this.height}`);


    }
}




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

