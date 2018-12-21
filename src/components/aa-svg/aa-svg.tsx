import { Component, Prop } from "@stencil/core";

@Component({
  tag: "aa-svg",
  styleUrl: "aa-svg.css",
  shadow: true
})
export class AASvgComponent {
  @Prop() aa: string;

  get_tex_width(txt, font) {
    let element = document.createElement("canvas");
    let context = element.getContext("2d");
    context.font = font;
    return context.measureText(txt).width;
  }
  render() {
    const data = this.aa.split(/\\n|\r\n|\r|\n/);
    let text = [];
    let maxWidth = 0;
    let maxHeight = 16 * data.length;
    for (let i = 0; i < data.length; i++) {
      let width = this.get_tex_width(data[i], "16px 'Saitamaar'");
      if (maxWidth < width) {
        maxWidth = width;
      }
      text.push(
        <text x="0" y={16 * (i + 1) + 2}>
          {data[i]}
        </text>
      );
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={"0 0 " + maxWidth + " " + maxHeight}
      >
        <g style={{ fontFamily: "Saitamaar", fontSize: 16 }}>{text}</g>
      </svg>
    );
  }
}
