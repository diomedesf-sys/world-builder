import type { PrimitiveProps } from '../../types';
import { BaseSVG } from './BaseSVG';

export const PNSDoubleCurve: React.FC<PrimitiveProps> = (props) => {
    return (
        <BaseSVG {...props}>
            <path d="M10,80 C30,10 70,90 90,20" />
        </BaseSVG>
    );
};
