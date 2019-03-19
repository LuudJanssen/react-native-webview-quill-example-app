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

const viewerOptions = {
  modules: {
    toolbar: false,
  },
  theme: 'snow',
  placeholder: 'Placeholder text',
  readOnly: true,
};

const editorOptions = {
  modules: {
    toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'video']],
  },
  theme: 'snow',
  placeholder: 'Placeholder text',
};

export default class App extends React.Component<any, any> {
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
          options={viewerOptions}
          containerStyle={{ flex: 2, backgroundColor: 'rgba(255, 0, 0, 0.2)' }}
        />
        <Quill
          content={this.state.content}
          onContentChange={this.onContentChange}
          options={editorOptions}
          containerStyle={{ flex: 2, backgroundColor: 'rgba(0, 255, 0, 0.2)' }}
        />
      </View>
    );
  }

  private onContentChange = (content: DeltaStatic) => {
    this.setState({ content });
    console.log('CONTENT', content);
  };
}
