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




https://www.npmjs.com/package/react-native-permissions

