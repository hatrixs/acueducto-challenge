import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Components/ui/select",
  component: Select,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#161A22" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description:
        "If provided, the rendering responsibility is passed to the client-side code. If omitted, the component internally handles the logic for controlling the opening and closing of the select.",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "250px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Choose an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectSeparator />
          <SelectItem value="option 1">Option 1</SelectItem>
          <SelectItem value="option 2">Option 2</SelectItem>
          <SelectItem value="option 3">Option 3</SelectItem>
          <SelectItem value="option 4">Option 4</SelectItem>
          <SelectItem value="option 5">Option 5</SelectItem>
          <SelectItem value="option 6">Option 6</SelectItem>
          <SelectItem value="option 7">Option 7</SelectItem>
          <SelectItem value="option 8">Option 8</SelectItem>
          <SelectItem value="option 9">Option 9</SelectItem>
          <SelectItem value="option 10">Option 10</SelectItem>
          <SelectItem value="option 11">Option 11</SelectItem>
          <SelectItem value="option 12">Option 12</SelectItem>
          <SelectItem value="option 13">Option 13</SelectItem>
          <SelectItem value="option 14">Option 14</SelectItem>
          <SelectItem value="option 15">Option 15</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    disabled: false,
    defaultOpen: false,
    required: false,
    name: "",
    defaultValue: "",
    onOpenChange(open) {
      console.log({ open });
    },
    onValueChange(value) {
      console.log({ value });
    },
  },
};
