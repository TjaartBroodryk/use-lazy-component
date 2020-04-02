[![npm](https://img.shields.io/badge/npm-use--lazy--component-red.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/react-web-view-pager)
[![npm](https://img.shields.io/npm/v/use-lazy-component.svg?style=for-the-badge&label)](https://www.npmjs.com/react-web-view-pager)

Simple react hook to lazily load a component

- Can be used as a very simplistic alternative to `React.Suspense`

## Installation

```sh
npm i -s use-lazy-component
```
Or
```sh
yarn add use-lazy-component
```

## Usage
Basic usage

```ts
import useLazyComponent from 'use-lazy-component';
```

```jsx padded 
const SomeComponent = () => {
  const { component: Component, loading, error } = useLazyComponent<BigComponent>(
    () => import('./bigComponent');
  );

  return (
    <div>
      {!loading && <Component/> }
    </div>
  )
}
```

 Load different component depending on result of promise
```ts
import useLazyComponent from 'use-lazy-component';
```

```jsx padded 
const SomeComponent = () => {
  const { component: Component, loading, error } = useLazyComponent<BigComponent>(
    async () => {
      const result = await someAsyncFunction();

      if (result) {
        return import('./bigComponent');
      }
      return import('./defaultComponent');
    }
  );

  return (
    <div>
      {!loading && <Component/> }
    </div>
  )
}
```