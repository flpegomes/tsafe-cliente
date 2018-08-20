import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from'./components/Login';
import Principal from'./components/Principal';
import Cadastro from'./components/Cadastro';

export default props => (
    <Router>
        <Stack key='root'>
            <Scene key='Login' component={Login} hideNavBar={true} />
            <Scene key='Cadastro' component={Cadastro} title="Cadastro" />
        </Stack>
    </Router>

);