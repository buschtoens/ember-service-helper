import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { set } from '@ember/object';
import { run } from '@ember/runloop';
import Service from '@ember/service';
import Ember from 'ember';

import hbs from 'htmlbars-inline-precompile';

module('Integration | Helpers | Service', function (hooks) {
  setupRenderingTest(hooks);

  const { onerror } = Ember;
  hooks.afterEach(() => {
    Ember.onerror = onerror;
  });

  hooks.beforeEach(function () {
    this.owner.register(
      'service:some-service',
      class SomeService extends Service {
        init() {
          super.init();

          this.isTrue = true;
          this.fruitType = 'Banana';
        }
      }
    );
  });

  test('it allows you to access a property on a service if it exists', async function (assert) {
    await render(hbs`{{get (service "some-service") "fruitType"}}`);
    assert.dom().includesText('Banana');

    await render(
      hbs`{{if (get (service "some-service") "isTrue") "I am here"}}`
    );
    assert.dom().includesText('I am here');

    const service = this.owner.lookup('service:some-service');
    run(() => set(service, 'isTrue', false));
    assert.dom().doesNotIncludeText('I am here');
  });

  test('it throws an error when trying to access a service that does not exist', async function (assert) {
    assert.expect(1);

    Ember.onerror = error =>
      assert.equal(
        error.message,
        "Assertion Failed: The service 'not-a-service' does not exist"
      );

    await render(hbs`{{service "not-a-service"}}`);
  });
});
