import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';

export default class ServiceHelper extends Helper {
  compute([serviceName]) {
    const service = getOwner(this).lookup(`service:${serviceName}`);
    assert(`The service '${serviceName}' does not exist`, service);

    return service;
  }
}
