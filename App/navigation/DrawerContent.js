import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from '../image/logoKs.jpg'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import{
    DraweContentScrollView,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from './context'

export function DrawerContent(props){
    const paperTheme = useTheme()

    const { toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={Logo}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>KS-TECH</Title>
                                <Caption style={styles.caption}>Una innovacion no solo a la tecnologia sino al tiempo</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign
                                    name='calculator'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Basica"
                            onPress={() => {props.navigation.navigate('Basica')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons
                                    name='science'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Cientifica"
                            onPress={() => {props.navigation.navigate('Cientifica')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <SimpleLineIcons
                                    name='graph'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Grafica"
                            onPress={() => {props.navigation.navigate('Grafica')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign
                                    name='calendar'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Calculo de fecha"
                            onPress={() => {props.navigation.navigate('Fechas')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5
                                    name='coins'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Divisas"
                            onPress={() => {props.navigation.navigate('Divisas')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5
                                    name='cubes'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Volumen"
                            onPress={() => {props.navigation.navigate('Volumen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Entypo
                                    name='ruler'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Longitud"
                            onPress={() => {props.navigation.navigate('Longitud')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5
                                    name='weight-hanging'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Peso y Masa"
                            onPress={() => {props.navigation.navigate('Peso')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5
                                    name='temperature-high'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Temperatura"
                            onPress={() => {props.navigation.navigate('Temperatura')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <SimpleLineIcons
                                    name='energy'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Energia"
                            onPress={() => {props.navigation.navigate('Energia')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign
                                    name='areachart'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Area"
                            onPress={() => {props.navigation.navigate('Area')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5
                                    name='running'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Velocidad"
                            onPress={() => {props.navigation.navigate('Velocidad')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Entypo
                                    name='back-in-time'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Tiempo"
                            onPress={() => {props.navigation.navigate('Tiempo')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name='solar-power'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Potencia"
                            onPress={() => {props.navigation.navigate('Potencia')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign
                                    name='database'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Datos"
                            onPress={() => {props.navigation.navigate('Datos')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome
                                    name='compress'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Presion"
                            onPress={() => {props.navigation.navigate('Presion')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name='angle-obtuse'
                                    size={size}
                                    color={color}
                                />
                            )}
                            label="Angulo"
                            onPress={() => {props.navigation.navigate('Angulo')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferencias">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preferences}>
                                <Text>Modo noche</Text>
                                <View pointerEvents='none'>
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                            name="calculator"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Mejor que antes"
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    userInfoSection: {
        paddingLeft: 20,
    },

    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    caption:{
        fontSize: 14,
        lineHeight: 14,
    },

    row:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    drawerSection:{
       marginTop: 15, 
    },

    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },

    preferences:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})