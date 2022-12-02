import * as React from 'react';
import {Chip, List} from 'react-native-paper';
import {Button, View, Text, StyleSheet} from 'react-native';

function SelectableChips(props) {
  return (
    <>
      <List.Section>
        <View style={styles.row}>
          <Text style={{alignSelf: 'center'}}>Sort By:</Text>
          <Chip
            selected={props.value === 0 ? true : false}
            mode="outlined"
            onPress={() => {
              console.log('Pressed1');
              props.onSelectedChange(0);
            }}
            style={styles.chip}>
            Price Low-High
          </Chip>
          <Chip
            selected={props.value === 1 ? true : false}
            mode="outlined"
            onPress={() => {
              console.log('Pressed2');
              props.onSelectedChange(1);
            }}
            style={styles.chip}>
            Price High - Low
          </Chip>
        </View>
      </List.Section>
    </>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  chip: {
    margin: 4,
  },
});
export default SelectableChips;
