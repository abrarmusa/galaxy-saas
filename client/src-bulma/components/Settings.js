import React from 'react';

import Editinfo from '../containers/EditInfo';
import Changepassword from '../containers/auth/Changepassword';

class Settings extends React.Component {

    render() {
        return (
            <div>
                <h3 className="has-text-centered title is-3">User Info:</h3>
                <Editinfo />
                <hr/>
                <h3 className="has-text-centered title is-3">Change Password:</h3>
                <Changepassword />

            </div>
        )
    }
}


export default Settings;