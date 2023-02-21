import { Component } from "react";

import government_building from "../media/government.svg";
import cloud_icon from "../media/icons-cloud.svg";
import hybrid_cloud_icon from "../media/icons-hybrid-cloud.svg";
import hub_and_spoke_icon from "../media/icon-workflow.svg";
import vwan_icon from "../media/icon-virtual-wans.svg";
import configuration_icon from "../media/icon-browser.svg";

import { ReusableCard, ReusableEndCard } from "../components/Card";
import { ArrowUndoRegular } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
// import { deleteStorage } from "../utils/helpers/jsonHelper";

export var state = {
  endPublic: false,
  stepHybrid: false,
  endHubAndSpoke: false,
  endVWAN: false,
  endGov: false,
};

class TemplateSelection extends Component {
  state = {
    endPublic: false,
    stepHybrid: false,
    endHubAndSpoke: false,
    endVWAN: false,
    endGov: false,
  };

  handlePublic = () => {
    this.setState(
      {
        endPublic: true,
        stepHybrid: false,
        endHubAndSpoke: false,
        endVWAN: false,
        endGov: false,
      },
      () => (state = this.state)
    );
  };

  handleHybrid = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: true,
        endHubAndSpoke: false,
        endVWAN: false,
        endGov: false,
      },
      () => (state = this.state)
    );
  };

  handleHubAndSpoke = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: true,
        endHubAndSpoke: true,
        endVWAN: false,
        endGov: false,
      },
      () => (state = this.state)
    );
  };
  handleVWAN = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: true,
        endHubAndSpoke: false,
        endVWAN: true,
        endGov: false,
      },
      () => (state = this.state)
    );
  };

  handleGov = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: false,
        endHubAndSpoke: false,
        endVWAN: false,
        endGov: true,
      },
      () => (state = this.state)
    );
  };

  handleUndo = () => {
    if (
      this.state.stepHybrid &&
      (this.state.endHubAndSpoke || this.state.endVWAN)
    ) {
      this.setState(
        {
          endPublic: false,
          stepHybrid: true,
          endHubAndSpoke: false,
          endVWAN: false,
          endGov: false,
        },
        () => (state = this.state)
      );
    } else {
      this.setState(
        {
          endPublic: false,
          stepHybrid: false,
          endHubAndSpoke: false,
          endVWAN: false,
          endGov: false,
        },
        () => (state = this.state)
      );
    }
  };

  render() {
    return (
      <div>
        {!this.state.endPublic &&
          !this.state.stepHybrid &&
          !this.state.endHubAndSpoke &&
          !this.state.endVWAN &&
          !this.state.endGov && (
            <div>
              <ReusableCard
                title="Public Cloud"
                onClick={this.handlePublic}
                imageSrc={cloud_icon}
              />
              <ReusableCard
                title="Hybrid Cloud"
                onClick={this.handleHybrid}
                imageSrc={hybrid_cloud_icon}
              />
              <ReusableCard
                title="Azure Government"
                onClick={this.handleGov}
                imageSrc={government_building}
              />
            </div>
          )}
        {!this.state.endPublic &&
          this.state.stepHybrid &&
          !this.state.endHubAndSpoke &&
          !this.state.endVWAN &&
          !this.state.endGov && (
            <div>
              <Button icon={<ArrowUndoRegular />} onClick={this.handleUndo}>
                Undo
              </Button>
              <br />
              <br />
              <ReusableCard
                title="Hub-Spoke in Azure"
                onClick={this.handleHubAndSpoke}
                imageSrc={hub_and_spoke_icon}
              />
              <ReusableCard
                title="Azure Virtual WAN"
                onClick={this.handleVWAN}
                imageSrc={vwan_icon}
              />
            </div>
          )}
        {(this.state.endPublic ||
          this.state.endHubAndSpoke ||
          this.state.endVWAN ||
          this.state.endGov) && (
          <div>
            <Button icon={<ArrowUndoRegular />} onClick={this.handleUndo}>
              Undo
            </Button>
            <br />
            <br />
            
            <ReusableEndCard
              title="Start New Configuration"
              linkTo="./Configuration"
              imageSrc={configuration_icon}
            />
          </div>
        
      )
      
        }
      </div>
    );
  }
}

export default TemplateSelection;
