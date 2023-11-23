import { createBoard } from '@wixc3/react-board';
import { Product } from '../../../components/product/product';

export default createBoard({
    name: 'Product',
    Board: () => <Product />,
    isSnippet: true,
});
