import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'App',
    Board: () => (
        <MemoryRouter>
            <App />
        </MemoryRouter>
    ),
    environmentProps: {
        windowHeight: 523,
        windowWidth: 1024
    }
});
