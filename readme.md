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
import React from 'react'
import IconCached from '@aboutbits/react-material-icons/dist/IconCached'

const MyCommponent = () => {
    return (
        <IconCached/>
    );
}
``` 

SVG related parameters like height and width can be passed as props.

To import the different variants of an icon you can add the variants as a postfix:

- `Icon10k` > Default filled
- `Icon10kOutlined` > Outlined
- `Icon10kRound` > Rounded
- `Icon10kSharp` > Sharp
- `Icon10kTwoTone` > Tow tone

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

To publish the package commit all changes and push them to master. Then run one of the following commands locally:

```bash
npm version patch
npm version minor
npm version major
```

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
