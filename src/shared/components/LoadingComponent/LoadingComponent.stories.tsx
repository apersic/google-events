import type { Meta, StoryObj } from "@storybook/react";
import LoadingComponent from "./LoadingComponent";

const meta: Meta<typeof LoadingComponent> = {
  title: "Components/LoadingComponent",
  component: LoadingComponent,
};

export default meta;
type Story = StoryObj<typeof LoadingComponent>;

export const Primary: Story = {
  args: {
    text: "Loading",
    isFixed: true,
  },
};
