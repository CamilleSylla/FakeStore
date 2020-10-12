import React from 'react';
import data from '../App';
import FilterNav from '../component/filterNav';


class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [],
            checked: [],
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(item => this.setState({ item: item }))
    }
    test(e) {
        this.setState({ checked: e });
    }
    filtered() {

        if (this.state.checked.length <= 1) {
            const filtered = this.state.item.filter(item => {
                if (this.state.checked === undefined || this.state.checked.length == 0) {
                    return item
                } else if (this.state.checked === true || this.state.checked.length === 1) {
                    return item.category == this.state.checked;
                }
            }

            );
            return filtered;
        }
    }
    render() {

        const item = this.filtered()

        return (
            <div className="item">
                <div className="filterCont">
                    <FilterNav checked={this.test.bind(this)} />
                </div>
                <Item item={item} />

            </div>
        )
    }

}

export default Product;

class Item extends React.Component {

    componentDidUpdate(props, state, snapshot) {
        console.log(props);


    }
    renderData() {
        return this.props.item.map((item, i) => {
            const { category, image, price, title } = item;
            return (
                <div className="itemCont">
                    <img src={image} alt="item" />
                    <h2>{title}</h2>
                    <p>{price}€</p>
                    <p>{category}</p>
                </div>
            )
        })
    }
    render() {

        return (
            <div className="displayer">
                {this.renderData()}
            </div>
        )
    }

}