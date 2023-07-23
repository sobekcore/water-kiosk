import { Mock } from 'vitest';
import { RenderResult, cleanup, render, fireEvent } from '@testing-library/react';
import Button from '@/components/Common/Button/Button.tsx';

const MOCK_CONTENT: string = 'Mock Content';
const MOCK_SIZE: string = 'fab';
const MOCK_HANDLE_CLICK: Mock = vitest.fn();

describe('Button', () => {
  it('should render children prop', () => {
    const component: RenderResult = render(<Button>{MOCK_CONTENT}</Button>);

    expect(component.getByText(MOCK_CONTENT)).toBeInTheDocument();
  });

  it('should pass different number of classNames depending on defaultStyles prop', () => {
    const defaultStylesComponent: RenderResult = render(<Button defaultStyles />);
    const defaultStylesLength: number = defaultStylesComponent.getByTestId('button').classList.length;

    cleanup();
    const noDefaultStylesComponent: RenderResult = render(<Button defaultStyles={false} />);
    const noDefaultStylesLength: number = noDefaultStylesComponent.getByTestId('button').classList.length;

    expect(defaultStylesLength).not.toEqual(noDefaultStylesLength);
  });

  it('should pass className attribute to button', () => {
    const component: RenderResult = render(<Button size={MOCK_SIZE} />);

    expect(component.getByTestId('button')).toHaveClass(`size-${MOCK_SIZE}`);
  });

  it('should call onClick function on button click', () => {
    const component: RenderResult = render(<Button onClick={MOCK_HANDLE_CLICK} />);
    fireEvent.click(component.getByTestId('button'));

    expect(MOCK_HANDLE_CLICK).toHaveBeenCalledTimes(1);
  });
});
