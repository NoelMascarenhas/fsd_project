import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './portfolio.module.scss';
import iphone from '../../assets/iphone.jpg';
import shoe from '../../assets/shoe.jpg';
import ps5 from '../../assets/ps5.jpg';
import chair from '../../assets/chair.jpg';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface Product {
    name: string;
    image: string;
    price: string;
    details: string;
    features: string[];
  }
export interface PortofolioProps {
    className?: string;
}

export const Portfolio: React.FC<PortofolioProps> = ({ className }: PortofolioProps) => {
    const [showProductDetails, setShowProductDetails] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openProductDetails = (product: Product) => {
        setShowProductDetails(true);
        setSelectedProduct(product);
      };
    
      const closeProductDetails = () => {
        setShowProductDetails(false);
        setSelectedProduct(null);
      };

    const products = [
        {
            name: 'Iphone 15 Pro max',
            image: iphone,
            price: '$1099',
            details: 'This is 8 GB RAM / 256 GB internal storage base variant of Apple iPhone 15 Pro Max which is available in Black Titanium, White Titanium, Blue Titanium, Natural Titanium colour.',
            features: [
                '6.7-inch Super Retina XDR display',
                'A15 Bionic chip with Neural Engine',
                'Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto',
                'Night mode, Deep Fusion, and Smart HDR 3'
            ]
        },
        {
            name: 'Nike Running Shoes',
            image: shoe,
            price: '$299',
            details: 'Nike Running Shoes are designed for comfort and performance. Whether you are a seasoned runner or just starting, these shoes provide the support and cushioning you need.',
            features: [
                'Breathable mesh upper',
                'Responsive cushioning',
                'Durable rubber outsole',
                'Stylish design'
            ]
        },
        {
            name: 'PlayStation 5',
            image: ps5,
            price: '$599',
            details: 'Custom 8-core AMD Zen 2 Variable frequency up to 3.5 GHz, 16 GB/256-bit GDDR6 SDRAM 512 MB DDR4 RAM (used as SSD controller cache), Custom 825 GB PCIe 4.0 NVMe SSD 1 TB in 2023 version',
            features: [
                '4k Resolution',
                '60fps',
                'Dolby Vision',
                'Immersive Sound'
            ]
        },
        {
            name: 'Chair',
            image: chair,
            price: '$49',
            details: 'The best chair on earth',
            features: [
                'Sturdy Wood',
                'Strong frame',
                'Unbreakable'
            ]
        }
    ];
    
    return (
        <div className={classNames(styles.root, className)}>
            {showProductDetails && selectedProduct && (
                <div className={styles['product-details']}>
                <h2>{selectedProduct.name} Details</h2>
                <p>{selectedProduct.details}</p>
                <ul>
                    {selectedProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className={styles['bid-section']}>
                    
                <label htmlFor="bidPrice">Enter your Bidding Price:</label>
                <input type="text" id="bidPrice" />
                </div>
                <a target="_blank" rel="noopener noreferrer" className={styles['bid-button']}>
                    Place Bid
                </a>
                <button onClick={closeProductDetails} className={styles['close-button']}>
                Close
                </button>
                </div>
            )}
            <div className={styles['portofolio-wrapper']}>
                <h1 className={styles.h3}>All Products</h1>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(styles.line, styles.path)}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className={styles['path-line']}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DC3284" />
                            <stop offset="1" stop-color="#DC3232" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <p className={styles.p}></p>
            <div className={styles.grid}>
                {products.map((product, index) => (
                    <motion.div className={styles['grid-item']}>
                        <img src={product.image} className={styles['grid-img']} />
                        <div className={styles['visit-portofolio']}>
                            <h4 className={styles.h4}>{product.name}</h4>
                            <h4>{product.price}</h4>
                        </div>
                        <a href="#" onClick={() => openProductDetails(product)}>
                            View
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
