import { View, Text, StyleSheet, Appearance, Link, Linking, Alert } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Fontisto } from "@expo/vector-icons";

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

const storedetails = () => {
    const dialPhone = (phoneNumber) => {
      const url = `tel:${phoneNumber}`;
      Linking.openURL(url).catch(() => {
        Alert.alert("Error", "Unable to open phone dialer.");
      });
    }

    const sendSMS = (phoneNumber, message) => {
      const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
      Linking.openURL(url).catch(() => {
        Alert.alert("Error", "Unable to open messaging app.");
      });
    };

    return (
        <View style={styles.container}>
            <View style={ styles.contactWrapper}>
                <Fontisto
                    name="coffeescript"
                    size={100}
                    color={theme.tint}
                    style={styles.coffeeImage}
                />

                <Text style={styles.heading}>Coffee Shop</Text>
                <Text style={styles.text}>555 Coffee Lane</Text>
                <Text style={styles.text}>Kansas City, KS 55555-1234</Text>
                <Text style={styles.subHeading}>Phone:</Text>
                <Text style={[styles.text, styles.link]} onPress={() => dialPhone('555-555-5555')}>555-555-5555</Text>
                <Text style={styles.text}>or <Text style={[styles.text, styles.link]} onPress={() => sendSMS('555-555-5555', 'Hello! This is a test message.')}>Click Here to Text!</Text></Text>
                <Text style={styles.subHeading}>Hours:</Text>
                <Text style={styles.text}>Open 6am to 4pm daily.</Text>
            </View>
        </View>
    );
};

export default storedetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.background,
        padding: 20,
    },
    contactWrapper: {
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000000',
      padding: 50,
      borderRadius: 8,
    },
    coffeeImage: {
        marginHorizontal: "auto",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: theme.text,
        letterSpacing: 0.3,
        marginBottom: 20,
    },
    subHeading: {
        fontSize: 14,
        fontWeight: "bold",
        color: theme.text,
        marginTop: 10,
    },
    text: {
        fontSize: 12,
        color: theme.text,
        alignSelf: "flex-start",
    },
    link: {
      textDecorationLine: 'underline'
    }
});
