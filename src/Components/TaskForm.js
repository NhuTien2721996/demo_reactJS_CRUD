import React, {Component} from 'react';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name: "",
            age: "",
            address: "",
            room: 1
        }
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    };
    onHandleSubmit = (event) => {
      event.preventDefault();
      this.props.onHandleSubmit(this.state);
        this.onClear();
    };
    onClear = ()=>{
      this.setState({
          id:"",
          name:"",
          age:"",
          address:"",
          room:1
      })
    };
    componentDidMount() {
        if (this.props.customerEditing){
            this.setState({
                id:this.props.customerEditing.id,
                name:this.props.customerEditing.name,
                age:this.props.customerEditing.age,
                address:this.props.customerEditing.address,
                room:this.props.customerEditing.room,
            });
        }
    }


    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps && nextProps.customerEditing){
            this.setState({
                id:nextProps.customerEditing.id,
                name:nextProps.customerEditing.name,
                age:nextProps.customerEditing.age,
                address:nextProps.customerEditing.address,
                room:nextProps.customerEditing.room,
            });
        }
        if (!nextProps.customerEditing){
            this.setState({
                id:"",
                name:"",
                age:"",
                address:"",
                room:1
            })
        }
    }

    closeForm = () =>{
      this.props.closeForm();
    };
    render() {
        return (
            <div>
                <h3>Thêm mới nhân viên</h3>
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label>Tên nhân viên</label>
                        <input type="text" className="form-control" name="name"
                               value={this.state.name}
                               onChange={this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Tuổi</label>
                        <input type="text" className="form-control" name="age"
                               value={this.state.age}
                               onChange={this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ</label>
                        <input type="text" className="form-control" name="address"
                               value={this.state.address}
                               onChange={this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Phòng ban</label>
                        <select className="form-control" name="room"
                                value={this.state.room}
                                onChange={this.onHandleChange}>
                            <option value={1}>Phòng kế toán</option>
                            <option value={2}>Phòng kỹ thuật</option>
                            <option value={3}>Phòng kỹ HCNS</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" >Lưu</button>
                    <button type="button" className="btn btn-danger" onClick={this.closeForm} >Hủy</button>
                </form>
            </div>
        );
    }
}

export default TaskForm;
