import React, {Component} from 'react';


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer:
                {
                    name: "",
                    age: "",
                    address: "",
                    room: 1
                },
            customers: []
        }
    }

    onHandleChangeForm = (event) => {
        let { customer } = this.state;
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            customer: {
                ...customer,
                [name]: value
            }
        })
    };
    onHandleSubmitForm = (event) => {
        let { customers, customer} = this.state;

        event.preventDefault();
        customers.push(customer);
        this.setState({
            customers //customers:customers
        });
    };


    render() {

        let elements = this.state.customers.map((customer, index) => {
            let result;
            result = <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.address}</td>
                <td>{customer.room}</td>
            </tr>;
            return result;
        });
        console.log(this.state);
        return (
            <div className="container">
                <Header/>
                <div className="row">
                    <div className="col col-4">
                        <div>
                            <h3>Thêm mới nhân viên</h3>
                            <form onSubmit={this.onHandleSubmitForm}>
                                <div className="form-group">
                                    <label>Tên nhân viên</label>
                                    <input type="text" className="form-control" name="name"
                                           onChange={this.onHandleChangeForm}/>
                                </div>
                                <div className="form-group">
                                    <label>Tuổi</label>
                                    <input type="text" className="form-control" name="age"
                                           onChange={this.onHandleChangeForm}/>
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <input type="text" className="form-control" name="address"
                                           onChange={this.onHandleChangeForm}/>
                                </div>
                                <div className="form-group">
                                    <label>Phòng ban</label>
                                    <select className="form-control" name="room" value={this.state.room}
                                            onChange={this.onHandleChangeForm}>
                                        <option value={1}>Phòng kế toán</option>
                                        <option value={2}>Phòng kỹ thuật</option>
                                        <option value={3}>Phòng kỹ HCNS</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Lưu</button>
                            </form>
                        </div>
                    </div>
                    <div className="col col-8">
                        <h3>Danh sách nhân viên</h3>
                        <button className="btn btn-primary">Thêm nhân vien</button>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên nhân viên</th>
                                <th scope="col">Tuổi</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Phòng ban</th>
                            </tr>
                            </thead>
                            <tbody>
                            {elements}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;
