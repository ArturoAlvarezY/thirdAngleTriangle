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



})