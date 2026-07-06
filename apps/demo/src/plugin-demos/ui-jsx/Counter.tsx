export default function Counter() {
  let counter = 42;
  const counterLabel = <label text={`${counter} taps left`} class="h2 text-center" textWrap={true} />;

  function onTap() {
    if (counter <= 0) {
      counterLabel.text = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    } else {
      counter--;
      counterLabel.text = `${counter} taps left`;
    }
  }

  return (
    <page class="page">
      <actionBar title="Counter" class="action-bar">
      </actionBar>
      <stackLayout class="p-20">
        <label text="Tap the button" class="h1 text-center"/>
        <button text="TAP" class="btn btn-primary" onTap={onTap}/>
        {counterLabel}
      </stackLayout>
    </page>
  );
}