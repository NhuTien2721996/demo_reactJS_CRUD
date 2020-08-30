// import React, {Component} from 'react';
//
//
// class TaskItem extends Component {
//
//     render() {
//         let {customers} = this.props;  //let customers=this.props.customers
//         let elmCustomers = customers.map((customer, index) => {
//             let result;
//             result = <tr key={index}>
//                 <th scope="row">{index + 1}</th>
//                 <td>{customer.name}</td>
//                 <td>{customer.age}</td>
//                 <td>{customer.address}</td>
//                 <td>{customer.room}</td>
//                 <td><button className="btn btn-danger" onClick={this.onDelete(index)} >Xóa</button>
//                     <button className="btn btn-warning">Cập nhật</button>
//                 </td>
//             </tr>;
//             return result
//         });
//
//         return (
//             <table className="table">
//                 <thead>
//                 <tr>
//                     <th scope="col">STT</th>
//                     <th scope="col">Tên nhân viên</th>
//                     <th scope="col">Tuổi</th>
//                     <th scope="col">Địa chỉ</th>
//                     <th scope="col">Phòng ban</th>
//                     <th scope="col">Chức năng</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {elmCustomers}
//                 </tbody>
//             </table>
//         );
//     }
// }
//
// export default TaskItem;
