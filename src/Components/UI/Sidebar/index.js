import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { PanelControl } from "./PanelControl/PanelControl";
import { Configuracion } from "./Configuracion/Configuracion";
import * as actionCreators from "../../../store/actions";
import { connect } from "react-redux";
class Sidebar extends Component {
  state = {
    side: [<PanelControl />, <Configuracion />]
  };

  componentDidUpdate(prevProps) {}
  fuckedUpShit = () => {
    const side = { ...this.state.side };
  };
  render() {
    const hasPanel = sessionStorage.company ? <PanelControl /> : null;
    const hasConfig = sessionStorage.subCompany ? <Configuracion /> : null;
    return (
      <div className="sidebar shadow-sm">
        <ul>
          <Link to="/company">
            {/* <li className="sideBarListItem">
              <FontAwesomeIcon icon={faCoffee} />
              Compañias
            </li> */}
          </Link>
          {this.props.sidebarItems}
        </ul>
      </div>
    );
  }
}

// ================REDUX==================

const mapStateToProps = state => {
  return {
    sidebarItems: state.sidebarItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectedCompany: setSidebarItems =>
      dispatch(actionCreators.selectCompany(setSidebarItems))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
