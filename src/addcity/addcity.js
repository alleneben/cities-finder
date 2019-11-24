import React, { useState, useEffect } from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet,ScrollView,TouchableWithoutFeedback } from 'react-native';
import uuidV4 from 'uuid/v4';


import { colors } from '../theme';


const AddCity = (props) => {
    const [val, setval] = useState({city:'', country:''})
    const [data, setdata] = useState([])

    useEffect(()=>{
        console.log(data);
        
    },[data])

    const onchange = (key, value) => {
        setval({...val,[key]:value})
    }

    const submit = () => {
        if(val.city === '' || val.country === '') return;

        const city = {
            city: val.city,
            country: val.country,
            locations: [],
            id: uuidV4()
        }
        props.screenProps.addcity(city)
        setval({city:'', country:''})
        
        let dd = data;
        dd.push(val)
        setdata(dd)

        props.navigation.navigate('Cities', {data})
    }
    return(
        <View>
            <Text>Cities App</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={(value) => onchange('city',value)}
                placeHolder='City Name'
                value={val.city}
            />
            <TextInput 
                style={styles.input} 
                onChangeText={(value) => onchange('country',value)}
                placeHolder='Country'
                value={val.country}
            />
            <TouchableOpacity onPress={submit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add City</Text>
                </View>
            </TouchableOpacity>
            <ScrollView>
            <View>
                {
                    data.map((city, index) => 
                        <View key={index}>
                            <TouchableWithoutFeedback onPress={() => viewcity(city)}>
                                <View>
                                    <Text>{city.city}</Text>
                                    <Text>{city.country}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )
                }
            </View>
        </ScrollView>
        </View>
    )
}

export default AddCity;


const styles = StyleSheet.create({
    input:{
        height: 50,
        backgroundColor: colors.primary
    },
    button:{},
    buttonText:{},
    container:{}
})