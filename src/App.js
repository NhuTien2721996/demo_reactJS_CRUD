import React, {Component} from 'react';
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            customerEditing: null,
            isDisplayForm: false,
            filterName: "",
            keyword:""
        }
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4();
    }

    componentDidMount() {
        if (localStorage && localStorage.getItem('customers')) {
            let customers = JSON.parse(localStorage.getItem('customers'));
            this.setState({
                customers
            })
        }
    }

    onHandleSubmit = (data) => {
        let {customers} = this.state;
        if (data.id === "") {
            data.id = this.generateID();
            customers.push(data);
        } else {
            let index = this.findIndex(data.id);
            customers[index] = data
        }

        this.setState({
            customers,
            customerEditing: null
        });
        this.closeForm();
        localStorage.setItem('customers', JSON.stringify(customers));
    };
    onDelete = (id) => {
        let {customers} = this.state;
        if (id !== -1) {
            customers.splice(id, 1);
            this.setState({
                customers
            })
        }
        localStorage.setItem('customers', JSON.stringify(customers));
        this.closeForm();
    };
    onUpdate = (id) => {
        this.showForm();
        let {customers} = this.state;
        let customerEditing = customers[id];
        this.setState({
            customerEditing
        });
    };
    findIndex = (id) => {
        let {customers} = this.state;
        let result = -1;
        customers.forEach((customer, index) => {
            if (customer.id === id) {
                result = index
            }
        });
        return result;
    };
    closeForm = () => {
        this.setState({
            isDisplayForm: false,
            customerEditing: null
        })
    };
    showForm = () => {
        this.setState({
            isDisplayForm: true
        })
    };
    onToggleForm = () => {
        if (this.state.isDisplayForm === true && this.state.customerEditing !== null) {
            this.setState({
                isDisplayForm: true,
                customerEditing: null
            })
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                customerEditing: null
            })
        }

    };
    onFilter = (filterName) => {
        this.setState({
            filterName: filterName.toLowerCase()
        })
    };

    render() {
        let {customers, customerEditing, isDisplayForm, filterName,keyword} = this.state;  // let customers=this.state.customers
        let elementForm = isDisplayForm === true ? <TaskForm onHandleSubmit={this.onHandleSubmit}
                                                             closeForm={this.closeForm}
                                                             customerEditing={customerEditing}/> : "";
        if (filterName) {
            customers = customers.filter((customer) => {
                return customer.name.toLowerCase().indexOf(filterName) !== -1;
            })
        }
        return (
            <div className="container">
                <Header/>
                <div className="row">
                    <div className="col col-4">
                        {elementForm}
                    </div>
                    <div className={isDisplayForm === true ? "col col-8" : "col col-12"}>
                        <h3>Danh sách nhân viên</h3>

                        <button className="btn btn-primary" onClick={this.onToggleForm}>Thêm nhân viên</button>
                        <br/>

                        <TaskList customers={customers}
                                  onDelete={this.onDelete}
                                  onUpdate={this.onUpdate}
                                  onFilter={this.onFilter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
