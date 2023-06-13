import { describe, test, expect } from '@jest/globals'
import { Operations } from '../src/TDD/operations'
import { ErrorMessage } from '../src/TDD/errorMessages'

let operations = new Operations

describe('Somatória', () =>{
    test('Recebe dois números como parametros e retornar a somatória', () =>{
        expect(operations.sum(5, 2)).toBe(7)
    })
})

describe('Subtração', () =>{
    test('Recebe dois números como parametros e retornar a subtração', () =>{
        expect(operations.sub(10, 2)).toBe(8)
    })

    test('Recebe um dos parâmetros como zero e retorna o número negativo correspondente', () =>{
        expect(operations.sub(0, 5)).toBe(-5)
        expect(operations.sub(10, 0)).toBe(10)
      })
})

describe('Multiplicação', () =>{
    test('Recebe dois números como parametros e retornar a Multiplicação', () =>{
        expect(operations.mult(1, 2)).toBe(2)
    })

    test('Recebe um dos parâmetros como zero e retorna sempre zero', () =>{
        expect(operations.mult(0, 5)).toBe(0)
        expect(operations.mult(10, 0)).toBe(0)
      })
})

describe('Divisão', () =>{
    test('Recebe dois números como parametros e retornar a Divisão', () =>{
        expect(operations.div(10,2)).toBe(5)
    })

    test('Recebe o primeiro parâmetro como zero e retorna sempre zero', () =>{
        expect(operations.div(0, 5)).toBe(0)
        expect(operations.div(0, -2)).toBe(0)
    })

    test('Recebe o segundo parâmetro como 1 e retorna o primeiro parâmetro', () =>{
        expect(operations.div(10, 1)).toBe(10)
        expect(operations.div(-5, 1)).toBe(-5)
    })

    test('Recebe o segundo parametro com o valor 0 e retornar um erro que é impossivel dividir por 0',()=>{
        expect(operations.div(10, 0)).toBe(ErrorMessage.PARAM_ERROR_DIV_ZERO)
    })
})