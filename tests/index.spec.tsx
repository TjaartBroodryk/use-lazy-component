import React from 'react';
import useLazyComponent from '../src/index';
import renderer, {act} from 'react-test-renderer';

test('Lazy component is returned', async () => {
  
  const TestComponent = () => <div/>

  function MyComponent() {
    const { component: Component } = useLazyComponent(() => Promise.resolve({default: () => <TestComponent/>}));

    return (
      <div>
        {Component && <Component/> }
      </div>
    )
  }

  let testRenderer;
  await act(() => {
    testRenderer = renderer.create(<MyComponent />);
  });
  expect(testRenderer.root.findAllByType(TestComponent)).toHaveLength(1);
});