import React from "react";
import { Story, Meta } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text here",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Name",
  placeholder: "Enter your name",
};
