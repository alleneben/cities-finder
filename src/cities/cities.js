import React, {useEffect} from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { colors } from '../theme';


const Cities = (props) => {
    
    
   

    const viewcity = (city) => {

    }
    return(
        <ScrollView>
            <View>
                {
                    props.screenProps.cities.map((city, index) => 
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
    )
}

export default Cities;