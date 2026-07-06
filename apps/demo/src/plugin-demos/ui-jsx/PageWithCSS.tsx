import css from './page-with-css.css';

export default function PageWithCSS() {
  return (
    <page class="page" css={css as any}>
      <actionBar title="Page with CSS" class="action-bar">
      </actionBar>
      <stackLayout class="p-20">
        <label class="centered-bold">Styled page with bold title and red button</label>
        <button text="Hello CSS" class="gg btn btn-primary"/>
      </stackLayout>
    </page>
  );
}