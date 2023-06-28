import type { Meta, StoryObj } from "@storybook/react";
import LoadingDots from "./LoadingDots";

const meta: Meta<typeof LoadingDots> = {
  title: "Components/LoadingDots",
  component: LoadingDots,
};

export default meta;
type Story = StoryObj<typeof LoadingDots>;

export const Primary: Story = {
  args: {
    isFixed: true,
  },
};
