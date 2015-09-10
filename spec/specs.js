describe('triangle', function() {
  it('will return a message if the sides do not create a triangle', function() {
    expect(triangle(6,1,4)).to.equal("This is not a triangle!");
  });

  it('will return a message to show if it is an isosceles triangle if exactly two sides are equal', function() {
    expect(triangle(6,4,4)).to.equal("This is an Isosceles Triangle!");
  });

  it('will return a message to show if it is an equilateral triangle if all sides are equal', function() {
    expect(triangle(6,6,6)).to.equal("This is an Equilateral Triangle!");
  });

  it('will return a message to show if it is an scalene triangle if no sides are equal', function() {
    expect(triangle(6,3,7)).to.equal("This is an Scalene Triangle!");
  });
});
