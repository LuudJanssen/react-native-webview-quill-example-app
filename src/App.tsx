/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { providerRegistry, Quill } from 'react-native-webview-quill';
import ReactNativeWebView from 'react-native-webview-quill/src/connectors/webView/ReactNativeWebView';

providerRegistry.WebView = ReactNativeWebView;

console.log(providerRegistry.WebView);

export default class App extends React.Component {
  public render() {
    return <Quill />;
  }
}
