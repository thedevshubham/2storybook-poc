import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    onClick: { action: true },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const ButtonInteraction: ComponentStory<typeof Button> = Template.bind(
  {}
);
ButtonInteraction.args = {
  primary: true,
  label: "Button",
};
ButtonInteraction.play = async ({ args, canvasElement }) => {
  const { onClick } = args;
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByRole("button");

  await userEvent.click(buttonElement);
  await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for visualization

  if (onClick) {
    onClick();
  }
};

export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large: ComponentStory<typeof Button> = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small: ComponentStory<typeof Button> = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
