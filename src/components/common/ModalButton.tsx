"use client";
import { useModalState } from "@/utils/modalState";
import Button from "./Button";

type CallbackFunction = () => void;

export default function ModalButton() {
  const isModal = useModalState();

  return (
    <Button
      text="Book A Call"
      onClick={isModal.toggleIsModalOpen}
      link={false}
    />
  );
}
