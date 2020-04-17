# ember-service-helper

[![CI](https://github.com/buschtoens/ember-service-helper/workflows/CI/badge.svg)](https://github.com/buschtoens/ember-service-helper/actions)
[![npm version](https://badge.fury.io/js/ember-service-helper.svg)](http://badge.fury.io/js/ember-service-helper)
[![Download Total](https://img.shields.io/npm/dt/ember-service-helper.svg)](http://badge.fury.io/js/ember-service-helper)
[![Ember Observer Score](https://emberobserver.com/badges/ember-service-helper.svg)](https://emberobserver.com/addons/ember-service-helper)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://img.shields.io/david/buschtoens/ember-service-helper.svg)](https://david-dm.org/buschtoens/ember-service-helper)
[![devDependencies](https://img.shields.io/david/dev/buschtoens/ember-service-helper.svg)](https://david-dm.org/buschtoens/ember-service-helper)

Simple template helper to inject services into templates.

## Installation

```
ember install ember-service-helper
```

## Usage

Example using [`ember-responsive`](https://github.com/freshbooks/ember-responsive).

```hbs
{{#if (get (service "breakpoints") "isDesktop")}}
  Desktop breakpoint
{{else}}
  Mobile breakpoint
{{/if}}
```

## Related

- [Pre-RFC 543: Ability to inject service into Template Only component](https://github.com/emberjs/rfcs/issues/543)
