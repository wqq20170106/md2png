import md2Png from '../src'

// TODO: Implement module test
test('md2png', () => {
  expect(md2Png('w')).toBe('w@zce.me')
  expect(md2Png('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => md2Png(100 as unknown as string)).toThrow('Expected a string, got number')
})
