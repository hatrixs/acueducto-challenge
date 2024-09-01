import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/ui/button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#161A22" }],
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variants",
      options: ["primary", "secondary"],
    },
    asChild: {
      control: "boolean",
      description:
        "When true, the component will render its child component instead of a button element. This allows you to compose the button's functionality and styles with other elements like anchors or custom component.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
    disabled: false,
    className: "",
    onClick: action("primary clic"),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    disabled: false,
    className: "",
    onClick: action("secondary clic"),
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    variant: "primary",
    children: (
      <a href="https://example.com" target="_blank" rel="noreferrer nofollow">
        Link Button
      </a>
    ),
    onClick: action("anchor clic"),
  },
};
