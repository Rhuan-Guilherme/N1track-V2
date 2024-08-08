import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ChartModal() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>N1Track: Novo Modelo de Assinatura Anual</Modal.Header>
        <Modal.Body>
          <div className="space-y-2">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300">
            Prezados usuários, neste mês, comemoramos um ano do N1Track e agradecemos pela preferência e confiança em nosso sistema. A partir de 30 de agosto de 2024, o sistema passará a ser pago, com uma taxa anual de R$40,00. Este valor nos ajudará a cobrir os custos de hospedagem e a implementação de inteligência artificial no sistema.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300">Agradecemos pela sua compreensão e esperamos continuar proporcionando um serviço de qualidade.</p>
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300">O pagamento pode ser efetuado através do QR code abaixo. Após a confirmação do pagamento, seu perfil será liberado para uso anual.</p>
            <img className="w-44" src="./qrcode.png" />
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  );
}