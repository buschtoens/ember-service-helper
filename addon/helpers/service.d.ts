declare module 'ember-service-helper/helpers/service' {
  import type { EmptyObject } from '@glint/template/-private/integration';

  import Helper from '@ember/component/helper';
  import type { Registry as ServiceRegistry } from '@ember/service';

  type FilterFlags<Base, Condition> = {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
  };
  type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
  type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;
  type MethodsOnly<T> = SubType<T, () => unknown>;

  interface ServiceHelperSignature<K, M> {
    Args: {
      Positional: [serviceName: K, methodName?: M];
      Named: EmptyObject;
    };
    Return: M extends undefined ? ServiceRegistry[K] : ServiceRegistry[K][M];
  }

  export default class ServiceHelper<
    K extends keyof ServiceRegistry,
    M extends undefined | keyof MethodsOnly<ServiceRegistry[K]> = undefined
  > extends Helper<ServiceHelperSignature<K, M>> {
    compute([serviceName]: [K]): ServiceRegistry[K];
    compute([serviceName, methodName]: [K, M]): ServiceRegistry[K][M];
  }
}
