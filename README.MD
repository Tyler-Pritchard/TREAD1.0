Brought to you by experts in city survival, criminal justice and modern mobile technology, TREAD is the all-in-one pedestrian safety application.  TREAD cannot guarantee a victimless society, but TREAD can arm citizens with tools to stop violent and property crimes by providing context and situational awareness.  To begin with, TREAD will provide traveling pedestrians a mobile application to create routes which will factor in local static crime data to influence the mapping algorithm to avoid high-risk areas.

Native App Dependencies:

    axios expo ngrok react react-dom react-native react-native-elements react-native-gesture-handler react-native-reanimated react-native-web react-navigation react-navigation-stack react-navigation-tabs
  
Native App Dev Dependencies: 

    babel-preset-expo @babel/core

Express API Dependencies:

    bcrypt express jsonwebtoken mongoose nodemon


With Homebrew: 

    brew cask install ngrok


TO LAUNCH TREAD APPLICATION

+++EVERY 8 HOURS NGROK MUST BE RESTARTED+++
NGROK will provide a new url, which must be copy/pasted to the Axios baseURL in the NativeApp/src/api/tracker.js file.

To access TREAD > API on localhost:3000, first start the Express API instance by opening the API directory and executing:

    npm run dev

Then from a separate terminal window, open the NativeApp directory and execute: 

    ngrok http 3000

Copy the URL provided by Ngrok (i.e., Forwarding --> http://1234abcd.ngrok.io) and paste it into the "baseURL" of the NativeApp/src/api/tracker.js file

REPEAT: EVERY 8 HOURS NGROK MUST BE RESTARTED

NGROK will provide a new url, which must be copy/pasted into the Axios baseURL
NativeApp > src > api > tracker.js

code sample of tracker.js:
**************************************************
    import axios from 'axios';

    export default axios.create({
        baseURL: '<INSERT NGROK URL HERE>'
    });
**************************************************

In a third terminal window, open the NativeApp directory and execute the following command:

    npm start