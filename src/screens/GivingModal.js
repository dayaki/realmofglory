import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Select2 from 'react-native-select-two';
import {Cancel} from '../../assets/icons';
import {Button, HeaderText, RegularText, toMoney} from '../components';
import {givingStyles as styles} from './styles';

const givingData = [
  {id: 1, name: 'Covenant Commitment', checked: true},
  {id: 2, name: 'First Fruit'},
  {id: 3, name: 'Pledge'},
  {id: 4, name: 'Seed Offering'},
];

const GivingModal = ({navigation}) => {
  const [fakeAmount, setFakeAmount] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [giveType, setGiveType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAmount = text => {
    const temp = text.includes('₦') ? text.slice(1) : text;
    setFakeAmount(temp);
    setAmount(text);
  };

  const handleType = type => {
    console.log('handleType', givingData[type - 1]);
    setGiveType(givingData[type - 1]);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <HeaderText title="Give Online" style={styles.modalTitle} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.modalClose}
          onPress={() => navigation.goBack()}>
          <Cancel size={20} />
        </TouchableOpacity>
        <View style={styles.inputs}>
          <RegularText title="Name" style={styles.label} />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={name}
            onChangeText={e => setName(e)}
          />
        </View>
        <View style={styles.inputs}>
          <RegularText title="Email" style={styles.label} />
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputs}>
          <RegularText title="Phone" style={styles.label} />
          <TextInput
            placeholder="Phone number"
            keyboardType="number-pad"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputs}>
          <RegularText title="Select Type" style={styles.label} />
          <Select2
            isSelectSingle={true}
            style={styles.select}
            modalStyle={styles.selectModal}
            selectedTitleStyle={styles.selectText}
            colorTheme="black"
            popupTitle="Select Giving Type"
            title="Select Type"
            cancelButtonText="Cancel"
            selectButtonText="Select"
            defaultFontName="Montserrat-Medium"
            data={givingData}
            showSearchBox={false}
            onSelect={handleType}
            onRemoveItem={data => console.log('remove', data)}
          />
        </View>
        <View style={styles.amount}>
          <TextInput
            placeholder="₦0"
            returnKeyType="done"
            keyboardType="number-pad"
            style={styles.amountInput}
            value={fakeAmount === '' ? fakeAmount : `₦${toMoney(fakeAmount)}`}
            onChangeText={handleAmount}
          />
          <RegularText title="Enter an amount" style={styles.amountLabel} />
        </View>
        <Button
          title="Pay now"
          buttonStyle={styles.modalBtn}
          isLoading={isLoading}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default GivingModal;
