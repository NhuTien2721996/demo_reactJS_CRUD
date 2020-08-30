import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Iphone 6s",
                    price: 15000,
                    status: true
                }, {
                    id: 2,
                    name: "Samsung S8",
                    price: 3000,
                    status: true
                }, {
                    id: 3,
                    name: "Xiaomi",
                    price: 2500,
                    status: false
                }
            ],
            isActive: true
        }
    }

    onSetState = () => {
        // if (this.state.isActive === true) {
        //     this.setState({
        //         isActive: false
        //     })
        // } else {
        //     this.setState({
        //         isActive: true
        //     })
        // }
        this.setState({
            isActive:!this.state.isActive
        });
    };

    render() {
        let elements = this.state.products.map((product, index) => {
            let result;
            if (product.status) {
                result = <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>

            }
            return result;

        });
        return (

            <div className="row">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                    </tr>
                    </thead>
                    <tbody>
                    {elements}
                    </tbody>
                </table>
                <button className="btn btn-warning" onClick={this.onSetState}>
                    Active:{this.state.isActive === true ? 'true' : 'false'}
                </button>
            </div>

        );
    }
}

export default Product;
