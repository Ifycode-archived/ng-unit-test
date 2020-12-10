describe('my first test', () => {
  let sut;

  beforeEach(() => {
    sut = {};
  });

  it('should be true if true', () => {
    //arrange
    sut.a = false;

    //act
    sut.a = true;

    //assert
    expect(sut.a).toBe(true);
  });
});



/**
 * Example 1 (above):
    Output is test fails = my first test should be true if true

 * Example 2: nested describe function

    describe('user service', () => {
      describe('getUser method', () => {
        it('should retrieve the correct user', () => {

        })
      })
    })

    Output if test fails:
    user service getUser method should retrieve the correct user
*/

