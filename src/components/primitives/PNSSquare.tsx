import type { PrimitiveProps } from '../../types';
import { BaseSVG } from './BaseSVG';

export const PNSSquare: React.FC<PrimitiveProps> = (props) => {
    return (
        <BaseSVG {...props}>
            <rect x="15" y="15" width="70" height="70" />
        </BaseSVG>
    );
};
