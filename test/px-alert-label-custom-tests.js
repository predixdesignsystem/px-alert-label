// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-alert-label', function() {
    test('Important alert has the correct label text', function(done) {
      var fixtureEl = document.getElementById('fixture-important');
      assert.equal(fixtureEl.label, 'Important');
      done();
    });

    test('Warning alert has the correct label text', function(done) {
      var fixtureEl = document.getElementById('fixture-warning');
      assert.equal(fixtureEl.label, 'Warning');
      done();
    });

    test('Information alert has the correct label text', function(done) {
      var fixtureEl = document.getElementById('fixture-info');
      assert.equal(fixtureEl.label, 'Information');
      done();
    });

    test('Healthy alert has the correct label text', function(done) {
      var fixtureEl = document.getElementById('fixture-healthy');
      assert.equal(fixtureEl.label, 'Healthy');
      done();
    });

    test('Inverted alert has the correct label text', function(done) {
      var fixtureEl = document.getElementById('fixture-healthy-inverted');
      assert.equal(fixtureEl.label, 'Inverted');
      done();
    });

    test('Unknown alert has the correct label text', function(done) {
      var fixtureEl = document.getElementById('fixture-unknown');
      assert.equal(fixtureEl.label, 'Unknown');
      done();
    });

    test('Badge alert has the correct label text', function(done) {
      var fixtureEl = document.getElementById('fixture-badge');
      assert.equal(fixtureEl.label, '3');
      done();
    });
  });
};
