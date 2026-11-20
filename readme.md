React Material Icons
====================

[![npm package](https://badge.fury.io/js/%40aboutbits%2Freact-material-icons.svg)](https://badge.fury.io/js/%40aboutbits%2Freact-material-icons)
[![license](https://img.shields.io/github/license/aboutbits/react-material-icons)](https://github.com/aboutbits/react-material-icons/blob/master/license.md)

This package includes all [Material Icons](https://material.io/resources/icons/?style=baseline) as reusable React components.

## Table of content

- [Usage](#usage)
- [Generate Components](#generate-components)
- [Build & Publish](#build--publish)
- [Information](#information)

## Usage

First, you have to install the package:

```bash
npm install @aboutbits/react-material-icons
```

Second, you can use the icons in you React application like this:

```jsx
import { IconCachedOutlined } from '@aboutbits/react-material-icons/IconCachedOutlined'

const MyComponent = () => {
    return <IconCachedOutlined />
}
```

Every icon is its own entry point, so only the icons you import end up in your bundle. There is intentionally no root entry that exports all icons.

The package is ESM only and requires Node.js 20.19 or newer.

SVG related parameters like height and width can be passed as props. The props type can be imported as well:

```ts
import type { IconProps } from '@aboutbits/react-material-icons/types'
```

To import the different variants of an icon you can add the variants as a postfix:

- `Icon10kOutlined` > Outlined
- `Icon10kRounded` > Rounded
- `Icon10kSharp` > Sharp
- `Icon10kOutlinedFilled`, `Icon10kRoundedFilled`, `Icon10kSharpFilled` > Filled versions of the above

## Generate Components

To clear the directory with the existing icons before regenerating them:

```bash
npm run clear
```

To generate the components, simply run the following command:

```bash
npm run generate
```

## Build & Publish

To build and publish the package, visit the GitHub Actions page of the repository.

You can choose between two workflows:
- `Release Package` to publish a new version of the package.
- `Pre-Release Package` to publish a new pre-release version of the package.

**Note:** Pre-releases need to be supplied with a pre-id.

**Note:** To increment a pre-release, you have to run the normal release workflow and select "prerelease". For this action you need to already be on a pre-release version.

## Information

About Bits is a company based in South Tyrol, Italy. You can find more information about us on [our website](https://aboutbits.it).

### Support

For support, please contact [info@aboutbits.it](mailto:info@aboutbits.it).

### Credits

- [Simon Planinschek](https://github.com/stplasim)
- [Alex Lanz](https://github.com/alexlanz)
- [Martin Malfertheiner](https://github.com/mmalfertheiner)
- [All Contributors](../../contributors)

### License

The MIT License (MIT). Please see the [license file](license.md) for more information.
