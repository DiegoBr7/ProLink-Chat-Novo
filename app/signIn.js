import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';
import { Image, Pressable, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import React , {useRef} from 'react';


export default function singIn() {
  const router = useRouter();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
    <View className="flex-1" >
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1 gap-12" >
        <View className="items-center" >
          <Image style={{ height: hp(25) }} resizeMode='contain' source={require('../assets/images/login01.png')} />
        </View>

        <View className="gap-10">
          <Text style={{ fontSize: hp(4) }} className="font-bold tracking-wide text-center text-neutral-800" >Sign In  </Text>
          {/*  Inputs  */}

          <View className="gap-4" >
            <View style={{ fontSize: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl " >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder='Email-Adress'
                placeholderTextColor={'gray'}
              />
            </View>

            <View className="gap-3" >
              <View style={{ fontSize: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl " >
                <Octicons name="lock" size={hp(2.7)} color="gray" />
                <TextInput
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder='Password'
                  placeholderTextColor={'gray'}
                />
              </View>
              <Text style={{fontSize:hp(1.8)}} className="font-semibold text-right text-neutral-500 " >Forgot password ?</Text>

            </View>

            <TouchableOpacity style={{height:hp(6.5)}} className="bg-indigo-500 rounded-xl justify-center items-center " >
            <Text  style={{fontSize: hp(2.7)}} className=" text-white font-bold tracking-wider " >
               Sign In
              
              </Text> 
              
            </TouchableOpacity>

            {/* sign up Text */}

              <View className="flex-row justify-center" >
                  <Text style = {{fontSize: hp(1.8)}} className="font-semibold text-neutral-500" >Don't have an account ?</Text>
                  <Pressable onPress={()=> router.push('signUp')} >
                    <Text style = {{fontSize: hp(1.8)}} className="font-bold text-indigo-500" > Sign Up</Text>
                  </Pressable>
              </View>

          </View>
        </View>
      </View>
    </View>
  )
}