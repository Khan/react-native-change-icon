import { NativeModules } from "react-native";

const changeIcon = (iconName) => NativeModules.ChangeIcon.changeIcon(iconName);

const getIcon = () => NativeModules.ChangeIcon.getIcon();

const killAppIfNeeded = () => {
    if (Platform.OS === "android") {
        return NativeModules.ChangeIcon.killAppIfNeeded();
    } else {
        // iOS never needs to kill the app
        return Promise.resolve(false);
    }
};

export { changeIcon, getIcon, killAppIfNeeded };
