import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BookingCard = ({navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("book-detail")} style={styles.container}>
    <View style={styles.bookingCont}>
      <Text style={styles.bookingId}>Booking Id: <Text style={styles.bookingIdText}> #17342892347</Text></Text>
      </View>
      <Text style={styles.bookingId}>Place: <Text style={styles.bookingIdText} numberOfLines={1}>No: 17/4, Renuka street, Porur</Text></Text>
      <View style={styles.dateCont}>
        <Text style={styles.dateLabelText}>From: <Text style={styles.dateText}>12/02/2023</Text></Text>
        <Text style={styles.dateLabelToText}>To: <Text style={styles.dateText}>12/02/2023</Text></Text>
      </View>
      <View style={styles.priceCont}>
        <Text style={styles.priceLabelText}>Package: <Text style={styles.priceText}>Standard</Text></Text>
      </View>
      <View style={styles.priceCont}>
        <Text style={styles.priceLabelText}>Price: <Text style={styles.priceText}>$25.00</Text></Text>
      </View>
      <View style={styles.statusCont}>
        <Text style={styles.statusLabelText}>Status: <Text style={styles.statusText}>Booked</Text></Text>
      </View>
    </Pressable>
  )
}

export default BookingCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flexDirection:"column",
        padding:10,
        borderRadius:5,
        // minHeight:120,
        shadowColor:"black",
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.1,
        shadowRadius:4,
        marginBottom:15
    },
    bookingCont:{
        marginBottom:5
    },
    dateCont:{
        marginTop:5,
        flexDirection:"row",
    },
    priceCont:{
        marginTop:5,
        flexDirection:"row"
    },
    statusCont:{
        marginTop:5,
    },
    bookingId:{
        
    },
    bookingIdText:{
        fontWeight:"bold"
    },
    dateLabelText:{
        
    },
    dateLabelToText:{
        
        marginLeft:10
    },
    dateText:{
        fontWeight:"bold"
    },
    priceLabelText:{
        
    },
    priceText:{
        fontWeight:"bold"
    },
    statusLabelText:{
        
    },
    statusText:{
        color:"teal",
        fontWeight:"700"
    }
})