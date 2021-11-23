import * as React from 'react';
import {
  Card,
  Title,
  Paragraph, FAB,
} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { RootStackScreenProps } from "../types";
import { HOME } from '../navigation/routes';


type Props = {} & RootStackScreenProps<typeof HOME>;

export default function HomeScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Card onPress={() => {}}>
        <Card.Content>
          <Title>{'title'}</Title>
          <Paragraph>{'content'}</Paragraph>
        </Card.Content>
      </Card>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 32,
    right: 0,
    bottom: 0,
  },
});
