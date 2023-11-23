import { createBoard } from '@wixc3/react-board';
import { ProductLandingPage } from '../../../components/product-landing-page/product-landing-page';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'ProductLandingPage',
    Board: () => (
        <MemoryRouter>
            <ProductLandingPage />
        </MemoryRouter>
    ),
    isSnippet: true,
});
