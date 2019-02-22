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
import CommunityWebView from 'react-native-webview-quill/src/connectors/webView/CommunityWebView';

providerRegistry.WebViewComponent = CommunityWebView;

console.log(providerRegistry.WebViewComponent);

export default class App extends React.Component {
  public render() {
    return <Quill />;
  }
}
