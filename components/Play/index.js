import React from 'react';
import { Text, Animated, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const styles = StyleSheet.create({
    container: {
     marginTop: 80 
    },
  
  });
  
export default function Play(){
    return(
        <View>
            <MaterialCommunityIcons  
                name='play' 
                size={66} 
                borderRadius='4'
                style={styles.container}
                color='#fff' 

                // background='#fff' 
            
            />
        </View>
    )
}