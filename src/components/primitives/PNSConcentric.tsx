import type { PrimitiveProps } from '../../types';
import { BaseSVG } from './BaseSVG';

export const PNSConcentric: React.FC<PrimitiveProps> = (props) => {
    return (
        <BaseSVG {...props}>
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="25" />
            <circle cx="50" cy="50" r="10" />
        </BaseSVG>
    );
};
