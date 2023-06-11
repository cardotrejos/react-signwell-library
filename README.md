# React SignWell Library

## Description

A lightweight React library for integrating SignWell functionality into your application. Easily embed SignWell's signing capabilities directly into your projects.

Check SignWell's documentation for more information about the embedded signing: [https://developers.signwell.com/reference/embedded-signing](https://developers.signwell.com/reference/embedded-signing)

## Installation

To install this library, you need to have Node.js and npm installed on your machine. If you do not have these installed, you can download them from [here](https://nodejs.org/).

Once you have Node.js and npm installed, you can install the `react-signwell-library` using npm:

```bash
npm install react-signwell-library
```

Also you can install the `react-signwell-library` using yarn:

```bash
yarn add react-signwell-library
```

## Usage

In your React application, you can import the `SignWellEmbedComponent` from the `react-signwell-library` and use it as a component:

```jsx
import { SignWellEmbedComponent } from 'react-signwell-library'

// Use the component in your application
<SignWellEmbedComponent embeddedSigningUrl='https://example.com' />
```

## API Documentation

The `SignWellEmbedComponent` accepts the following props:

- `embeddedSigningUrl` (string): The URL for the SignWell embedded signing.

## Example

Here's an example of how to use the `SignWellEmbedComponent`:

```jsx
import React from 'react'
import { SignWellEmbedComponent } from 'react-signwell-library'

function App() {
  return (
    <div className="App">
      <SignWellEmbedComponent embeddedSigningUrl='https://example.com' />
    </div>
  )
}

export default App
```

## Contributing

If you have suggestions for how `react-signwell-library` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](./CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2023 Ricardo Trejos

## Contact

- GitHub: [@cardotrejos](https://github.com/cardotrejos)
- Email: [cardotrejos@gmail.com](mailto:cardotrejos@gmail.com)