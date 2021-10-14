import * as React from "react";
import { connect } from "react-redux";
import { styles } from "./styles";

interface SearchBarProps {
  setPincode?: any;
  pinCode?: string;
}

interface SearchBarState {}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  render() {
    function debounce(func: any, wait: number) {
      let timeout: any;
      return function (this: any, ...args: any) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
    return (
      <div style={styles.searchDiv}>
        <input
          onChange={debounce(this.props.setPincode, 500)}
          style={styles.searchInput}
          type="text"
          name="pincode"
          placeholder="Enter Pincode"
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    pinCode: state.pinCode,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPincode: (data: any) => {
      let value;
      if (data.target?.value === "" || data.target?.value === null)
        value = undefined;
      else value = data.target?.value;
      dispatch({ type: "CHANGE_PINCODE", payload: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
