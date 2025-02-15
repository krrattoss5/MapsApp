https://www.npmjs.com/package/react-native-vector-icons

npm i react-native-vector-icons

npm install --save react-native-vector-icons

Android Setup
Option: With Gradle (recommended)
To make font management smoother on Android, use this method:

Edit android/app/build.gradle (NOT android/build.gradle) and add:

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
To customize the fonts being copied, use:

project.ext.vectoricons = [
iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Specify font files
]

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

https://github.com/michalchudziak/react-native-geolocation




https://www.npmjs.com/package/react-native-permissions

https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md


https://console.cloud.google.com/google/maps-apis/onboard;flow=just-ask-flow;step=just_ask?project=fluid-firefly-451004-d5&hl=es-419&inv=1&invt=AbpmrA

https://developers.google.com/maps/documentation/android-sdk/signup

AIzaSyCKiA8zTVBQ339iiHD-3cR4muNhihsna5c
