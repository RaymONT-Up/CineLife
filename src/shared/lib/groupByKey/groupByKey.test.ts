import groupByKey from './groupByKey';

describe('groupByKey function', () => {
  const testItems: any = [
    { professionText: 'ACTOR' },
    { professionText: 'DIRECTOR' },
    { professionText: 'HIMSELF' },
    { professionText: 'HRONO_TITR_MALE' },
    { professionText: 'PRODUCER' },
    { professionText: 'WRITER' },
    { professionText: 'WRITER' },
    { professionText: 'WRITER' },
  ];

  test('should group items by the specified key', () => {
    const result = groupByKey(testItems, 'professionText');

    expect(result).toEqual({
      ACTOR: [{ professionText: 'ACTOR' }],
      DIRECTOR: [{ professionText: 'DIRECTOR' }],
      HIMSELF: [{ professionText: 'HIMSELF' }],
      HRONO_TITR_MALE: [{ professionText: 'HRONO_TITR_MALE' }],
      PRODUCER: [{ professionText: 'PRODUCER' }],
      WRITER: [
        { professionText: 'WRITER' },
        { professionText: 'WRITER' },
        { professionText: 'WRITER' },

      ],
    });
  });

  test('should handle an empty array', () => {
    const result = groupByKey([], 'professionText');

    expect(result).toEqual({});
  });
});
