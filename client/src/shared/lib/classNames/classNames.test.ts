import {classNames} from 'shared/lib/classNames/classNames';


describe('classNames.test', () => {
   test('test with only first param', () => {
      expect(classNames('className')).toEqual('className');
   });
   test('test with additional class', () => {
      expect(classNames('className', {}, ['additionalClass'])).toEqual('className additionalClass');
   });
   test('test mods', () => {
      expect(classNames('className', {'active': true, 'hover': false})).toEqual('className active');
   });
   test('test all params', () => {
      expect(classNames(
         'className',
         {'active': true, 'hover': false},
         ['additionalClass']))
         .toEqual('className additionalClass active');
   });
   test('test without params', () => {
      expect(classNames(undefined)).toEqual('');
   });
});
