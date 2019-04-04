import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Switch from "react-switch";
import { Table } from 'reactstrap';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
    }
    if (this.props.userData) {
      this.state = {
        input1: this.props.userData.authUser.data.result.userName,
        input2: this.props.userData.authUser.data.result.emailAddress,
        input3: this.props.userData.authUser.data.result.fullName,
      };
    }

  }
  handleChange = (e, element) => {
    if (element === "input1") {
      this.setState({
        input1: e.target.value,
      })
    }
    else {
      this.setState({
        input2: e.target.value,
      })
    }
  }
  changeRoles = () => {
    this.setState({
      admin: !this.state.admin,
    })
  }
  render() {
    console.log('props in roles Modal', this.props);
    return (
      <Modal isOpen={true}>
        <ModalHeader>
          <div className="header" style={{ minWidth: 300 }}>
            <div className="subject">
              {this.props.title}
            </div>
          </div>
          <div className="">
            <Button
              className="button-no-styles"
              onClick={this.props.showModal}>X</Button>
          </div>
        </ModalHeader>
        <div className="add-todo" style={{ minWidth: 300 }}>
          <ModalBody className="body d-flex flex-column" style={{ width: '100%' }}>
            Role Name
            <input type="text" className="form-control" placeholder={this.props.value1}
              onChange={(e) => this.handleChange(e, 'input1')}
              value={this.props.roleName}
            />
          </ModalBody>
          <ModalBody className="inline-items">
            Permissions
            <Table >
              <tbody>
                <tr>
                  <td><label>
                    <span>Pages.Admin</span>
                  </label></td>
                  <td><Switch
                    onChange={this.changeRoles}
                    height={20}
                    width={38}
                    checked={this.state.admin}
                    offHandleColor="#fff"
                  /></td>
                </tr>
                <tr>
                  <td><label>
                    <span>Pages.User</span>
                  </label></td>
                  <td><Switch
                    onChange={this.changeRoles}
                    height={20}
                    width={38}
                    checked={this.state.admin}
                    offHandleColor="#fff"
                  /></td>
                </tr>
              </tbody>
            </Table>
            {/* <div className="permissions-container">
              <label>
                <span>Admin</span>
              </label>
              <Switch
                onChange={this.changeRoles}
                height={20}
                width={38}
                checked={this.state.admin}
                offHandleColor="#fff"
              />
            </div> */}

          </ModalBody>
          <ModalFooter className="footer d-flex flex-row">
            <Button className="button-link" onClick={() => {
            }}>{this.props.action}</Button>
          </ModalFooter>
        </div>
      </Modal>
    );
  }
}

export default ModalComponent;
