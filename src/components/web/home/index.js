import React, { Component } from 'react'
import Carousel from './Carousel';
import Kitchenitem from './kitechen-info';
import Menu from './Menu';
import Product from '../product';
import Category from '../category';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName:"New Category 1 ",
            products:[
                {
                    id: "1",
                    name: 'Moong',
                    price: 1.50,
                    imgUrl: 'images/of.png'
                },
                {
                    id: "2",
                    name: 'Sunflower oil',
                    price: 9.00,
                    imgUrl: 'images/of1.png'
                },
                {
                    id: "3",
                    name: 'Kabuli Chana',
                    price: 3.00,
                    imgUrl: 'images/of2.png'
                }
            ],
            categories:[
                {
                    categoryName:"New Category 1",
                    products:[
                        {
                            id: "1",
                            name: 'Moong',
                            price: 1.50,
                            imgUrl: 'images/of.png'
                        },
                        {
                            id: "2",
                            name: 'Sunflower oil',
                            price: 9.00,
                            imgUrl: 'images/of1.png'
                        },
                        {
                            id: "3",
                            name: 'Kabuli Chana',
                            price: 3.00,
                            imgUrl: 'images/of2.png'
                        }
                    ],
                },
                {
                    categoryName:"New Category 2",
                    products:[
                        {
                            id: "1",
                            name: 'Lays',
                            price: 3.40,
                            imgUrl: 'images/of4.png'
                        },
                        {
                            id: "2",
                            name: 'Kurkure',
                            price: 2.90,
                            imgUrl: 'images/of5.png'
                        },
                        {
                            id: "3",
                            name: 'Popcorn',
                            price: 4.00,
                            imgUrl: 'images/of6.png'
                        }
                    ],
                }
            ]
        };
    }

    render() {

        const renderProduct = this.state.products.map(product => (
            <Product item={product}/>
        ));

        const renderCategory = this.state.categories.map(category => (
            <Category categoryName={category.categoryName} products={category.products}/>
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
            
                <Carousel />
                <Menu />
                {renderCategory}
                <Kitchenitem />

            </div>
        )
    }
}
