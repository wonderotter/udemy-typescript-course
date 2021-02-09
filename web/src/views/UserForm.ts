export class UserForm {
  parent: Element;

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input type="text"/>
    </div>
    `
  }
}          