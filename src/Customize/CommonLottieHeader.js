/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2019/2/18
 *
 */

import { React } from "react";
import { RefreshHeader } from "../RefreshHeader";
import { View, Animated, Easing } from "react-native";
import LottieView from 'lottie-react-native'

export class CommonLottieHeader extends RefreshHeader {
  static height: number = 100;

  constructor(props) {
    super(props);
  }

  render() {
    if(Platform.OS === "harmony") {
      return (
        <View style={{ flex: 1, marginTop: 20,alignItems:"center" }}>
          <LottieView
            source={
             require("./res/refreshing.json")
            }
            style={{
              height: 80,
              width: 80,
              display:this.state.status=="refreshing"?'none':'flex'
            }}
            progress={-this.state.rotateY*0.0138}
            autoPlay={true}
            loop={false}
          />
  
         <LottieView
            source={
              require("./res/refreshing2.json") 
            }
            style={{
              height: 80,
              width: 80,
              display:this.state.status=="refreshing"?'flex':'none'
            }}
            autoPlay={true}
            loop={true}
          />
        </View>
      );
    }else {
      let progress = this.props.offset.interpolate({
        inputRange: [-200, -150, -150, -100, -100, -50],
        outputRange: [1, 0, 1, 0, 1, 0]
      });
      if (this.state.status === "refreshing") {
        progress = undefined;
      }
      return (
        <View style={{ flex: 1, marginTop: 20 }}>
          <LottieView
            source={
              this.state.status === "refreshing" ? require("./res/refreshing2.json") : require("./res/refreshing.json")
            }
            progress={progress}
            autoPlay={this.state.status === "refreshing"}
            loop={this.state.status === "refreshing"}
          />
        </View>
      );
    }
  }
}