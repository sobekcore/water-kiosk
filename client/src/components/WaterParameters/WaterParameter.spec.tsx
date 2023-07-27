import { RenderResult, render } from '@testing-library/react';
import WaterParameter from '@/components/WaterParameters/WaterParameter.tsx';

const MOCK_TITLE: string = 'Mock Title';
const MOCK_CHILDREN: string = 'Mock Children';

describe('WaterParameter', () => {
  it('should render title prop', () => {
    const component: RenderResult = render(<WaterParameter title={MOCK_TITLE} />);

    expect(component.getByTestId('water-parameter-title')).toBeInTheDocument();
  });

  it('should render children prop', () => {
    const component: RenderResult = render(<WaterParameter title={MOCK_TITLE}>{MOCK_CHILDREN}</WaterParameter>);

    expect(component.getByTestId('water-parameter-children')).toBeInTheDocument();
  });
});
