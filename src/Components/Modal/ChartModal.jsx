import { Modal } from "flowbite-react";
import React from "react";
import { AnimeContext } from "../../Context/AnimeContext";

export function ChartModal() {
  const {chart, setChart} = React.useContext(AnimeContext)

  return (
    <>
      <Modal dismissible show={chart} onClose={() => setChart(false)}>
        <Modal.Header>O N1Track precisa da sua ajuda</Modal.Header>
        <Modal.Body>
          <div className="space-y-2">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300">
            Neste mês, comemoramos um ano do N1Track e agradecemos pela confiança e preferência em nosso sistema. A partir de 30 de agosto de 2024, para cobrir os custos de hospedagem e a implementação de inteligência artificial, precisaremos arrecadar um total de R$ 250,00.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300">Esse valor foi calculado considerando os 8 usuários ativos do N1Track, resultando em uma contribuição individual de R$ 32,00.O prazo para o pagamento será até 10/09/2024. Contamos com a sua colaboração para continuar oferecendo um serviço de qualidade.</p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-red-500 font-bold">Caso não atinjamos a meta de R$ 250,00, o sistema será descontinuado, e os valores pagos serão devolvidos integralmente aos colaboradores.</p>
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300">O pagamento pode ser efetuado através do QR code abaixo. </p>
            <img className="w-44" src="./qrcode.png" />
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  );
}