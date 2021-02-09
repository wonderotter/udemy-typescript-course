export class UserForm {
  constructor(public parent: Element){}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick
    };
  }

  onButtonClick(): void{
    alert('Hi there');
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input type="text"/><button>클릭</button>
    </div>
    `
  }

  render(): void{
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}          