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
    test(e) {
        this.setState({checked: e});
        console.log(this.state.checked);
    }

    render() {

        return (
            <div className="item">
                <div className="filterCont">
                        <FilterNav checked={this.test.bind(this)}/>
                    </div>
                    <div className="displayer">
                        {this.renderData()}
                    </div>
                
            </div>
        )
    }

}

export default Product