import React, { Component } from 'react'
import Product from '../product';
import { Grid } from '@material-ui/core';
import Slider from "react-slick";

export default class Category extends Component {

    render() {

        const renderProduct = this.props.products.map(product => (
            <Product item={product} />
        ));

        var settings = {
            dots: false,
            infinite: true,
            autoplay: false,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 2
        };

        return (
            <div>
                <div className="spec ">
                    <h3>{this.props.categoryName}</h3>
                    <div className="ser-t">
                        <b />
                        <span><i /></span>
                        <b className="line" />
                    </div>
                </div>

                <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Slider {...settings}>
                            {renderProduct}
                        </Slider>
                    </Grid>
                </Grid>


            </div>
        )
    }

}