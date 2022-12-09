import { Component } from "react";
import government_building from "../media/government.svg";
import cloud_icon from "../media/icons-cloud.svg";
import hybrid_cloud_icon from "../media/icons-hybrid-cloud.svg";
import { Card, TransitCard } from "../components/Card";
import { IconButton, IIconProps } from "@fluentui/react";

class TemplateSelection extends Component {

  state = {
    isHybrid: false,
    isHubSpoke: false,
  };

  handleHybrid = () => {
    this.setState({
      isHybrid: true,
      isHubSpoke: false,
    });
  };

  handleHubSpoke = () => {
    this.setState({
      isHybrid: true,
      isHubSpoke: true,
    });
  };

  handleHome = () => {
    this.setState({
      isHybrid: false,
      isHubSpoke: false,
    });
  };

  render() {
    return (
      //   <div>
      //     {this.state.isHybrid ? <h1>Hello React</h1> : null}
      //     <button onClick={this.handleShow}>Show</button>
      //     <button onClick={this.handleHide}>Hide</button>
      //   </div>
      <div>
        {!this.state.isHybrid && !this.state.isHubSpoke && (
          <div>
            <Card
              linkTo="./Configuration"
              title="Public Cloud"
              imageSrc={cloud_icon}
            />
            <TransitCard
              title="Hybrid Cloud"
              onClick={this.handleHybrid}
              imageSrc={hybrid_cloud_icon}
            />
            <Card
              linkTo="./Configuration"
              title="Azure Government"
              imageSrc={government_building}
            />
          </div>
        )}
        {this.state.isHybrid && !this.state.isHubSpoke && (
          <div>
            {/* create undo fluent ui icon button */}
            <IconButton
                iconProps={{ iconName: "Undo" }}    
                title="Undo"
                ariaLabel="Undo"
                onClick={this.handleHome}
            />
            <br />
            <br />

            <TransitCard
              onClick={this.handleHubSpoke}
              title="Hub-Spoke in Azure"
              imageSrc={cloud_icon}
            />
            <Card
              linkTo="./Configuration"
              title="Azure Virtual WAN"
              imageSrc={government_building}
            />
          </div>
        )}
        {this.state.isHybrid && this.state.isHubSpoke && (
            
          <div>
            <IconButton
                iconProps={{ iconName: "Undo" }}    
                title="Undo"
                ariaLabel="Undo"
                onClick={this.handleHome}
            />
            <br />
            <br />

            <Card
              linkTo="./Configuration"
              title="Small & Medium Businesses"
              imageSrc={government_building}
            />
            <Card
              linkTo="./Configuration"
              title="Enterprise"
              imageSrc={government_building}
            />
          </div>
        )}
      </div>
    );
  }
}

export default TemplateSelection;
