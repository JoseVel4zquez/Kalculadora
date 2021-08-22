import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Energia = () => {
    const { colors } = useTheme();

    return (
        <View>
            <Text style={{color: colors.text}}>Esto es energia</Text>
        </View>
    )
}

export default Energia
