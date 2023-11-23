import { createBoard } from '@wixc3/react-board';
import { AllProducts } from '../../../components/all-products/all-products';

export default createBoard({
    name: 'AllProducts',
    Board: () => <AllProducts />,
    isSnippet: true,
});



