describe("sum", function() {

    it("sums all elements of array", function() {
      assert.equal(sum([10,20,30,40]), 100);
    });
    
    });
describe("multiply", function() {

        it("multiplies all elements of array", function() {
          assert.equal(multiply([1,2,3,4]), 24);
        });
        
        });
describe("reverse", function() {

            it("reverses a string", function() {
              assert.equal(reverse('mimi'), 'imim');
            });
            
            });
describe("filterLongWords", function() {

             it("filters words > given num", function() {
                  assert.equal(filterLongWords(['mimi','beautiful','g'],5), 'beautiful');
             });
                
             });