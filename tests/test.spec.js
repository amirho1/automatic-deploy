/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const  {expect} = require("chai")

describe("Hello world" ,() =>{
  it("should say Hello world", () => {
    expect("Hello world").equal("Hello world")
  })
})