import * as React from "react";
import { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import './styles/style.css'

export interface MultiSelectComponentProps {
    options: { Label: string }[];
    onChange: (newValues: number | undefined) => void;
    height: number;
}

export const MultiSelectComponent = React.memo((props: MultiSelectComponentProps) => {
    const { options, height } = props;
    const [selectedOptions, setSelectedOptions] = useState<any>(null);
    
    const items = React.useMemo(() => {
        return options.map(item => ({
            name: item.Label
        }));
    }, [options]);

    
    return (
        <MultiSelect
            value={selectedOptions}
            onChange={(e) => setSelectedOptions(e.value)}
            options={items}
            optionLabel="name"
            filter
            placeholder="Select"
            className="w-full"
            panelClassName="custom-multiselect-panel"
            style={{height: `${height}px`, fontSize: `${height/2.8}px`, paddingLeft: '-3px'}}
        />
    );
});

export default MultiSelectComponent;