suite('Custom Automation Tests for px-alert-label', function() {
  test('Important alert has the correct label text', function(done) {
    var labelElement = fixture('fixture-important');
    assert.equal(labelElement.label, 'Important');
    done();
  });

  test('Warning alert has the correct label text', function(done) {
    var labelElement = fixture('fixture-warning');
    assert.equal(labelElement.label, 'Warning');
    done();
  });

  test('Information alert has the correct label text', function(done) {
    var labelElement = fixture('fixture-info');
    assert.equal(labelElement.label, 'Information');
    done();
  });

  test('Healthy alert has the correct label text', function(done) {
    var labelElement = fixture('fixture-healthy');
    assert.equal(labelElement.label, 'Healthy');
    done();
  });

  test('Inverted alert has the correct label text', function(done) {
    var labelElement = fixture('fixture-healthy-inverted');
    assert.equal(labelElement.label, 'Inverted');
    done();
  });

  test('Unknown alert has the correct label text', function(done) {
    var labelElement = fixture('fixture-unknown');
    assert.equal(labelElement.label, 'Unknown');
    done();
  });

  test('Badge alert has the correct label text', function(done) {
    var labelElement = fixture('fixture-badge');
    assert.equal(labelElement.label, '3');
    done();
  });
});
