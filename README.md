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

```sh
ember install ember-service-helper
```

## Usage

There are two ways to invoke the `{{service}}` helper.

- **`{{service serviceName}}`** — Returns the service itself.<br>
  Like calling ```owner.lookup(`service:${serviceName}`)```
- **`{{service serviceName methodName}}`** — Returns the method, bound to the instance.

### Properties

#### Getting Properties

Example using the built-in `{{get}}` helper and
[`ember-responsive`](https://github.com/freshbooks/ember-responsive). Note that
`{{get}}` returns a bound reference.

```hbs
{{#if (get (service "breakpoints") "isDesktop")}}
  Desktop breakpoint
{{else}}
  Mobile breakpoint
{{/if}}
```

#### Setting Properties

Example using [`ember-set-helper`](https://github.com/pzuraq/ember-set-helper).

```hbs
<ColorPicker @update={{set (service "preferences") "favoriteColor"}}>
```

### Methods

Example using the
[`{{pick}}` helper from `ember-composable-helpers`](https://github.com/DockYard/ember-composable-helpers#pick)
to get the `event.target.checked` property.

```hbs
<label>
  Enable dark mode
  <input
    type="checkbox"
    checked={{get (service "theme") "isDark"}}
    {{on "input" (pick "target.checked" (service "theme" "toggleDarkMode"))}}
  >
</label>
```

```ts
export default class ThemeService extends Service {
  @tracked isDark = false;

  toggleDarkMode(newValue = !this.isDark) {
    // Even though this method isn't using `@action`, the `{{service}}` helper
    // binds it to the service instance.
    this.isDark = newValue;
  }
}
```

## Related

- [Pre-RFC 543: Ability to inject service into Template Only component](https://github.com/emberjs/rfcs/issues/543)
