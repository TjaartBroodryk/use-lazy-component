[![npm](https://img.shields.io/badge/npm-react--web--view--pager-red.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/react-web-view-pager)
[![npm](https://img.shields.io/npm/v/react-web-view-pager.svg?style=for-the-badge&label)](https://www.npmjs.com/react-web-view-pager)

Simple react component to implement a viewpager for use on web apps.
Basically uses a horizontal scroll snap with a customizable configuration and a consistent cross browser behaviour.

- works in all modern browsers
- requestAnimationFrame for 60fps
- customizable configuration (including easing functions)
- no additional dependencies

## Installation

```sh
npm i -s react-web-view-pager
```
Or
```sh
yarn add react-web-view-pager
```

## Usage
```ts
import ViewPager from 'react-web-view-pager
```

```jsx padded 
<ViewPager 
  duration={300}
  timeout={100}
  easing={(t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }}
  activePage={0} 
  offset="8rem"
  pages={[
    <LoginForm/>,
    <SignUpForm/>
  ]} 
  onPageChanged={(index) => {
    // do something
  }}
/>
```

## Props
```ts
{
  /**
   * time in ms after which scrolling is considered finished
   **/
  timeout?: number
  /**
   * duration in ms for the smooth snap
   **/
  duration?: number
  /**
   * custom easing function
   * @param t normalized time typically in the range [0, 1]
   **/
  easing?: (t: number) => number

  /**
   * additional offset - can be used to alleviate any issues regarding margin/padding
   * @param t e.g. '10px' or '2rem' or 10 (when specifiyng as number, it will be treated as pixels)
   **/
  offset?: string | number

  /**
   * Called when the index of a page has been changed
   * either after updating the activePage prop 
   * or after scrolling/swiping to the next page
   * @param index the index of the visible page
   */
  onPageChanged?: (index: number) => void

  /**
   * The index of the currently active (visible) page
   */
  activePage: number

  /**
   * Array of "pages" - components which you was to display as pages in the viewpager
   */
  pages: ReactElement[];
}
```