import type { PrimitiveProps } from '../../types';
import { BaseSVG } from './BaseSVG';

export const PNSLine: React.FC<PrimitiveProps> = (props) => {
    return (
        <BaseSVG {...props}>
            <line x1="10" y1="50" x2="90" y2="50" />
        </BaseSVG>
    );
};
