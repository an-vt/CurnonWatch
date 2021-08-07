import PropTypes from 'prop-types';
import React from 'react';
import {
    Link
} from "react-router-dom";

ProductBestSeller.propTypes = {
    listProduct: PropTypes.array
};

ProductBestSeller.defaultProps = {
    listProduct: []
}

function ProductBestSeller(props) {
    const { products } = props

    return (
        <div className="product-bestseller">
            <div className="bestseller-men">
                <div className="grid wide">
                    <h1 className="bestseller__heading">MEN'S BEST SELLERS</h1>
                    <div className="bestseller__sub-heading">
                        <a href="" className="bestseller__link">
                            KHÁM PHÁ THÊM
                            <i className="ti-arrow-right" />
                        </a>
                    </div>
                    <div className="row">
                        {products.map(product => {
                            return <div key={product._id} className="col l-3">
                                <Link to={`/product/${product.id}`} className="bestseller__item">
                                    <img src={"https://api-curnon-springbooot.herokuapp.com/api/download/"+product.image} alt="" className="bestseller__img" />
                                    <span className="bestseller__type">{product.name}</span>
                                    <span className="bestseller__price-current">{product.price.toLocaleString({ minimumFractionDigits: 0 })}<span className="bestseller__unit">đ</span></span>
                                    <span className="bestseller__detail">XEM SẢN PHẨM</span>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductBestSeller;
