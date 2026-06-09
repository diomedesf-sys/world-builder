import type { PrimitiveProps } from '../../types';
import { BaseSVG } from './BaseSVG';

export const PNSCurve: React.FC<PrimitiveProps> = (props) => {
    return (
        <BaseSVG {...props}>
            <path d="M10,80 Q50,10 90,80" />
        </BaseSVG>
    );
};
