/**
 * Created by Dima Portenko on 24.11.2021
 */
import React from "react";
import { observer } from "mobx-react-lite";
import { View, KeyboardAvoidingView } from "react-native";
import { Appbar, TextInput, useTheme } from "react-native-paper";
import { RootStackScreenProps } from "../types";
import * as routes from "../navigation/routes";
import { useStore } from "../store/store";

type EditClassScreenProps = RootStackScreenProps<typeof routes.EDIT_CLASS> & {};

export const EditClassScreen = observer(
  ({ navigation, route }: EditClassScreenProps) => {
    const { classes } = useStore();

    const theme = useTheme();
    const {
      colors: { background },
    } = theme;
    const [title, setTitle] = React.useState("");
    const [error, setError] = React.useState(false);

    const onSave = () => {
      if (!title) {
        setError(true);
      } else {
        classes.addClassItem({
          id: new Date().getTime(),
          title,
        });
        navigation.goBack();
      }
    };

    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <Appbar.Header theme={theme}>
          <Appbar.BackAction onPress={navigation.goBack} />
          <Appbar.Content title="New Class" />
          <Appbar.Action icon="content-save" onPress={onSave} />
        </Appbar.Header>
        <View style={{ flex: 1, backgroundColor: background, padding: 15 }}>
          <TextInput
            mode="outlined"
            autoComplete
            label="Title"
            value={title}
            error={error}
            onChangeText={(text) => {
              setTitle(text);
              setError(false);
            }}
            onEndEditing={onSave}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
);

