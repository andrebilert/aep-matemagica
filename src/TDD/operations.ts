import { Matemagica } from "./Matemagica";
import { ErrorMessage } from "./errorMessages"

export class Operations{
    
    sum(a, b){    
        let matemagica = new Matemagica(a, b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessage.PARAM_ERROR_TYPE
        } 
        return matemagica.getSoma(a,b);
    }

    sub(a, b){
        let matemagica = new Matemagica(a, b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessage.PARAM_ERROR_TYPE
        } 
        return matemagica.getSubtracao(a,b);
    
    }

    mult(a,b){
        let matemagica = new Matemagica(a, b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessage.PARAM_ERROR_TYPE
        } 
        return matemagica.getMultiplicacao(a,b);
    }

    div(a,b){
        let matemagica = new Matemagica(a, b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return ErrorMessage.PARAM_ERROR_TYPE
        }
        if(b == 0){
            return ErrorMessage.PARAM_ERROR_DIV_ZERO
        }
        return matemagica.getDivisao(a,b);
    }
}