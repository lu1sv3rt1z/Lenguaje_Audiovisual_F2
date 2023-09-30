class Not_Found extends Error{
    //llamamos a la calse error que existe dentro del codigo base de Ts
    constructor(messageError: string){
        super(messageError);
        this.name = "Not Found";
    }
}

class Validation_Error extends Error{
    //llamamos a la calse error que existe dentro del codigo base de Ts
    constructor(messageValidation: string){
        super(messageValidation);
        this.name= "Validation Error has Appeared";
    }
}

export {Not_Found, Validation_Error};