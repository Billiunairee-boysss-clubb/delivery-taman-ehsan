import React, { Component, useState  } from 'react'
import Carousel from './Carousel';
import Kitchenitem from './kitechen-info';
import Menu from './Menu';
import Product from '../product';
import { Grid } from '@material-ui/core';
import Slider from "react-slick";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";


const LABELS_QUERY = gql`
 {
    allLabels {
     data {
       _id
       imgUrl
       desc
       name
     }
   }
 }
`;




export default function Home(props) {

    const [products, setProducts] = useState(
        [
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
        ]
    )

    const { data, loading } = useQuery(LABELS_QUERY);
    if (loading) {
        return "Loading...";
    }
    const labels = data.allLabels.data.map((label) => {
        return label.name
    });
    console.log(labels)

    const renderProduct = products.map(product => (
        <Product item={product}/>
    ));


            const settings = {
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
            <Grid container >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '9rem' }}>
            <Slider {...settings}>
            {renderProduct}
           </Slider>
            </Grid>
            </Grid>
            <Kitchenitem />

        </div>
    )
}

// export default class Home extends Component {

//     constructor(props) {
//         con
//         super(props);
//         this.state = {
//             products:[
//                 {
//                     id: "1",
//                     name: 'Moong',
//                     price: 1.50,
//                     imgUrl: 'images/of.png'
//                 },
//                 {
//                     id: "2",
//                     name: 'Sunflower oil',
//                     price: 9.00,
//                     imgUrl: 'images/of1.png'
//                 },
//                 {
//                     id: "3",
//                     name: 'Kabuli Chana',
//                     price: 3.00,
//                     imgUrl: 'images/of2.png'
//                 }
//             ],
//         };
//     }

//     render() {

//         const renderProduct = this.state.products.map(product => (
//             <Product item={product}/>
//         ));

//         var settings = {
//             dots: false,
//             infinite: true,
//             autoplay: false,
//             speed: 2000,
//             autoplaySpeed: 2000,
//             slidesToShow: 2,
//             slidesToScroll: 2
//         };

//         return (
//             <div>
            
//                 <Carousel />
//                 <Menu />
//                 <Grid container >
//                 <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '9rem' }}>
//                 <Slider {...settings}>
//                 {renderProduct}
//                </Slider>
//                 </Grid>
//                 </Grid>
//                 <Kitchenitem />

//             </div>
//         )
//     }
// }
