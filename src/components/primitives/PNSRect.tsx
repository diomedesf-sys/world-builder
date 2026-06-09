import type { PrimitiveProps } from '../../types';
import { BaseSVG } from './BaseSVG';

export const PNSRect: React.FC<PrimitiveProps> = (props) => {
    return (
        <BaseSVG {...props}>
            <rect x="10" y="30" width="80" height="40" />
        </BaseSVG>
    );
};
