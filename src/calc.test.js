import calcPosition from './calc';

describe('Calculate meeting position function', () => {
  it('should get proper style attribute', () => {
    const input = [
      {
        id: 'New',
        start: 120,
        end: 150,
      },
    ];
    const result = input.map(calcPosition);
    const expected = [
      {
        text: `Meeting - New`,
        top: '240px',
        left: '0px',
        height: '60px',
        width: '600px',
      },
    ];

    expect(result).toBeDefined();
    expect(result).toHaveLength(expected.length);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should handle null or undefined data', () => {
    const input = [null, undefined];
    const result = input.map(calcPosition);
    const expected = [{}, {}];

    expect(result).toBeDefined();
    expect(result).toHaveLength(expected.length);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should get proper position with intersecting time', () => {
    const input = [
      {
        id: 'New 1',
        start: 120,
        end: 150,
      },
      {
        id: 'New 2',
        start: 120,
        end: 180,
      },
    ];
    const result = input.map(calcPosition);
    const expected = [
      {
        text: `Meeting - New 1`,
        top: '240px',
        left: '0px',
        height: '60px',
        width: '300px',
      },
      {
        text: `Meeting - New 2`,
        top: '240px',
        left: '300px',
        height: '120px',
        width: '300px',
      },
    ];

    expect(result).toBeDefined();
    expect(result).toHaveLength(expected.length);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
