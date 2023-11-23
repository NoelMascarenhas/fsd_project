import classNames from 'classnames';
import styles from './product-landing-page.module.scss';
import Lottie from 'lottie-react';
import bid from '../../assets/bid.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface ProductLandingPageProps {
    className?: string;
}

export const ProductLandingPage = ({ className }: ProductLandingPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Online Auction System</h1>  
            <h3>Sell items fast and easy</h3>
            <br />
            <Link to={'/portfolio'}>
                    <button className={styles.cta}>Start Bidding</button>
            </Link>
            <motion.div
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{delay:0.6,duration:0.5}}
            >
                <Lottie animationData={bid}/>
            </motion.div>
        </div>
    );
};
