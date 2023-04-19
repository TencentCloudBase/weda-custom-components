import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import simulate from 'miniprogram-simulate';
import pt from 'path';

import { Primary } from './Button.stories';

describe('Button', () => {
  it('react button', () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole('button')).toHaveTextContent('按钮');
  });

  it('mp button', () => {
    const id = simulate.load(
      pt.join(__dirname, '../mp/components/button/index')
    );
    const comp = simulate.render(id, Primary.args);

    const parent = document.createElement('parent-wrapper');
    comp.attach(parent);

    //   console.log(comp.dom.innerHTML)

    expect(comp.dom).toHaveTextContent('按钮');

    comp.detach();
  });
});
