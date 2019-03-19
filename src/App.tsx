/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import { DeltaStatic } from 'quill-delta';
import * as React from 'react';
import { View } from 'react-native';
import { providerRegistry, Quill } from 'react-native-webview-quill';
import { WebView } from 'react-native-webview-quill/src/providers/WebView/Community/index';

providerRegistry.WebViewProvider = WebView;

const defaultOps = {
  ops: [
    {
      insert: 'Test',
      attributes: {
        bold: true,
      },
    },
  ],
};

const options = {
  modules: {
    toolbar: [['bold', 'italic'], ['link', 'image']],
  },
};

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      content: defaultOps,
    };
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <Quill
          content={this.state.content}
          onContentChange={this.onContentChange}
          options={options}
        />
        <Quill content={this.state.content} onContentChange={this.onContentChange} />
      </View>
    );
  }

  private onContentChange = (content: DeltaStatic) => {
    this.setState({ content });

    console.log('CONTENT', content);
  };
}
