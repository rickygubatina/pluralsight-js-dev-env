import {expect} from "chai";
import jsdom from "jsdom";
import fs from "fs";

const { JSDOM } = jsdom;

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  })
});

describe("index.html", () => {
  it("should have h1 that says Users", (done) => {
      const index = fs.readFileSync("./src/index.html", "utf-8");
      // jsdom.env(index, function(err, window) {
      //   const h1 = window.document.getElementByTagName("h1")[0];
      //   expect(h1.innerHTML).to.equal("Hello World!");
      //   window.close();
      // })
      setTimeout(() => {
        const { window } = new JSDOM(index);
        const h1 = window.document.getElementsByTagName("h1")[0];
        expect(h1.innerHTML).to.equal("Users");
        // For async tests and hooks, ensure "done()" is called;
        done();
        window.close();
      },1000);
  });
});
