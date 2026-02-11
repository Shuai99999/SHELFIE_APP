npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

npm i @expo/vector-icons

npx expo install @expo/vector-icons
npx expo install react-native-appwrite react-native-url-polyfill

npx expo start

npm uninstall react-dom

谷歌给的方案，3选1，我用的1
1.npm install --legacy-peer-deps

2.In your file, change to .package.json"react": "19.1.0""react": "19.2.3"

Delete your folder and file .node_modules, package-lock.json

npm install

3.  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "expo": "~54.0.32",
    "expo-constants": "~18.0.13",
    "expo-linking": "~8.0.11",
    "expo-router": "~6.0.22",
    "expo-status-bar": "~3.0.9",
    "react": "19.2.3",
    "react-native": "0.81.5",
    "react-native-appwrite": "^0.19.0",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-url-polyfill": "^3.0.0"
    },
    //主要是加这一块
    "overrides": {
    "react": "19.2.3",
    "react-dom": "19.2.3"
    },

Delete your folder and file .node_modules, package-lock.json

npm install
