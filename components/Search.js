import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Search({ executeSearch }) {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.searchBox} >
            <TextInput
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Search..."
                returnKeyType="search"
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
        padding: 5,
        width: '90%'
    }
});