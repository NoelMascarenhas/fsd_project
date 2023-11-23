import classNames from 'classnames';
import styles from './product.module.scss';

export interface ProductProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Product = ({ className }: ProductProps) => {
    return <div className={classNames(styles.root, className)}>Product</div>;
};
