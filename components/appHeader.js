import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {AppHeader} from 'react-native-elements';

const Header = props=>{
    return ( <AppHeader
    centerComponent={{
        text:props.title,
        style:{color:'blue'}
    }}
    />
    
    )
}
export default Header;