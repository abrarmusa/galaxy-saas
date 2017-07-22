import React from 'react';

import Editinfo from '../containers/EditInfo';
import Changepassword from '../containers/auth/Changepassword';

class Settings extends React.Component {

    render() {
        return (
            <div>
                <h5 className="center-align">User Info:</h5>
                <Editinfo />

                <h5 className="center-align">Change Password:</h5>
                <Changepassword />

            </div>
        )
    }
}


export default Settings;