import { EventData, TextField } from '@nativescript/core';
import { action, observable } from 'mobx';

export default function PageContent() {
  const userText = observable.box("");

  function onTextFieldChange(args: EventData) {
    const view = args.object as TextField;
    userText.set(view.text);
  }

  return (
    <page class="page">
      <actionBar title="Reactive TextField" class="action-bar">
      </actionBar>
      <stackLayout class="p-20">
        <label>
          <span text="Typed text: "></span>
          <span text={userText}></span>
        </label>
        <textField hint="Type something" marginTop={32} onTextChange={action(onTextFieldChange)}/>
      </stackLayout>
    </page>
  );
}