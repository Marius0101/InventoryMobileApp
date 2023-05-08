import { StatusBar } from "expo-status-bar";
import { View ,Text,StyleSheet,Dimensions} from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import CustomTouchableOpacity from "../../../components/CustomTouchableOpacity/CustomTouchableOpacity";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import BarcodeMask from 'react-native-barcode-mask';

const ScanerScreen = ({navigation}) => {
    const { height, width } = Dimensions.get('window');
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    
      return (
        <View style={styles.container}>
            <View style={styles.button}>
            <StatusBar/>
                <CustomTouchableOpacity 
                text = "Back"
                onPress={()=>
                    navigation.navigate("MainMenu")}
                CustomButtonStyle="back"
                CustomTextStyle="back"
                icon = {true}
                iconType = "Ionicons"
                iconName= 'arrow-back' />
            </View>

            <View style ={styles.barcodebox}>
                    <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{height:height, width:width * 2}}
                />
                <BarcodeMask 
                    height={height*0.4}
                    width={width*0.8}
                />
            </View>
          
          {scanned}
        </View>
      );
    }
const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        marginTop: getStatusBarHeight()*2

    },
    barcodebox:{
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        flexDirection: "row"
    }
});
export default ScanerScreen;