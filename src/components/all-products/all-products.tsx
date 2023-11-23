import classNames from 'classnames';
import styles from './all-products.module.scss';

export interface AllProductsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AllProducts = ({ className }: AllProductsProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};



