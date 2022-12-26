import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import QRCode from 'qrcode'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    console.log('qrcode',QRCode);
    QRCode.toDataURL('I am a pony!')
  .then(url => {
    console.log(url)
  })
  .catch(err => {
    console.error(err)
  })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
