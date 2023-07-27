import { RenderResult, render } from '@testing-library/react';
import CustomizeTopPanel from '@/components/CustomizeTopPanel/CustomizeTopPanel.tsx';

const MOCK_TITLE: string = 'Mock Title';
const MOCK_CHILDREN: string = 'Mock Children';

describe('CustomizeTopPanel', () => {
  it('should render title prop', () => {
    const component: RenderResult = render(<CustomizeTopPanel title={MOCK_TITLE} />);

    const customizeTopPanelTitle: HTMLElement = component.getByTestId('customize-top-panel-title');

    expect(customizeTopPanelTitle).toHaveTextContent(MOCK_TITLE);
  });

  it('should render children prop', () => {
    const component: RenderResult = render(<CustomizeTopPanel title={MOCK_TITLE}>{MOCK_CHILDREN}</CustomizeTopPanel>);

    const customizeTopPanelChildren: HTMLElement = component.getByTestId('customize-top-panel-children');

    expect(customizeTopPanelChildren).toHaveTextContent(MOCK_CHILDREN);
  });
});
