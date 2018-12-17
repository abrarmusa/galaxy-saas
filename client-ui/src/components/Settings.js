import React from 'react';

import Editinfo from '../containers/EditInfo';
import Changepassword from '../containers/auth/Changepassword';

class Settings extends React.Component {

    render() {
        return (
            <div>
                <h3 className="text-center">User Info:</h3>
                <Editinfo />

                <h3 className="text-center">Change Password:</h3>
                <Changepassword />

            </div>
        )
    }
}


export default Settings;