import { describe, it, expect } from "vitest";
import { findThirdAngle } from "./app.js";

describe('findThirdAngle', () => {
  it('should return 90 when the other angles are 30 and 60', () => {
   const first= 60;
   const second= 30;

   const result= findThirdAngle(first, second);

   expect(result).toBe(90);
   expect(result).toBeTypeOf("number");

  })  

  it('should return 60 when both angles are 60', () => {
    

    const firstAngle = 60;
    const secondAngle = 60;
    const result= findThirdAngle(firstAngle, secondAngle);

    expect(result).toBe(60);
    expect(result).toBeTypeOf("number")

  })
it('should return 59 if angles are 43 and 78', () => {
  
    const firstAngle = 43;
    const secondAngle = 78; 
    const result = findThirdAngle(firstAngle, secondAngle);

    expect(result).toBe(59);
    expect(result).toBeTypeOf("number");
})

it('should return 150 if angles are 10 and 20', () => {
    
    const firstAngle = 10;
    const secondAngle = 20;
    const result = findThirdAngle(firstAngle, secondAngle);

    expect(result).toBe(150);
    expect(result).toBeTypeOf("number");
    
})



})