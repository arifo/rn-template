import React from 'react';

import { StyleSheet, View } from 'react-native';

import { ContainerView, RNText } from 'views/components';

export default function HomeScreen() {
  return (
    <ContainerView.Main title={'Home'}>
      <View style={styles.container}>
        <RNText>Home</RNText>
      </View>
    </ContainerView.Main>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start' },
});
