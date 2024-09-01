import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Meta, StoryObj } from "@storybook/react";
import { CircleUserRound } from "lucide-react";

const meta: Meta<typeof Avatar> = {
  title: "Components/ui/avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#161A22" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/hajocava.png" alt="Haziel" />
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://not-found.png" alt="not found" />
      <AvatarFallback>
        <CircleUserRound size={64} className="text-primary-lime" />
      </AvatarFallback>
    </Avatar>
  ),
};
