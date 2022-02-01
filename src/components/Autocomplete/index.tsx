import { AutoComplete } from 'antd';
import { AutoCompleteProps } from "antd/lib/auto-complete";

interface Props extends AutoCompleteProps {
    width?: string
}

const Complete: React.FC<Props> = ({
    width = 200,
    placeholder = 'Enter value',
    value = '',
    onChange,
    ...rest
}) => (
    <AutoComplete
        style={{ width }}
        filterOption={(inputValue, option) =>
            option!.value?.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        filterSort={(optionA, optionB) => {
            const a = optionA.value?.toString().toLowerCase();
            const b = optionB.value?.toString().toLowerCase();
            const i = value && value.toLowerCase();
            const aSortOrder = optionA?.sortOrder;
            const bSortOrder = optionB?.sortOrder;
            // prioritize exact code match
            if (value && a === i) {
                return -1;
            }
            if (value && b === i) {
                return 1;
            }
            if (a && b) {
                // prioritize earlier matches
                if (
                    value &&
                    a.indexOf(i) !== -1 &&
                    b.indexOf(i) !== -1 &&
                    a.indexOf(i) < b.indexOf(i)
                ) {
                    return -1;
                }
                if (
                    value &&
                    a.indexOf(i) !== -1 &&
                    b.indexOf(i) !== -1 &&
                    a.indexOf(i) > b.indexOf(i)
                ) {
                    return 1;
                }
                if (value && a.indexOf(i) !== -1 && b.indexOf(i) === -1) {
                    return -1;
                }
                if (value && a.indexOf(i) === -1 && b.indexOf(i) !== -1) {
                    return 1;
                }
                // prioritize sortOrder if exists
                if (aSortOrder && bSortOrder && aSortOrder < bSortOrder) {
                    return -1;
                }
                if (aSortOrder && bSortOrder && aSortOrder > bSortOrder) {
                    return 1;
                }
                if (aSortOrder && bSortOrder && aSortOrder === bSortOrder) {
                    return 0;
                }

                return a.localeCompare(b);
            }
            return -1;
        }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
    />
);

export default Complete