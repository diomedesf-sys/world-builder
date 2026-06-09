import type { PrimitiveProps } from '../../types';
import { BaseSVG } from './BaseSVG';

export const PNSTriangle: React.FC<PrimitiveProps> = (props) => {
    return (
        <BaseSVG {...props}>
            <polygon points="50,15 15,85 85,85" />
        </BaseSVG>
    );
};
