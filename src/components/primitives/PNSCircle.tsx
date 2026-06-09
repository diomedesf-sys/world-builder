import type { PrimitiveProps } from '../../types';
import { BaseSVG } from './BaseSVG';

export const PNSCircle: React.FC<PrimitiveProps> = (props) => {
    return (
        <BaseSVG {...props}>
            <circle cx="50" cy="50" r="40" />
        </BaseSVG>
    );
};
