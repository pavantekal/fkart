import * as React from "react";
import Widget, { widgetType } from "./Widget";

interface ContainerProps {
  data: any;
  dispatch?: any;
}

interface ContainerState {}

class Container extends React.Component<ContainerProps, ContainerState> {
  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          width: data.grow,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {data?.children?.map((child: widgetType, index: number) => {
          return child.slotType === "WIDGET" ? (
            <Widget key={`widget_container_${index}`} data={child} />
          ) : (
            <Container key={`container_container${index}`} data={child} />
          );
        })}
      </div>
    );
  }
}

export default Container;
