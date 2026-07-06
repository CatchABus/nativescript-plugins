import { action, computed, observable } from 'mobx';

export default function Reactivity() {
  const counter = observable.box(42);
  const message = computed(() => counter.get() > 0 ? `${counter} taps left` : 'Hoorraaay! You unlocked the NativeScript clicker achievement!');
  
  const counterLabel = <label text={message} class="h2 text-center" textWrap={true} />;

  function onTap() {
    let counterVal = counter.get();
    if (counterVal > 0) {
      counterVal--;
      counter.set(counterVal);
    }
  }

  return (
    <page class="page">
      <actionBar title="Reactivity" class="action-bar">
      </actionBar>
      <stackLayout class="p-20">
        <label text="Tap the button" class="h1 text-center"/>
        <button text="TAP" class="btn btn-primary" onTap={action(onTap)}/>
        {counterLabel}
      </stackLayout>
    </page>
  );
}