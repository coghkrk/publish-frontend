import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

class Test1 extends Component {
    state = {
        data : [
            {no:1, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:2, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:3, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:4, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:5, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:6, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:7, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:8, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:9, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
            {no:10, name: 'Tom', tel: '000-0000-0000', addr :'seoul'},
        ]
    }
    render() {
        const { data } = this.state
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Tel</th>
                            <th>Addr</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>{data[0].no}</td>
                            <td>{data[0].name}</td>
                            <td>{data[0].tel}</td>
                            <td>{data[0].addr}</td>
                        </tr> */}
                        {
                            data.map( table => <tr key={table.no}>
                                <td>{table.no}</td>
                                <td>{table.name}</td>
                                <td>{table.tel}</td>
                                <td>{table.addr}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Test1;