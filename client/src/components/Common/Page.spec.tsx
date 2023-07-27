import { RenderResult, cleanup, render } from '@testing-library/react';
import { ANIMATION } from '@/configs/animation.ts';
import { Animation } from '@/interfaces/animation.ts';
import CurrentRouteProvider from '@/providers/CurrentRouteProvider.tsx';
import Page from '@/components/Common/Page.tsx';

const MOCK_ANIMATION: string = 'fade';
const MOCK_CHILDREN: string = 'Mock Children';
const MOCK_FROM_PREV_TO_NEXT: [boolean, boolean][] = [
  [false, false],
  [false, true],
  [true, false],
  [true, true],
];

describe('Page', () => {
  it('should render children prop', () => {
    const component: RenderResult = render(<Page animation={MOCK_ANIMATION}>{MOCK_CHILDREN}</Page>);

    const page: HTMLElement = component.getByTestId('page');

    expect(page).toHaveTextContent(MOCK_CHILDREN);
  });

  it('should pass style attribute to page', () => {
    for (const animation of Object.keys(ANIMATION)) {
      for (const [fromPrev, toNext] of MOCK_FROM_PREV_TO_NEXT) {
        cleanup();
        const component: RenderResult = render(
          <CurrentRouteProvider value={{ loaded: true }}>
            <Page animation={animation} fromPrev={fromPrev} toNext={toNext} />
          </CurrentRouteProvider>,
        );

        const page: HTMLElement = component.getByTestId('page');

        const style: Animation = ANIMATION[animation](fromPrev, toNext);

        if (typeof style.initial.opacity !== 'undefined') {
          expect(page.style.opacity).toContain(`${style.initial.opacity}`);
        }

        if (typeof style.initial.translateX !== 'undefined') {
          expect(page.style.transform).toContain(
            style.initial.translateX === 0 ? 'none' : `translateX(${style.initial.translateX})`,
          );
        }
      }
    }
  });
});
