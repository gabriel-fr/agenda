import axios from "axios";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { ShearchBar, ModalContent } from "./styles";

interface cepResponse {
  logradouro?: string;
  complemento?: string;
  bairro?: string;
}

const Search = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [cepData, setCepData] = useState<cepResponse>({});

  const fetchCepData = async (cep: string) => {
    if (cep.length < 8) return;
    const response = await axios.get(`http://viacep.com.br/ws/${cep}/json`);
    const cepInformation = {
      logradouro: response.data.logradouro,
      complemento: response.data.complemento,
      bairro: response.data.bairro,
    };
    setCepData(cepInformation);
  };

  return (
    <>
      <ShearchBar>
        <span>Agenda</span>
        <span>
          <input placeholder="Pesquisar Contatos"></input>
        </span>
        <span>
          <button onClick={() => setModalOpen(true)}>+</button>
        </span>
      </ShearchBar>
      {isModalOpen && (
        <Modal title="Adicionar Contato" onClose={() => setModalOpen(false)}>
          <ModalContent>
            <div>
              <div>
                Nome
                <input></input>
              </div>
              <div>
                Sobrenome
                <input></input>
              </div>
              <div style={{ display: "flex" }}>
                Endereço
                <div style={{ marginTop: 15 }}>
                  <div>
                    CEP
                    <input
                      type="number"
                      placeholder="00000-000"
                      onChange={(e) => fetchCepData(e.currentTarget.value)}
                    />
                  </div>
                  <div>
                    Logradouro
                    <input
                      value={cepData?.logradouro}
                      onChange={(rua) => setCepData({ logradouro: rua.currentTarget.value })}
                    />
                  </div>
                </div>
                <div style={{ marginTop: 15, marginLeft: 15 }}>
                  <div>
                    Complemento
                    <input
                      value={cepData?.complemento}
                      onChange={(complemento) =>
                        setCepData({ complemento: complemento.currentTarget.value })
                      }
                    />
                  </div>
                  <div>
                    Bairro
                    <input
                      value={cepData?.bairro}
                      onChange={(bairro) => setCepData({ bairro: bairro.currentTarget.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
              <button style={{ marginRight: 5 }}>Salvar</button>
              <button style={{ marginLeft: 5 }} onClick={() => setModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Search;
