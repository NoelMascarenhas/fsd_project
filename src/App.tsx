import { useState } from 'react';
import styles from './App.module.scss';
import { ProductLandingPage } from './components/product-landing-page/product-landing-page';
import { Route, Routes} from 'react-router-dom';
import { Portfolio } from './components/portfolio/portfolio';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div>
                <Routes>
                    <Route path="product-landing-page" element={<ProductLandingPage/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
