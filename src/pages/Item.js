import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            item: [],
            selected: this.props.id,
            title: this.props.item.title
        }
        
    }

    

    selected() {
        
            return (
                <div>
                    <img src="" alt="selected Item" />
                    <div className="itemDesc">
                        <h1>t</h1>
                        <p>t</p>
                        <p>t</p>
                        <p>t</p>
                    </div>
                </div>

            )
        
    }
    
    render() {

        return (
            <div className="itemDis">
                {this.selected()}
                <div className="related">

                </div>
            </div>
        )
    }
}

class Related extends React.Component {

    render() {

        return (
            <div></div>
        )
    }
}