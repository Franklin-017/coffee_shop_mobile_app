import { View, Text, StyleSheet, ImageBackground, Pressable, Appearance } from "react-native";
import { Link } from 'expo-router'

import icedCoffeeImg from "@/assets/images/iced-coffee.png";
import { Colors } from "@/constants/Colors";

const colorScheme = Appearance.getColorScheme();

const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

const app = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={icedCoffeeImg}
                resizeMethod="cover"
                style={styles.image}
            >
                <Text style={styles.title}>Coffee Shop</Text>

                <Link href="/menu" style={{ marginHorizontal: 'auto'}} asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Our Menu</Text>
                    </Pressable>
                </Link>

                <Link href="/contact" style={{ marginHorizontal: 'auto'}} asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Contact Us</Text>
                    </Pressable>
                </Link>
            </ImageBackground>
        </View>
    );
};

export default app;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: theme.background,
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    title: {
        color: theme.text,
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: theme.headerBackground,
        marginBottom: 120,
    },
    link: {
        color: theme.text,
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: 'underline',
        padding: 4,
        backgroundColor: theme.background,
    },
    button: {
        height: 40,
        width: '50%',
        borderRadius: 4,
        backgroundColor: theme.background,
        padding: 6,
        justifyContent: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: theme.text,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
