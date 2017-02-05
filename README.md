# ReactNativeTest
Proof of concept for Akicondroid

### Windows Dependencies
Java Development Kit
Android Studio (+ Android SDK a Android virtualization stuff (installed using AS))

#### Environment variables:
ANDROID_HOME %AppData%\Local\Android\sdk
JAVA_HOME Path to Java Development Kit (e.g. C:\Program Files\Java\jdk1.8.0_121)
PATH: add path to Android Debug Bridge (e.g. %AppData%\Local\Android\Sdk\platform-tools)


### Develop using Android Studio
install, run an debug in virtual Android machine
https://facebook.github.io/react-native/docs/getting-started.html

### Run and debug on device
https://facebook.github.io/react-native/docs/running-on-device.html
- phone must be in development mode
- USB debugging must be allowed


### Building release build:
Steps:
1. build APK with self-signed certificate (signing is required if installing from APK)
    (Follow: https://facebook.github.io/react-native/docs/signed-apk-android.html)

2. copy to phone

3. install in the phone
    - untrusted sources for apps must be allowed in Application Settings
    - X-plore File Manager (or other) (https://play.google.com/store/apps/details?id=com.lonelycatgames.Xplore&hl=en)


### Running App on URI click (See http://stackoverflow.com/questions/32023130/how-to-launch-app-on-click-of-url-in-browser-android)
custom scheme: akicondroid:// (or whatever the final application name will be)

Implemented using Android Intents. Docs follow:
https://developer.android.com/guide/components/intents-filters.html

### Debugging Intents using the ADB shell:
```
# This should broadcast the VIEW intent with url. The video/youtube app on the phone should receive it and run
adb shell am start -W -a android.intent.action.VIEW -d "https://youtu.be"
```

