import { View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface props {
    placeholder: string;
    onPress?: () => void,
    value?: string,
    onChangeText?: (text: string) => void,
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: props) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff' />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                className='flex-1 ml-2 text-white'
                placeholderTextColor='#a8b5db'
            />
        </View>
    )
}

export default SearchBar