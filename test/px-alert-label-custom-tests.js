/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
