import * as React from "react";
import { connect } from "react-redux";
import { styles } from "./styles";

export type imageType = {
  id: string;
  imageUrl: string;
};
export type slotType = "WIDGET" | "CONTAINER";

export type widgetType = {
  slotId: number;
  imageCount: number;
  slotType: slotType;
  grow: string;
  serviceablePincodes: string[];
  assets: imageType[];
};
interface WidgetProps {
  data: widgetType;
  selectedWidget?: imageType;
  handleClick?: any;
  pinCode: string;
}

interface WidgetState {}

class Widget extends React.Component<WidgetProps, WidgetState> {
  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          width: data.grow,
          display:
            data?.serviceablePincodes?.includes(this.props.pinCode) ||
            this.props.pinCode === undefined
              ? "flex"
              : "none",
          flexDirection: "row",
        }}
      >
        {data.assets.map((image: imageType, index: number) => {
          return (
            <Image
              key={`Image_${index}`}
              selectedWidget={this.props.selectedWidget}
              data={image}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

type imageProps = {
  data: imageType;
  selectedWidget?: imageType;
  handleClick?: any;
};

const Image = React.memo(
  ({ data, selectedWidget, handleClick }: imageProps) => {
    const onPress = () => {
      if (data.id !== selectedWidget?.id) {
        handleClick(data);
      } else {
        handleClick(undefined);
      }
    };

    const style =
      selectedWidget?.id === data.id ? styles.setBorder : styles.unsetBorder;
    return (
      <div onClick={onPress} style={style}>
        <img
          alt={`image_${data.id}`}
          src={data.imageUrl}
          height="100%"
          width="100%"
        />
      </div>
    );
  }
);

const mapStateToProps = (state: any) => {
  return {
    selectedWidget: state.selectedWidget,
    pinCode: state.pinCode,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleClick: (data?: imageType) => {
      dispatch({ type: "SELECTED_WIDGET", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
