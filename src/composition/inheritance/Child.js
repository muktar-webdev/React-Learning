import Parent from "./Parent";

export default class Child extends Parent {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const textDecorated = this.addEmoji("I'm React Lover", "💜");

    return super.render(textDecorated);
  }
}
