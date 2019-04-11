import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class ProfileIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div className="pa4 tc">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>Dropdown</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>View Profile</DropdownItem>
                        <DropdownItem>Signout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div class="pa4 tc">
                    <img src="http://tachyons.io/img/logo.jpg" class="br-100 ba h3 w3 dib" alt="avatar" />
                </div>
            </div >
        )
    }
}

export default ProfileIcon;