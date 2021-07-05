# Change Log

## 0.16.3

### Patch Changes

- 3cd0ac51: add support for using language subtag only

## 0.16.2

### Patch Changes

- 84131205: use mdjs-preview in docs for lit compatibility
- Updated dependencies [84131205]
  - @lion/core@0.18.1
  - @lion/localize@0.20.2

## 0.16.1

### Patch Changes

- Updated dependencies [5ca3d275]
  - @lion/localize@0.20.1

## 0.16.0

### Minor Changes

- 72067c0d: **BREAKING** Upgrade to [lit](https://lit.dev/) version 2

  This does not change any of the public APIs of lion.
  It however effects you when you have your own extension layer or your own components especially when using directives.
  See the [official lit upgrade guide](https://lit.dev/docs/releases/upgrade/).

  **BREAKING** Upgrade to [ScopedElements](https://open-wc.org/docs/development/scoped-elements/) version 2

  This version of `@open-wc/scoped-elements` is now following the [Scoped Custom Element Registries](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md) and automatically loads a polyfill [@webcomponents/scoped-custom-element-registry](https://github.com/webcomponents/polyfills/tree/master/packages/scoped-custom-element-registry).

  This means tag names are no longer being rewritten with a hash.

  ```js
  import { css, LitElement } from 'lit';
  import { ScopedElementsMixin } from '@open-wc/scoped-elements';
  import { MyButton } from './MyButton.js';

  export class MyElement extends ScopedElementsMixin(LitElement) {
    static get scopedElements() {
      return {
        'my-button': MyButton,
      };
    }

    render() {
      return html`
        <my-button>click me</my-button>
      `;
    }
  }
  ```

  ```html
  <!-- before (ScopedElements 1.x) -->
  <my-element>
    #shadow-root
    <my-button-23243424>click me</my-button-23243424>
  </my-element>

  <!-- after (ScopedElements 2.x) -->
  <my-element>
    #shadow-root
    <my-button>click me</my-button>
  </my-element>
  ```

### Patch Changes

- Updated dependencies [72067c0d]
  - @lion/core@0.18.0
  - @lion/localize@0.20.0

## 0.15.0

### Minor Changes

- 02e4f2cb: add simulator to demos

### Patch Changes

- eae38926: Calendar allows to reinitialize centralDate properly. Datepicker calls this functionality on opening the calendar.
- Updated dependencies [02e4f2cb]
  - @lion/core@0.17.0
  - @lion/localize@0.19.0

## 0.14.3

### Patch Changes

- f0527583: fix: expose members as protected for extension compat. till v1

## 0.14.2

### Patch Changes

- 77a04245: add protected and private type info
- Updated dependencies [77a04245]
- Updated dependencies [43e4bb81]
  - @lion/core@0.16.0
  - @lion/localize@0.18.0

## 0.14.1

### Patch Changes

- 59dad284: Removed lion-specific component namings from overview.md files

## 0.14.0

### Minor Changes

- f3e54c56: Publish documentation with a format for Rocket
- 5db622e9: BREAKING: Align exports fields. This means no more wildcards, meaning you always import with bare import specifiers, extensionless. Import components where customElements.define side effect is executed by importing from '@lion/package/define'. For multi-component packages this defines all components (e.g. radio-group + radio). If you want to only import a single one, do '@lion/radio-group/define-radio' for example for just lion-radio.

### Patch Changes

- Updated dependencies [f3e54c56]
- Updated dependencies [5db622e9]
  - @lion/core@0.15.0
  - @lion/localize@0.17.0

## 0.13.1

### Patch Changes

- 701aadce: Fix types of mixins to include LitElement static props and methods, and use Pick generic type instead of fake constructors.
- Updated dependencies [701aadce]
  - @lion/core@0.14.1
  - @lion/localize@0.16.1

## 0.13.0

### Minor Changes

- b2f981db: Add exports field in package.json

  Note that some tools can break with this change as long as they respect the exports field. If that is the case, check that you always access the elements included in the exports field, with the same name which they are exported. Any item not exported is considered private to the package and should not be accessed from the outside.

### Patch Changes

- Updated dependencies [b2f981db]
  - @lion/core@0.14.0
  - @lion/localize@0.16.0

## 0.12.11

### Patch Changes

- 8fb7e7a1: Fix type issues where base constructors would not have the same return type. This allows us to remove a LOT of @ts-expect-errors/@ts-ignores across lion.
- 9112d243: Fix missing types and update to latest scoped elements to fix constructor type.
- Updated dependencies [8fb7e7a1]
- Updated dependencies [9112d243]
  - @lion/core@0.13.8
  - @lion/localize@0.15.5

## 0.12.10

### Patch Changes

- 98f1bb7e: Ensure all lit imports are imported from @lion/core. Remove devDependencies in all subpackages and move to root package.json. Add demo dependencies as real dependencies for users that extend our docs/demos.
- Updated dependencies [a8cf4215]
- Updated dependencies [98f1bb7e]
  - @lion/localize@0.15.4
  - @lion/core@0.13.7

## 0.12.9

### Patch Changes

- Updated dependencies [9fba9007]
  - @lion/core@0.13.6
  - @lion/localize@0.15.3

## 0.12.8

### Patch Changes

- f82b5c18: solve previousMonth and nextMonth conditions error
- Updated dependencies [41edf033]
  - @lion/core@0.13.5
  - @lion/localize@0.15.2

## 0.12.7

### Patch Changes

- 69e38a76: Fix event handler bind so the events are cleaned up properly in disconnectedCallback

## 0.12.6

### Patch Changes

- 1981eb0d: Fix an issue with events being added more than once in datepicker overlay. Also fix a bug where useCapture resulted in weird click behavior when clicking dates in previous or next month.
  - @lion/localize@0.15.1

## 0.12.5

### Patch Changes

- Updated dependencies [3ada1aef]
  - @lion/localize@0.15.0

## 0.12.4

### Patch Changes

- cfbcccb5: Fix type imports to reuse lion where possible, in case Lit updates with new types that may break us.
- Updated dependencies [cfbcccb5]
  - @lion/core@0.13.4
  - @lion/localize@0.14.9

## 0.12.3

### Patch Changes

- Updated dependencies [e2e4deec]
- Updated dependencies [8ca71b8f]
  - @lion/core@0.13.3
  - @lion/localize@0.14.8

## 0.12.2

### Patch Changes

- Updated dependencies [20ba0ca8]
- Updated dependencies [618f2698]
  - @lion/core@0.13.2
  - @lion/localize@0.14.7

## 0.12.1

### Patch Changes

- Updated dependencies [7682e520]
- Updated dependencies [e92b98a4]
  - @lion/localize@0.14.6
  - @lion/core@0.13.1

## 0.12.0

### Minor Changes

- e9cee039: Add types for calendar and datepicker packages.

## 0.11.3

### Patch Changes

- Updated dependencies [01a798e5]
- Updated dependencies [b9327627]
  - @lion/core@0.13.0
  - @lion/localize@0.14.5

## 0.11.2

### Patch Changes

- Updated dependencies [75107a4b]
  - @lion/core@0.12.0
  - @lion/localize@0.14.4

## 0.11.1

### Patch Changes

- 5a750408: Make button text clickable by setting pointer-events to none
- Updated dependencies [874ff483]
  - @lion/core@0.11.0
  - @lion/localize@0.14.3

## 0.11.0

### Minor Changes

- 65ecd432: Update to lit-element 2.4.0, changed all uses of \_requestUpdate into requestUpdateInterval

### Patch Changes

- Updated dependencies [65ecd432]
- Updated dependencies [4dc621a0]
  - @lion/core@0.10.0
  - @lion/localize@0.14.2

## 0.10.0

### Minor Changes

- bd0439be: feat: add year navigation and styling hooks on the day template

## 0.9.8

### Patch Changes

- Updated dependencies [4b3ac525]
  - @lion/core@0.9.1
  - @lion/localize@0.14.1

## 0.9.7

### Patch Changes

- Updated dependencies [3c61fd29]
- Updated dependencies [09d96759]
- Updated dependencies [9ecab4d5]
  - @lion/core@0.9.0
  - @lion/localize@0.14.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.9.6](https://github.com/ing-bank/lion/compare/@lion/calendar@0.9.5...@lion/calendar@0.9.6) (2020-07-13)

**Note:** Version bump only for package @lion/calendar

## [0.9.5](https://github.com/ing-bank/lion/compare/@lion/calendar@0.9.4...@lion/calendar@0.9.5) (2020-07-07)

**Note:** Version bump only for package @lion/calendar

## [0.9.4](https://github.com/ing-bank/lion/compare/@lion/calendar@0.9.3...@lion/calendar@0.9.4) (2020-06-18)

**Note:** Version bump only for package @lion/calendar

## [0.9.3](https://github.com/ing-bank/lion/compare/@lion/calendar@0.9.2...@lion/calendar@0.9.3) (2020-06-08)

**Note:** Version bump only for package @lion/calendar

## [0.9.2](https://github.com/ing-bank/lion/compare/@lion/calendar@0.9.1...@lion/calendar@0.9.2) (2020-06-08)

**Note:** Version bump only for package @lion/calendar

## [0.9.1](https://github.com/ing-bank/lion/compare/@lion/calendar@0.9.0...@lion/calendar@0.9.1) (2020-06-03)

### Bug Fixes

- remove all stories folders from npm ([1e04d06](https://github.com/ing-bank/lion/commit/1e04d06921f9d5e1a446b6d14045154ff83771c3))

# [0.9.0](https://github.com/ing-bank/lion/compare/@lion/calendar@0.8.0...@lion/calendar@0.9.0) (2020-05-29)

### Features

- use markdown javascript (mdjs) for documentation ([bcd074d](https://github.com/ing-bank/lion/commit/bcd074d1fbce8754d428538df723ba402603e2c8))

# [0.8.0](https://github.com/ing-bank/lion/compare/@lion/calendar@0.7.2...@lion/calendar@0.8.0) (2020-05-18)

### Features

- use singleton manager to support nested npm installations ([e2eb0e0](https://github.com/ing-bank/lion/commit/e2eb0e0077b9efed9382701461753778f63cad48))

## [0.7.2](https://github.com/ing-bank/lion/compare/@lion/calendar@0.7.1...@lion/calendar@0.7.2) (2020-04-29)

### Bug Fixes

- add display:none for hidden ([#692](https://github.com/ing-bank/lion/issues/692)) ([9731771](https://github.com/ing-bank/lion/commit/9731771c23a5ed8661558e62cb5e34b62cc2b8b7))

## [0.7.1](https://github.com/ing-bank/lion/compare/@lion/calendar@0.7.0...@lion/calendar@0.7.1) (2020-04-02)

### Bug Fixes

- convert unnecessary backticks to single quotes for unpkg ([5103289](https://github.com/ing-bank/lion/commit/5103289f994c26f63e805be56515f150628acd91))

# [0.7.0](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.13...@lion/calendar@0.7.0) (2020-03-25)

### Features

- refrain from using dynamic vars inside dynamic import ([42c840f](https://github.com/ing-bank/lion/commit/42c840f9498810a81296c9beb8a4f6bbdbc4fa0b))

## [0.6.13](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.12...@lion/calendar@0.6.13) (2020-03-05)

**Note:** Version bump only for package @lion/calendar

## [0.6.12](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.11...@lion/calendar@0.6.12) (2020-03-04)

**Note:** Version bump only for package @lion/calendar

## [0.6.11](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.10...@lion/calendar@0.6.11) (2020-02-26)

**Note:** Version bump only for package @lion/calendar

## [0.6.10](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.9...@lion/calendar@0.6.10) (2020-02-19)

### Bug Fixes

- reduce storybook chunck sizes for more performance ([9fc5606](https://github.com/ing-bank/lion/commit/9fc560605f5dcf6e9abcf8d58079c59f12750046))

## [0.6.9](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.8...@lion/calendar@0.6.9) (2020-02-06)

**Note:** Version bump only for package @lion/calendar

## [0.6.8](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.7...@lion/calendar@0.6.8) (2020-02-03)

**Note:** Version bump only for package @lion/calendar

## [0.6.7](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.6...@lion/calendar@0.6.7) (2020-01-30)

### Bug Fixes

- remove unused (dev)dependency on lion-button ([41f5af7](https://github.com/ing-bank/lion/commit/41f5af71cae2bc6b5ee979a5ba83301d14592a2c))

## [0.6.6](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.5...@lion/calendar@0.6.6) (2020-01-30)

**Note:** Version bump only for package @lion/calendar

## [0.6.5](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.4...@lion/calendar@0.6.5) (2020-01-23)

**Note:** Version bump only for package @lion/calendar

## [0.6.4](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.3...@lion/calendar@0.6.4) (2020-01-23)

**Note:** Version bump only for package @lion/calendar

## [0.6.3](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.2...@lion/calendar@0.6.3) (2020-01-20)

**Note:** Version bump only for package @lion/calendar

## [0.6.2](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.1...@lion/calendar@0.6.2) (2020-01-17)

**Note:** Version bump only for package @lion/calendar

## [0.6.1](https://github.com/ing-bank/lion/compare/@lion/calendar@0.6.0...@lion/calendar@0.6.1) (2020-01-17)

### Bug Fixes

- update storybook and use main.js ([e61e0b9](https://github.com/ing-bank/lion/commit/e61e0b938ff72cc18cc0b3aa1560f2cece0c9fe6))

# [0.6.0](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.8...@lion/calendar@0.6.0) (2020-01-13)

### Features

- improved storybook demos ([89b835a](https://github.com/ing-bank/lion/commit/89b835a79998c45a28093de01f69216c35009a40))

## [0.5.8](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.7...@lion/calendar@0.5.8) (2020-01-08)

**Note:** Version bump only for package @lion/calendar

## [0.5.7](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.6...@lion/calendar@0.5.7) (2019-12-17)

### Bug Fixes

- **#423:** prevent default behavior on keyboard interaction ([caf9ab2](https://github.com/ing-bank/lion/commit/caf9ab2f8aa526306acddd6f911e70dfbbcbf963)), closes [#423](https://github.com/ing-bank/lion/issues/423)

## [0.5.6](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.5...@lion/calendar@0.5.6) (2019-12-16)

**Note:** Version bump only for package @lion/calendar

## [0.5.5](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.4...@lion/calendar@0.5.5) (2019-12-13)

**Note:** Version bump only for package @lion/calendar

## [0.5.4](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.3...@lion/calendar@0.5.4) (2019-12-11)

**Note:** Version bump only for package @lion/calendar

## [0.5.3](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.2...@lion/calendar@0.5.3) (2019-12-06)

**Note:** Version bump only for package @lion/calendar

## [0.5.2](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.1...@lion/calendar@0.5.2) (2019-12-06)

### Bug Fixes

- **calendar:** make tests independents of execution date ([7bddabe](https://github.com/ing-bank/lion/commit/7bddabed86c89648e476a808915985d1df5930e9))
- **catalog:** add info for next/previous month on to the buttons ([#384](https://github.com/ing-bank/lion/issues/384)) ([b6ec5a8](https://github.com/ing-bank/lion/commit/b6ec5a8cb550b207d72846ca79a220187b9ea5d2))

## [0.5.1](https://github.com/ing-bank/lion/compare/@lion/calendar@0.5.0...@lion/calendar@0.5.1) (2019-12-04)

**Note:** Version bump only for package @lion/calendar

# [0.5.0](https://github.com/ing-bank/lion/compare/@lion/calendar@0.4.2...@lion/calendar@0.5.0) (2019-12-04)

### Features

- integrate and pass automated a11y testing ([e1a417b](https://github.com/ing-bank/lion/commit/e1a417b041431e4e25a5b6a63e23ba0a3974f5a5))

## [0.4.2](https://github.com/ing-bank/lion/compare/@lion/calendar@0.4.1...@lion/calendar@0.4.2) (2019-12-03)

### Bug Fixes

- let lerna publish fixed versions ([bc7448c](https://github.com/ing-bank/lion/commit/bc7448c694deb3c05fd3d083a9acb5365b26b7ab))

## [0.4.1](https://github.com/ing-bank/lion/compare/@lion/calendar@0.4.0...@lion/calendar@0.4.1) (2019-12-02)

### Bug Fixes

- use strict versions to get correct deps on older versions ([8645c13](https://github.com/ing-bank/lion/commit/8645c13b1d77e488713f2e5e0e4e00c4d30ea1ee))

# [0.4.0](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.8...@lion/calendar@0.4.0) (2019-12-01)

### Features

- **overlays:** improve API for overriding controller config in mixin ([45f5571](https://github.com/ing-bank/lion/commit/45f557183d7bef95ea9685d751e90ba12a4eb2d8))

## [0.3.8](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.7...@lion/calendar@0.3.8) (2019-11-28)

**Note:** Version bump only for package @lion/calendar

## [0.3.7](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.6...@lion/calendar@0.3.7) (2019-11-27)

**Note:** Version bump only for package @lion/calendar

## [0.3.6](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.5...@lion/calendar@0.3.6) (2019-11-27)

**Note:** Version bump only for package @lion/calendar

## [0.3.5](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.4...@lion/calendar@0.3.5) (2019-11-26)

**Note:** Version bump only for package @lion/calendar

## [0.3.4](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.3...@lion/calendar@0.3.4) (2019-11-22)

**Note:** Version bump only for package @lion/calendar

## [0.3.3](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.2...@lion/calendar@0.3.3) (2019-11-19)

**Note:** Version bump only for package @lion/calendar

## [0.3.2](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.1...@lion/calendar@0.3.2) (2019-11-18)

**Note:** Version bump only for package @lion/calendar

## [0.3.1](https://github.com/ing-bank/lion/compare/@lion/calendar@0.3.0...@lion/calendar@0.3.1) (2019-11-15)

**Note:** Version bump only for package @lion/calendar

# [0.3.0](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.12...@lion/calendar@0.3.0) (2019-11-13)

### Bug Fixes

- **calendar:** make calendar more accessible ([7225d9d](https://github.com/ing-bank/lion/commit/7225d9d4ad4988844aef309d6d4bb0723189c716))

### Features

- remove all deprecations from lion ([66d3d39](https://github.com/ing-bank/lion/commit/66d3d390aebeaa61b6effdea7d5f7eea0e89c894))

## [0.2.12](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.11...@lion/calendar@0.2.12) (2019-11-12)

**Note:** Version bump only for package @lion/calendar

## [0.2.11](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.10...@lion/calendar@0.2.11) (2019-11-06)

**Note:** Version bump only for package @lion/calendar

## [0.2.10](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.9...@lion/calendar@0.2.10) (2019-11-01)

**Note:** Version bump only for package @lion/calendar

## [0.2.9](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.8...@lion/calendar@0.2.9) (2019-10-25)

**Note:** Version bump only for package @lion/calendar

## [0.2.8](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.7...@lion/calendar@0.2.8) (2019-10-23)

**Note:** Version bump only for package @lion/calendar

## [0.2.7](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.6...@lion/calendar@0.2.7) (2019-10-23)

**Note:** Version bump only for package @lion/calendar

## [0.2.6](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.5...@lion/calendar@0.2.6) (2019-10-21)

**Note:** Version bump only for package @lion/calendar

## [0.2.5](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.4...@lion/calendar@0.2.5) (2019-10-21)

**Note:** Version bump only for package @lion/calendar

## [0.2.4](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.3...@lion/calendar@0.2.4) (2019-10-18)

### Bug Fixes

- **calendar:** issue 302 part 2 - skipped month ([f04256c](https://github.com/ing-bank/lion/commit/f04256c))

## [0.2.3](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.2...@lion/calendar@0.2.3) (2019-10-14)

**Note:** Version bump only for package @lion/calendar

## [0.2.2](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.1...@lion/calendar@0.2.2) (2019-10-11)

**Note:** Version bump only for package @lion/calendar

## [0.2.1](https://github.com/ing-bank/lion/compare/@lion/calendar@0.2.0...@lion/calendar@0.2.1) (2019-10-11)

**Note:** Version bump only for package @lion/calendar

# [0.2.0](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.71...@lion/calendar@0.2.0) (2019-10-10)

### Features

- update to latest overlay system ([4c26bef](https://github.com/ing-bank/lion/commit/4c26bef))

## [0.1.71](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.70...@lion/calendar@0.1.71) (2019-10-09)

**Note:** Version bump only for package @lion/calendar

## [0.1.70](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.69...@lion/calendar@0.1.70) (2019-10-07)

**Note:** Version bump only for package @lion/calendar

## [0.1.69](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.68...@lion/calendar@0.1.69) (2019-09-30)

**Note:** Version bump only for package @lion/calendar

## [0.1.68](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.67...@lion/calendar@0.1.68) (2019-09-27)

**Note:** Version bump only for package @lion/calendar

## [0.1.67](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.66...@lion/calendar@0.1.67) (2019-09-26)

### Bug Fixes

- **calendar:** render the calendar when min and max date are same date ([b9747ef](https://github.com/ing-bank/lion/commit/b9747ef))

## [0.1.66](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.65...@lion/calendar@0.1.66) (2019-09-26)

**Note:** Version bump only for package @lion/calendar

## [0.1.65](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.64...@lion/calendar@0.1.65) (2019-09-25)

**Note:** Version bump only for package @lion/calendar

## [0.1.64](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.63...@lion/calendar@0.1.64) (2019-09-20)

**Note:** Version bump only for package @lion/calendar

## [0.1.63](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.62...@lion/calendar@0.1.63) (2019-09-19)

**Note:** Version bump only for package @lion/calendar

## [0.1.62](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.61...@lion/calendar@0.1.62) (2019-09-17)

**Note:** Version bump only for package @lion/calendar

## [0.1.61](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.60...@lion/calendar@0.1.61) (2019-09-13)

**Note:** Version bump only for package @lion/calendar

## [0.1.60](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.59...@lion/calendar@0.1.60) (2019-08-29)

**Note:** Version bump only for package @lion/calendar

## [0.1.59](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.58...@lion/calendar@0.1.59) (2019-08-23)

**Note:** Version bump only for package @lion/calendar

## [0.1.58](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.57...@lion/calendar@0.1.58) (2019-08-21)

**Note:** Version bump only for package @lion/calendar

## [0.1.57](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.56...@lion/calendar@0.1.57) (2019-08-17)

**Note:** Version bump only for package @lion/calendar

## [0.1.56](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.55...@lion/calendar@0.1.56) (2019-08-15)

**Note:** Version bump only for package @lion/calendar

## [0.1.55](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.54...@lion/calendar@0.1.55) (2019-08-15)

**Note:** Version bump only for package @lion/calendar

## [0.1.54](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.53...@lion/calendar@0.1.54) (2019-08-14)

**Note:** Version bump only for package @lion/calendar

## [0.1.53](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.52...@lion/calendar@0.1.53) (2019-08-12)

### Bug Fixes

- **calendar:** generated dates are normalized ([fe72ebd](https://github.com/ing-bank/lion/commit/fe72ebd))
- **calendar:** normalize dates for min/max date comparison ([afddc0e](https://github.com/ing-bank/lion/commit/afddc0e))

## [0.1.52](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.51...@lion/calendar@0.1.52) (2019-08-07)

**Note:** Version bump only for package @lion/calendar

## [0.1.51](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.50...@lion/calendar@0.1.51) (2019-08-07)

**Note:** Version bump only for package @lion/calendar

## [0.1.50](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.49...@lion/calendar@0.1.50) (2019-08-01)

### Bug Fixes

- **calendar:** stop disabled date triggering [@user-selected-date-changed](https://github.com/user-selected-date-changed) ([57823d1](https://github.com/ing-bank/lion/commit/57823d1))

## [0.1.49](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.48...@lion/calendar@0.1.49) (2019-07-30)

### Bug Fixes

- include test-helpers dir in the released package ([6489069](https://github.com/ing-bank/lion/commit/6489069))

## [0.1.48](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.47...@lion/calendar@0.1.48) (2019-07-30)

### Bug Fixes

- public test-helpers ([3b889e3](https://github.com/ing-bank/lion/commit/3b889e3))

## [0.1.47](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.46...@lion/calendar@0.1.47) (2019-07-29)

**Note:** Version bump only for package @lion/calendar

## [0.1.46](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.45...@lion/calendar@0.1.46) (2019-07-26)

**Note:** Version bump only for package @lion/calendar

## [0.1.45](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.44...@lion/calendar@0.1.45) (2019-07-25)

**Note:** Version bump only for package @lion/calendar

## [0.1.44](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.43...@lion/calendar@0.1.44) (2019-07-24)

**Note:** Version bump only for package @lion/calendar

## [0.1.43](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.42...@lion/calendar@0.1.43) (2019-07-24)

**Note:** Version bump only for package @lion/calendar

## [0.1.42](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.41...@lion/calendar@0.1.42) (2019-07-23)

**Note:** Version bump only for package @lion/calendar

## [0.1.41](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.40...@lion/calendar@0.1.41) (2019-07-23)

**Note:** Version bump only for package @lion/calendar

## [0.1.40](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.39...@lion/calendar@0.1.40) (2019-07-23)

**Note:** Version bump only for package @lion/calendar

## [0.1.39](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.38...@lion/calendar@0.1.39) (2019-07-22)

**Note:** Version bump only for package @lion/calendar

## [0.1.38](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.37...@lion/calendar@0.1.38) (2019-07-19)

**Note:** Version bump only for package @lion/calendar

## [0.1.37](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.36...@lion/calendar@0.1.37) (2019-07-19)

**Note:** Version bump only for package @lion/calendar

## [0.1.36](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.35...@lion/calendar@0.1.36) (2019-07-18)

**Note:** Version bump only for package @lion/calendar

## [0.1.35](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.34...@lion/calendar@0.1.35) (2019-07-17)

### Bug Fixes

- support Chinese language ([a0ebd2d](https://github.com/ing-bank/lion/commit/a0ebd2d))

## [0.1.34](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.33...@lion/calendar@0.1.34) (2019-07-16)

**Note:** Version bump only for package @lion/calendar

## [0.1.33](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.32...@lion/calendar@0.1.33) (2019-07-16)

**Note:** Version bump only for package @lion/calendar

## [0.1.32](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.31...@lion/calendar@0.1.32) (2019-07-15)

**Note:** Version bump only for package @lion/calendar

## [0.1.31](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.30...@lion/calendar@0.1.31) (2019-07-15)

**Note:** Version bump only for package @lion/calendar

## [0.1.30](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.29...@lion/calendar@0.1.30) (2019-07-12)

**Note:** Version bump only for package @lion/calendar

## [0.1.29](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.28...@lion/calendar@0.1.29) (2019-07-09)

**Note:** Version bump only for package @lion/calendar

## [0.1.28](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.27...@lion/calendar@0.1.28) (2019-07-04)

**Note:** Version bump only for package @lion/calendar

## [0.1.27](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.26...@lion/calendar@0.1.27) (2019-07-02)

**Note:** Version bump only for package @lion/calendar

## [0.1.26](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.25...@lion/calendar@0.1.26) (2019-07-02)

**Note:** Version bump only for package @lion/calendar

## [0.1.25](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.24...@lion/calendar@0.1.25) (2019-07-01)

**Note:** Version bump only for package @lion/calendar

## [0.1.24](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.23...@lion/calendar@0.1.24) (2019-06-27)

**Note:** Version bump only for package @lion/calendar

## [0.1.23](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.22...@lion/calendar@0.1.23) (2019-06-27)

**Note:** Version bump only for package @lion/calendar

## [0.1.22](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.21...@lion/calendar@0.1.22) (2019-06-24)

**Note:** Version bump only for package @lion/calendar

## [0.1.21](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.20...@lion/calendar@0.1.21) (2019-06-20)

### Bug Fixes

- support en-PH locale for polymer-cli ([7643e64](https://github.com/ing-bank/lion/commit/7643e64))

## [0.1.20](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.19...@lion/calendar@0.1.20) (2019-06-18)

### Bug Fixes

- support language fallback for non found locales ([#102](https://github.com/ing-bank/lion/issues/102)) ([b729bf0](https://github.com/ing-bank/lion/commit/b729bf0))

## [0.1.19](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.18...@lion/calendar@0.1.19) (2019-06-13)

**Note:** Version bump only for package @lion/calendar

## [0.1.18](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.17...@lion/calendar@0.1.18) (2019-06-06)

**Note:** Version bump only for package @lion/calendar

## [0.1.17](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.16...@lion/calendar@0.1.17) (2019-06-04)

**Note:** Version bump only for package @lion/calendar

## [0.1.16](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.15...@lion/calendar@0.1.16) (2019-06-04)

### Bug Fixes

- **calendar:** init centralDate from selectedDate when today is disabled ([1643379](https://github.com/ing-bank/lion/commit/1643379))

## [0.1.15](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.14...@lion/calendar@0.1.15) (2019-05-31)

**Note:** Version bump only for package @lion/calendar

## [0.1.14](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.13...@lion/calendar@0.1.14) (2019-05-31)

**Note:** Version bump only for package @lion/calendar

## [0.1.13](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.12...@lion/calendar@0.1.13) (2019-05-29)

**Note:** Version bump only for package @lion/calendar

## [0.1.12](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.11...@lion/calendar@0.1.12) (2019-05-29)

**Note:** Version bump only for package @lion/calendar

## [0.1.11](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.10...@lion/calendar@0.1.11) (2019-05-27)

**Note:** Version bump only for package @lion/calendar

## [0.1.10](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.9...@lion/calendar@0.1.10) (2019-05-24)

**Note:** Version bump only for package @lion/calendar

## [0.1.9](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.8...@lion/calendar@0.1.9) (2019-05-22)

**Note:** Version bump only for package @lion/calendar

## [0.1.8](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.7...@lion/calendar@0.1.8) (2019-05-21)

**Note:** Version bump only for package @lion/calendar

## [0.1.7](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.6...@lion/calendar@0.1.7) (2019-05-21)

**Note:** Version bump only for package @lion/calendar

## [0.1.6](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.5...@lion/calendar@0.1.6) (2019-05-17)

**Note:** Version bump only for package @lion/calendar

## [0.1.5](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.4...@lion/calendar@0.1.5) (2019-05-16)

**Note:** Version bump only for package @lion/calendar

## [0.1.4](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.3...@lion/calendar@0.1.4) (2019-05-16)

**Note:** Version bump only for package @lion/calendar

## [0.1.3](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.2...@lion/calendar@0.1.3) (2019-05-16)

**Note:** Version bump only for package @lion/calendar

## [0.1.2](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.1...@lion/calendar@0.1.2) (2019-05-15)

**Note:** Version bump only for package @lion/calendar

## [0.1.1](https://github.com/ing-bank/lion/compare/@lion/calendar@0.1.0...@lion/calendar@0.1.1) (2019-05-14)

**Note:** Version bump only for package @lion/calendar

# 0.1.0 (2019-05-13)

### Features

- **calendar:** add reusable calendar ([9fc5488](https://github.com/ing-bank/lion/commit/9fc5488))
