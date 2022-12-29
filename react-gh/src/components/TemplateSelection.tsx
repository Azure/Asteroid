import { Component } from "react";

import government_building from "../media/government.svg";
import cloud_icon from "../media/icons-cloud.svg";
import hybrid_cloud_icon from "../media/icons-hybrid-cloud.svg";
import firewall_icon from "../media/icon-firewall.svg";
import hub_and_spoke_icon from "../media/icon-workflow.svg";
import vwan_icon from "../media/icon-virtual-wans.svg";
import configuration_icon from "../media/icon-browser.svg";

import { ReusableCard, ReusableEndCard } from "../components/Card";
import { ArrowUndoRegular } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";

import { flatMapSelecter, setJsonData } from "../utils/helpers/jsonHelper";

export var state = {
  endPublic: false,
  stepHybrid: false,
  stepHubAndSpoke: false,
  endHubAndSpokeWithFirewall: false,
  endHubAndSpokeWithoutFirewall: false,
  endVWAN: false,
  endGov: false,
};

class TemplateSelection extends Component {
  state = {
    endPublic: false,
    stepHybrid: false,
    stepHubAndSpoke: false,
    endHubAndSpokeWithFirewall: false,
    endHubAndSpokeWithoutFirewall: false,
    endVWAN: false,
    endGov: false,
  };

  dataUpdater = () => {
    state = this.state;
  };

  handlePublic = () => {
    this.setState(
      {
        endPublic: true,
        stepHybrid: false,
        stepHubAndSpoke: false,
        endHubAndSpokeWithFirewall: false,
        endHubAndSpokeWithoutFirewall: false,
        endVWAN: false,
        endGov: false,
      },
      () => this.dataUpdater
    );
  };

  handleHybrid = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: true,
        stepHubAndSpoke: false,
        endHubAndSpokeWithFirewall: false,
        endHubAndSpokeWithoutFirewall: false,
        endVWAN: false,
        endGov: false,
      },
      () => this.dataUpdater
    );
  };

  handleHubAndSpoke = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: true,
        stepHubAndSpoke: true,
        endHubAndSpokeWithFirewall: false,
        endHubAndSpokeWithoutFirewall: false,
        endVWAN: false,
        endGov: false,
      },
      () => this.dataUpdater
    );
  };

  handleHubAndSpokeWithFirewall = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: true,
        stepHubAndSpoke: true,
        endHubAndSpokeWithFirewall: true,
        endHubAndSpokeWithoutFirewall: false,
        endVWAN: false,
        endGov: false,
      },
      () => this.dataUpdater
    );
  };
  handleHubAndSpokeWithoutFirewall = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: true,
        stepHubAndSpoke: true,
        endHubAndSpokeWithFirewall: false,
        endHubAndSpokeWithoutFirewall: true,
        endVWAN: false,
        endGov: false,
      },
      () => this.dataUpdater
    );
  };

  handleVWAN = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: true,
        stepHubAndSpoke: false,
        endHubAndSpokeWithFirewall: false,
        endHubAndSpokeWithoutFirewall: false,
        endVWAN: true,
        endGov: false,
      },
      () => this.dataUpdater
    );
  };

  handleGov = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: false,
        stepHubAndSpoke: false,
        endHubAndSpokeWithFirewall: false,
        endHubAndSpokeWithoutFirewall: false,
        endVWAN: false,
        endGov: true,
      },
      () => this.dataUpdater
    );
  };

  handleUndo = () => {
    this.setState(
      {
        endPublic: false,
        stepHybrid: false,
        stepHubAndSpoke: false,
        endHubAndSpokeWithFirewall: false,
        endHubAndSpokeWithoutFirewall: false,
        endVWAN: false,
        endGov: false,
      },
      () => this.dataUpdater
    );
  };

  render() {
    setJsonData(
      flatMapSelecter(
        state.endPublic,
        state.endHubAndSpokeWithFirewall,
        state.endHubAndSpokeWithoutFirewall,
        state.endVWAN
      )
    );
    return (
      <div>
        {!this.state.endPublic &&
          !this.state.stepHybrid &&
          !this.state.stepHubAndSpoke &&
          !this.state.endHubAndSpokeWithFirewall &&
          !this.state.endHubAndSpokeWithoutFirewall &&
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
          !this.state.stepHubAndSpoke &&
          !this.state.endHubAndSpokeWithFirewall &&
          !this.state.endHubAndSpokeWithoutFirewall &&
          !this.state.endVWAN &&
          !this.state.endGov && (
            <div>
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
        {!this.state.endPublic &&
          this.state.stepHybrid &&
          this.state.stepHubAndSpoke &&
          !this.state.endHubAndSpokeWithFirewall &&
          !this.state.endHubAndSpokeWithoutFirewall &&
          !this.state.endVWAN &&
          !this.state.endGov && (
            <div>
              <br />
              <br />

              <ReusableCard
                title="Azure Managed Firewall"
                onClick={this.handleHubAndSpokeWithFirewall}
                imageSrc={firewall_icon}
              />
              <ReusableCard
                title="Own Firewall"
                onClick={this.handleHubAndSpokeWithoutFirewall}
                imageSrc={firewall_icon}
              />
            </div>
          )}
        {(this.state.endPublic ||
          this.state.endHubAndSpokeWithFirewall ||
          this.state.endHubAndSpokeWithoutFirewall ||
          this.state.endVWAN ||
          this.state.endGov) && (
          <div>
            <Button icon={<ArrowUndoRegular />} onClick={this.handleUndo}>
              Undo
            </Button>
            <br />
            <br />
            <ReusableEndCard
              title="Start Configuration"
              linkTo="./Configuration"
              imageSrc={configuration_icon}
            />
          </div>
        )}
      </div>
    );
  }
}

export default TemplateSelection;
