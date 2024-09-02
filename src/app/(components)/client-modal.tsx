import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";
import { Client } from "@/components/data-table/columns";

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: Client | null;
}

export function ClientModal({ isOpen, onClose, client }: ClientModalProps) {
  if (!client) return null;

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-[calc(100%-2rem)] sm:max-w-[500px] md:max-w-[880px]">
        <ModalHeader>
          <ModalTitle className="font-monument font-normal">
            Detalles de la orden
          </ModalTitle>
        </ModalHeader>
        <ModalBody className="rounded-lg bg-neutral-slate p-5">
          <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-10">
            <div className="flex flex-col gap-y-[10px]">
              <div className="flex flex-col gap-y-[10px]">
                <Label className="text-[18px] font-bold text-[#F0F1F5]">
                  Cliente
                </Label>
                <span>{client.name}</span>
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <Label className="text-[18px] font-bold text-[#F0F1F5]">
                  Correo
                </Label>
                <span>{client.email}</span>
              </div>
            </div>

            <div className="flex flex-col gap-y-[10px]">
              <div className="flex flex-col gap-y-[10px]">
                <Label className="text-[18px] font-bold text-[#F0F1F5]">
                  No. de orden
                </Label>
                <span>{client.order_number}</span>
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <Label className="text-[18px] font-bold text-[#F0F1F5]">
                  Enviado el
                </Label>
                <span>23/01/2024 a las 14:02 hrs</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-y-[10px]">
                <Label className="text-[18px] font-bold text-[#F0F1F5]">
                  Costo
                </Label>
                <div className="flex justify-between">
                  <span>Productos</span>
                  <span>$25,850.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Envio</span>
                  <span>$1,032.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>26,882.00</span>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="secondary"
            className="md:w-[120px]"
            onClick={onClose}
          >
            Volver
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
