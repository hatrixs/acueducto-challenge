import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/modal";

const meta: Meta<typeof Modal> = {
  title: "Components/ui/Modal",
  component: Modal,
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
        "If provided, the rendering responsibility is passed to the client-side code. If omitted, the component internally handles the logic for controlling the opening and closing of the modal.",
    },
    modal: {
      control: "boolean",
      description:
        "If the prop is provided, the modal behaves as a floating window without the modal background. This behavior is true by default.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="primary">Sign in</Button>
      </ModalTrigger>
      <ModalContent className="sm:max-w-[425px]">
        <ModalHeader>
          <ModalTitle>Welcome</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" type="password" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary">Sign In</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
  args: {
    defaultOpen: false,
    onOpenChange(open) {
      console.log({ open });
    },
    modal: true,
  },
};
