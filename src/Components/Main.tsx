import * as React from "react";
import { connect } from "react-redux";
import { fetchData } from "../Api/api";
import SearchBar from "../Components/SearchBar";
import Container from "../Components/Container";
import Widget from "../Components/Widget";
import { styles } from "./styles";

interface MainProps {
  dispatch: any;
  data: any;
  handleUpdate?: any;
}

interface MainState {
  pinCode?: number;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      pinCode: undefined,
    };
  }
  componentDidMount() {
    fetchData().then((res: any) => {
      this.props.handleUpdate(res);
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <div style={styles.mainContent}>
          {this.props.data &&
            this.props.data.map((data: any, index: number) => {
              if (data.slotType === "WIDGET") {
                return <Widget key={`widget_${index}`} data={data} />;
              } else if (data.slotType === "CONTAINER") {
                return <Container key={`container_${index}`} data={data} />;
              }
            })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch?: any) => {
  return {
    handleUpdate: (data: any) => {
      dispatch({ type: "ADD_DATA", payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
