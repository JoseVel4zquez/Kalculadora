import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Grafica = () => {
    const { colors } = useTheme();

    return (
        <View>
            <Text style={{color: colors.text}}>Esto es la grafica</Text>
        </View>
    )
}

export default Grafica
