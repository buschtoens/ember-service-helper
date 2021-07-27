import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';

export default class ServiceHelper extends Helper {
  compute([serviceName, methodName]) {
    const service = getOwner(this).lookup(`service:${serviceName}`);
    assert(`The service '${serviceName}' does not exist`, service);

    if (!methodName) return service;
    assert(
      `If specified, the second parameter must be the name of a method. Received: '${methodName}'`,
      typeof methodName === 'string' || typeof methodName === 'symbol',
    );

    const method = service[methodName];
    assert(
      `'${methodName}' is not a method on '${serviceName}'.`,
      typeof method === 'function',
    );

    return method.bind(service);
  }
}
