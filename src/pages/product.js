import React from 'react';
import data from '../App';
import FilterNav from '../component/filterNav';


class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            item: []
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(item => this.setState({ item: item }))
    }
    renderData() {
        return this.state.item.map((item, i) => {
            const { id, title, price, category, image } = item;

            return (
                <div className="product">

                    <div className="itemCont">
                        <img src={image} />
                        <h2>{title}</h2>
                        <p>{price}€</p>
                        <p>{category}</p>
                    </div>
                </div>
            )
        })
    }

    render() {

        return (
            <div className="item">
                <div className="filterCont">
                        <FilterNav />
                    </div>
                    <div className="displayer">
                        {this.renderData()}
                    </div>
                
            </div>
        )
    }

}

export default Product