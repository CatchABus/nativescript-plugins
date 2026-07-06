import PageComponent from "./PageComponent";

export default function PageWithComponent() {
  return (
    <page class="page">
      <actionBar title="Page with Component" class="action-bar">
      </actionBar>
      <PageComponent class="p-20" onTap={() => alert('A component event!')} footer={<label>I'm the footer view slot!</label>}>
        <label>I'm nested inside component</label>
      </PageComponent>
    </page>
  );
}