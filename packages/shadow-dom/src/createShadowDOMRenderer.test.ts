import { createShadowDOMRenderer } from './createShadowDOMRenderer';
import type { ExtendedCSSStyleSheet } from './types';

type CSSStyleSheetWithId = CSSStyleSheet & { id: string };

function createSheetWithId(id: string) {
  const sheet = new CSSStyleSheet() as CSSStyleSheetWithId;
  sheet.id = id;

  return sheet;
}

expect.addSnapshotSerializer({
  test(value) {
    return Array.isArray(value);
  },
  print(value) {
    /**
     * test function makes sure that value is the guarded type
     */
    const _value = value as Array<ExtendedCSSStyleSheet | CSSStyleSheetWithId | CSSStyleSheet>;

    return JSON.stringify(
      _value.map(sheet => ({
        ...(Object.hasOwnProperty.call(sheet, 'bucketName') && {
          bucketName: (sheet as ExtendedCSSStyleSheet).bucketName,
          metadata: (sheet as ExtendedCSSStyleSheet).metadata,
        }),
        ...(Object.hasOwnProperty.call(sheet, 'id') && { id: (sheet as CSSStyleSheetWithId).id }),
      })),
      null,
      2,
    );
  },
});

describe('createShadowDOMRenderer', () => {
  it('returns a renderer', () => {
    const shadowRoot = document.createElement('div').attachShadow({ mode: 'open' });

    expect(createShadowDOMRenderer(shadowRoot)).toHaveProperty('adoptedStyleSheets');
  });

  describe('CSS insertion', () => {
    let shadowRoot: ShadowRoot;
    let renderer: ReturnType<typeof createShadowDOMRenderer>;

    beforeEach(() => {
      shadowRoot = document.createElement('div').attachShadow({ mode: 'open' });

      // jsdom doesn't support adoptedStyleSheets yet
      shadowRoot.adoptedStyleSheets = [];
    });

    it('inserts styles in the correct order', () => {
      renderer = createShadowDOMRenderer(shadowRoot);

      renderer.insertCSSRules({ d: ['a {}'] });
      renderer.insertCSSRules({ t: ['a {}'] });

      renderer.insertCSSRules({
        m: [[`a {}`, { m: '(forced-colors: active)' }]],
      });
      renderer.insertCSSRules({
        m: [[`a {}`, { m: '(prefers-reduced-motion)' }]],
      });

      renderer.insertCSSRules({ h: ['a {}'] });
      renderer.insertCSSRules({ f: ['a {}'] });
      renderer.insertCSSRules({ a: ['a {}'] });
      renderer.insertCSSRules({ v: ['a {}'] });
      renderer.insertCSSRules({ l: ['a {}'] });

      renderer.insertCSSRules({ t: ['a {}'] });

      expect(renderer.adoptedStyleSheets).toMatchInlineSnapshot(`
        [
          {
            "bucketName": "d",
            "metadata": {}
          },
          {
            "bucketName": "l",
            "metadata": {}
          },
          {
            "bucketName": "v",
            "metadata": {}
          },
          {
            "bucketName": "f",
            "metadata": {}
          },
          {
            "bucketName": "h",
            "metadata": {}
          },
          {
            "bucketName": "a",
            "metadata": {}
          },
          {
            "bucketName": "t",
            "metadata": {}
          },
          {
            "bucketName": "m",
            "metadata": {
              "m": "(forced-colors: active)"
            }
          },
          {
            "bucketName": "m",
            "metadata": {
              "m": "(prefers-reduced-motion)"
            }
          }
        ]
      `);
    });

    it('inserts sheets after other sheets', () => {
      const other1 = createSheetWithId('other1');
      const other2 = createSheetWithId('other2');

      shadowRoot.adoptedStyleSheets = [other1, other2];
      renderer = createShadowDOMRenderer(shadowRoot);

      renderer.insertCSSRules({ d: ['a {}'] });
      renderer.insertCSSRules({ t: ['a {}'] });

      expect(shadowRoot.adoptedStyleSheets).toMatchInlineSnapshot(`
        [
          {
            "id": "other1"
          },
          {
            "id": "other2"
          },
          {
            "bucketName": "d",
            "metadata": {}
          },
          {
            "bucketName": "t",
            "metadata": {}
          }
        ]
      `);
    });

    it('inserts styles in the correct order with insertionPoint', () => {
      const other1 = createSheetWithId('other1');
      const other2 = createSheetWithId('other2');
      const insertionPoint = createSheetWithId('insertionPoint');

      shadowRoot.adoptedStyleSheets = [other1, insertionPoint, other2];

      renderer = createShadowDOMRenderer(shadowRoot, {
        insertionPoint,
      });

      renderer.insertCSSRules({ d: ['a {}'] });
      renderer.insertCSSRules({ t: ['a {}'] });
      renderer.insertCSSRules({ h: ['a {}'] });
      renderer.insertCSSRules({ f: ['a {}'] });

      expect(shadowRoot.adoptedStyleSheets).toMatchInlineSnapshot(`
        [
          {
            "id": "other1"
          },
          {
            "id": "insertionPoint"
          },
          {
            "bucketName": "d",
            "metadata": {}
          },
          {
            "bucketName": "f",
            "metadata": {}
          },
          {
            "bucketName": "h",
            "metadata": {}
          },
          {
            "bucketName": "t",
            "metadata": {}
          },
          {
            "id": "other2"
          }
        ]
      `);
    });
  });
});
