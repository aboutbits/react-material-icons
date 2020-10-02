React Material Icons
====================

This package includes all [Material Icons](https://material.io/resources/icons/?style=baseline) as reusable react components

## Table of content
- [Usage](#usage)
- [Build & Publish](#build--publish)
- [Information](#information)

## Usage

In order to use this package you have to install it through npm
```bash
npm install @aboutbits/react-material-icons
```

After you successfully installed the package you can simply use the icons in you react application like this
```jsx
import React from 'react'

const MyCommponent = () => {
    return (
        <IconCached />
    );   
}
``` 

SVG related parameters like height and width can be passed as props

## Build & Publish

To build the package, simply run the following command
```bash
npm run build
```

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