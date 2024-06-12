import * as React from "react";
import { Dropdown, IDropdownOption } from "@fluentui/react";

export interface DropdownComponentProps {
    value: number | null;
    options: ComponentFramework.PropertyHelper.OptionMetadata[];
    onChange: (newValue: number | undefined) => void;
    disabled: boolean;
}

const onRenderOption = (option?: IDropdownOption): JSX.Element => {
	if (option) {
		return (
            <span>{option.text}</span>
		);
	}
	return <></>;
};

export const DropdownComponent = React.memo((props: DropdownComponentProps) => {
    const { value, options, onChange, disabled } = props;
    const valueKey = value != null ? value.toString() : undefined;

    const items = React.useMemo(() => {
		
		return {
			options: options.map((item) => {
				return {
					key: item.Value.toString(),
					data: { value: item.Value },
					text: item.Label,
				} as IDropdownOption;
			}),
		};
	}, [options]);

    const onChangeDropDown = React.useCallback(
		(ev: unknown, option?: IDropdownOption): void => {
			onChange(option ? (option.data.value as number) : undefined);
		},
		[onChange]
	);

    return (
        <>
            <Dropdown
				placeholder={''}
				options={items.options}
				selectedKey={valueKey}
				disabled={disabled}
				onRenderOption={onRenderOption}
				onChange={onChangeDropDown}
				className="custom-dropdown"
			/>
		</>
    )
});

DropdownComponent.displayName = "DropdownComponent"