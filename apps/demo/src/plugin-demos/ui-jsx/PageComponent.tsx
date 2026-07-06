export default function PageComponent(props) {
  const { class: className, onTap, children, footer } = props;

  return (
    <stackLayout class={className}>
      <label onTap={onTap}>I'm main label, tap me!</label>
      {children}
      {footer}
    </stackLayout>
  );
}