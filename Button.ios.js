const React = require('react');
const ReactNative = require('react-native');
const {
 TouchableOpacity,
  View,
  Text
} = ReactNative;


const height = 16;
const width = 20;

const Button = (props) => {
  let badge = props.badge
  const badgenum = parseInt(badge, 10)
  if (!isNaN(badgenum) && badgenum > 999) {
    badge = '999+'
  }

  const isBadge = parseInt(badge, 10) > 0 && !isNaN(badgenum)

  return <TouchableOpacity {...props}>
    {props.children}
    {isBadge ? 
      <View style={{position: 'absolute', right: 5, top: 3,backgroundColor: '#1AC7B5',borderRadius: height / 2,}}>
        <Text style={{ color: '#ffffff', fontSize: 12,  minWidth: width, height: height, lineHeight: height, textAlign: 'center', textAlignVertical: 'center', paddingHorizontal: 3}}>{badge}</Text>
      </View>
      : null
    }
    
    
  </TouchableOpacity>;
};

module.exports = Button;
