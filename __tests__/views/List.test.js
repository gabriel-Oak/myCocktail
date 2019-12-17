import { ListFiltersState } from "../../src/pages/List/hooks";
import testHook from "../../src/shared/utils/testHooks";
import { act } from 'react-test-renderer';

describe('List', () => {
  describe('Filters Hooks', () => {

    let props;

    beforeEach(() => {
      props = {
        onSubmit: jest.fn(),
        type: 'i',
        changeNameFilter: jest.fn(),
        loading: false,
        nameFilter: 'Test Mock'
      };
    });

    it('Input state', () => {

      const { input } = testHook(() => ListFiltersState(props));
      input.onChangeText('Hello test fans');

      expect(input.value).toBe(props.nameFilter);
      expect(props.changeNameFilter).toHaveBeenCalledWith('Hello test fans');

    });

    it('Picker state', async () => {

      const { pickerState } = testHook(() => ListFiltersState(props));
      act(() => pickerState.onValueChange('Mazza_test'));

      expect(pickerState.enabled).toBe(true);
      expect(props.onSubmit).toHaveBeenCalledWith('i=Mazza_test');

    });

    it('Switch state alcholic', async () => {

      const { switchState } = testHook(() => ListFiltersState(props));
      act(() => switchState.onValueChange(true));

      expect(switchState.disabled).toBe(false);
      expect(props.onSubmit).toHaveBeenCalledWith('i=Alcoholic');

    });

    it('Switch state non alcholic', async () => {

      const { switchState } = testHook(() => ListFiltersState(props));
      act(() => switchState.onValueChange(false));

      expect(switchState.disabled).toBe(false);
      expect(props.onSubmit).toHaveBeenCalledWith('i=Non_Alcoholic');

    });

  });
});