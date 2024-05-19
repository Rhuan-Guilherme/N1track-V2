import React from 'react';
import { AnimeContext } from '../../Context/AnimeContext';

const Organograma = () => {
  const { slide } = React.useContext(AnimeContext);
  return (
    <section
      className={`w-screen bg-cinza-50 dark:bg-cinza-900  pt-[3.5rem] overflow-y-auto ${
        slide ? 'px-20' : 'px-10'
      }`}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr>
            <th className="dark:bg-cinza-700 bg-cinza-300 p-2 dark:text-cinza-50 text-cinza-700">
              UNIDADE
            </th>
            <th className="dark:bg-cinza-700 bg-cinza-300 p-2 dark:text-cinza-50 text-cinza-700">
              COORDENADORIAS E ASSESSORIAS
            </th>
            <th className="dark:bg-cinza-700 bg-cinza-300 p-2 dark:text-cinza-50 text-cinza-700">
              GERENCIA
            </th>
          </tr>
          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              TRIBUNAL PLENO
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2"></div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              PRIMEIRA TURMA
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2"></div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SEGUNDA TURMA
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2"></div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              GABINETE DOS MINISTROS
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">MINISRO ALEXANDRE DE MORAES</div>
                <div className="py-2">MINISTRA CÁRMEN LÚCIA</div>
                <div className="py-2">MINISTRO CRISTIANO ZANIN</div>
                <div className="py-2">MINISTRO DIAS TOFFOLI</div>
                <div className="py-2">MINISTRO EDSON FACHIN</div>
                <div className="py-2">MINISTRO GILMAR MENDES</div>
                <div className="py-2">MINISTRO LUIZ FUX</div>
                <div className="py-2">MINISTRO NUNES MARQUES</div>
                <div className="py-2">MINISTRO ROBERTO BARROSO</div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA-GERAL DA PRESIDÊNCIA (SG)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  GABINETE DO SECRETÁRIO-GERAL DA PRESIDÊNCIA
                </div>
                <div className="py-2">ASSESSORIA DO PLENÁRIO</div>
                <div className="py-2">ASSESSORIA DE ANÁLISE DE RECURSOS </div>
                <div className="py-2">ASSESSORIA PROCESSUAL </div>
                <div className="py-2">CENTRAL DO CIDADÃO</div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div className="py-2">GERÊNCIA DE INFORMAÇÕES PROCESSUAIS </div>
              <div className="py-2">GERÊNCIA DE COMUNICAÇÃO COM O CIDADÃO </div>
            </td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              GABINETE DA PRESIDÊNCIA
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Assessoria de Assuntos Internacionais
                </div>
                <div className="py-2">
                  Assessoria de Articulação Parlamentar
                </div>
                <div className="py-2">Assessoria de Cerimonial </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE GESTÃO ESTRATÉGICA (SGE)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Escritório de Gestão da Estratégia (EGES)
                </div>
                <div className="py-2">
                  Escritório de Gestão de Projetos Estratégicos (EGEP)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div className="py-2">GERÊNCIA DE ANÁLISE ESTATÍSTICA</div>
              <div className="py-2">GERÊNCIA DE GESTÃO DA ESTRATÉGIA</div>
              <div className="py-2">
                GERÊNCIA DE GESTÃO DE PROJETOS ESTRATÉGICOS
              </div>
            </td>
          </tr>
          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA JUDICIÁRIA (SEJ)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Processamento Inicial (CPIN)
                </div>
                <div className="py-2">
                  Coordenadoria de Processos Criminais (CPCR)
                </div>
                <div className="py-2">
                  Coordenadoria de Processamento Final (CFIN)
                </div>
                <div className="py-2">COORDENADORIA DE PROCESSOS CÍVEIS</div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div className="py-2">GERÊNCIA DE COMUNICAÇÕES PROCESSUAIS</div>
              <div className="py-2">GERÊNCIA DE TRANSCRIÇÃO</div>
              <div className="py-2">GERÊNCIA DE PUBLICAÇÃO DE ACÓRDÃOS</div>
              <div className="py-2">
                GERÊNCIA DE PROCESSOS ORIGINÁRIOS CRIMINAIS
              </div>
              <div className="py-2">
                GERÊNCIA DE RECURSOS CRIMINAIS E HABEAS CORPUS
              </div>

              <div className="py-2">
                GERÊNCIA DE AUTUAÇÃO, ANÁLISE DE PREVENÇÃO E DISTRIBUIÇÃO DE
                ORIGINÁRIOS CRIMINAIS
              </div>
              <div className="py-2">GERÊNCIA DE PROTOCOLO JUDICIAL</div>

              <div className="py-2">
                GERÊNCIA DE PROCESSOS ORIGINÁRIOS CÍVEIS
              </div>
              <div className="py-2">
                GERÊNCIA DE CONTROLE CONCENTRADO E RECLAMAÇÕES
              </div>
              <div className="py-2">GERÊNCIA DE RECURSOS EXTRAORDINÁRIOS</div>

              <div className="py-2">
                GERÊNCIA DE APOIO OPERACIONAL ADMINISTRATIVO DA SECRETARIA
                JUDICIÁRIA
              </div>
            </td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE ALTOS ESTUDOS, PESQUISAS E GESTÃO DA INFORMAÇÃO
              (SAE)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">Coordenadoria de Biblioteca (CBIB)</div>
                <div className="py-2">
                  Coordenadoria de Pesquisas Judiciárias (COPJ)
                </div>
                <div className="py-2">
                  Coordenadoria de Difusão da Informação (CODI)
                </div>
                <div className="py-2">
                  Coordenadoria de Gestão da Informação, Memória Institucional e
                  Museu (CGIM)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div className="py-2">GERÊNCIA DE GESTÃO DE GABINETE SAE</div>

              <div className="py-2">GERÊNCIA DE ALTOS ESTUDOS</div>
              <div className="py-2">
                GERÊNCIA DE CURADORIA DE CONHECIMENTOS E PRÁTICAS
              </div>
              <div className="py-2">GERÊNCIA DE INTEGRAÇÃO ACADÊMICA</div>

              <div className="py-2">
                GERÊNCIA DE DESENVOLVIMENTO DE COLEÇÕES
              </div>
              <div className="py-2">GERÊNCIA DE CONTEÚDOS DIGITAIS</div>
              <div className="py-2">
                GERÊNCIA DE TRATAMENTO DA INFORMAÇÃO BIBLIOGRÁFICA
              </div>
              <div className="py-2">GERÊNCIA DE REFERÊNCIA E CIRCULAÇÃO</div>

              <div className="py-2">GERÊNCIA DE DIVULGAÇÃO DE JULGADOS</div>
              <div className="py-2">GERÊNCIA DE DIFUSÃO INTERATIVA</div>
              <div className="py-2">
                GERÊNCIA DE REVISÃO DE TEXTOS E PROVAS EDITORIAIS
              </div>
              <div className="py-2">
                GERÊNCIA DE JURISPRUDÊNCIA INTERNACIONAL
              </div>
              <div className="py-2">
                GERÊNCIA DE PRODUÇÃO DE PUBLICAÇÕES JURISPRUDENCIAIS
              </div>
              <div className="py-2">
                GERÊNCIA DE EDITORAÇÃO E DIVULGAÇÃO DE PUBLICAÇÕES
              </div>

              <div className="py-2">
                COORDENADORIA DE GESTÃO DA INFORMAÇÃO, MEMÓRIA INSTITUCIONAL E
                MUSEU
              </div>

              <div className="py-2">GERÊNCIA DE GESTÃO DOCUMENTAL</div>
              <div className="py-2">
                GERÊNCIA DE GESTÃO DA MEMÓRIA INSTITUCIONAL
              </div>
              <div className="py-2">
                GERÊNCIA DE PRESERVAÇÃO E RESTAURAÇÃO DE DOCUMENTOS
              </div>
            </td>
          </tr>
          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE COMUNICAÇÃO SOCIAL (SCO)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Serviços e Infraestrutura da TV e Rádio
                  Justiça (CSTR)
                </div>
                <div className="py-2">Coordenadoria de Multimeios (COMU)</div>
                <div className="py-2">
                  Núcleo da Atendimento a Gabinetes e Projetos Especiais (NAGPE)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div className="py-2">GERÊNCIA DE COMUNICAÇÃO EXTERNA</div>
              <div className="py-2">GERÊNCIA DE COMUNICAÇÃO INTERNA</div>
              <div className="py-2">GERÊNCIA DA GESTÃO DE CONTEÚDO</div>
              <div className="py-2">GERÊNCIA DA GESTÃO DE INFRAESTRUTURA</div>
              <div className="py-2">GERÊNCIA DA GESTÃO DE SERVIÇOS</div>
            </td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE GESTÃO DE PRECEDENTES (SPR)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Recebimento e Admissibilidade Recursal (CORA)
                </div>
                <div className="py-2">
                  Coordenadoria de Jurisprudência (COJU)
                </div>
                <div className="py-2">
                  Coordenadoria de Integração Institucional (CINT)
                </div>
                <div className="py-2">
                  Núcleo de Gerenciamento de Precedentes (NUGEP)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div className="py-2">
                GERÊNCIA DE ANÁLISE DE PRECEDENTES E DE JURISPRUDÊNCIA
              </div>
              <div className="py-2">
                GERÊNCIA DO BANCO DE PRECEDENTES E DE JURISPRUDÊNCIA
              </div>
              <div className="py-2">
                GERÊNCIA DE ANÁLISE DE REPERCUSSÃO GERAL
              </div>

              <div className="py-2">GERÊNCIA DE ANÁLISE PROCESSUAL</div>
              <div className="py-2">
                GERÊNCIA DE ANÁLISE DE PRESSUPOSTOS OBJETIVOS
              </div>
              <div className="py-2">
                GERÊNCIA DE RECEBIMENTO E DISTRIBUIÇÃO DE RECURSOS
              </div>
            </td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              ASSESSORIA DE APOIO À JURISDIÇÃO (AAJ)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Núcleo de Processos Estruturais e Complexos (NUPEC)
                </div>
                <div className="py-2">
                  Núcleo de Solução Consensual de Conflitos (NUSOL)
                </div>
                <div className="py-2">
                  Núcleo de Análise de Dados e Estatística (NUADE)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE RELAÇÕES COM A SOCIEDADE (SRS)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Integridade Digital (CIND)
                </div>
                <div className="py-2">
                  Coordenadoria de Combate à Desinformação (CCOD)
                </div>
                <div className="py-2">
                  Coordenadoria de Sustentabilidade, Acessibilidade e ODS (CODS)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DO TRIBUNAL
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">Gabinete do Diretor-Geral (GDG)</div>
                <div className="py-2">Assessoria Jurídica (AJU)</div>
                <div className="py-2">
                  Assessoria de Apoio à Governança e Conformidade (AGC)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              Secretaria de Orçamento, Finanças e Contratações (SOC)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Orçamento e Finanças (COFI)
                </div>
                <div className="py-2">
                  Comissão Permanente de Licitação (CPL)
                </div>
                <div className="py-2">
                  Coordenadoria de Planejamento das Contratações (CODS)
                </div>
                <div className="py-2">
                  Coordenadoria de Gestão das Contratações (CGEC)
                </div>
                <div className="py-2">
                  Coordenadoria de Articulação Financeira e de Contratações
                  (CAFC)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE GESTÃO DE PESSOAS (SGP)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Central de Atendimento ao Servidor (CATS)
                </div>
                <div className="py-2">
                  Coordenadoria de Registros Funcionais e Pagamento (CRFP)
                </div>
                <div className="py-2">
                  Coordenadoria de Desenvolvimento de Pessoas (CDPE) (NR)
                </div>
                <div className="py-2">
                  Coordenadoria de Gestão do STF-Med (CMED)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE TECNOLOGIA E INOVAÇÃO (STI)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Soluções do STF Digital
                </div>
                <div className="py-2">
                  Coordenadoria de Soluções de Software (CSSO)
                </div>
                <div className="py-2">
                  Coordenadoria de Infraestrutura Tecnológica (CITI)
                </div>
                <div className="py-2">
                  Núcleo de Apoio aos Sistemas Judiciais (NASJU)
                </div>
                <div className="py-2">
                  Coordenadoria de Relacionamento e Central de Serviços (CRCS)
                </div>
                <div className="py-2">
                  Núcleo de Inteligência Artificial e Ciência de Dados (NIAC)
                </div>
                <div className="py-2">
                  Coordenadoria de Segurança Cibernética (CSEC)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE SEGURANÇA (SEG)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Segurança de Dignitários (CDIG)
                </div>
                <div className="py-2">
                  Coordenadoria de Segurança Institucional (CSIT)
                </div>
                <div className="py-2">Núcleo de Inteligência (INTEL)</div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE SERVIÇOS INTEGRADOS DE SAÚDE (SIS)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div></div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              SECRETARIA DE ADMINISTRAÇÃO DE SERVIÇOS E GESTÃO PREDIAL (SAP)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Serviços e Logística (CSEL)
                </div>
                <div className="py-2">
                  Coordenadoria de Arquitetura, Engenharia e Manutenção (CAEM)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              AUDITORIA INTERNA (AUDI)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">
                  Coordenadoria de Auditoria em Governança e Finanças (CGOF)
                </div>
                <div className="py-2">
                  Coordenadoria de Auditoria em Pessoal e Contratações (CPEC)
                </div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>

          <tr className="border-b border-cinza-400 dark:border-cinza-700 border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950 border-r border-cinza-400"
            >
              OUVIDORIA (OUVI)
            </th>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap bg-cinza-100 dark:text-white dark:bg-cinza-950">
              <div>
                <div className="py-2">Ouvidoria da Mulher (OUVI-M)</div>
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-cinza-900 whitespace-nowrap border-l border-cinza-400 bg-cinza-100 dark:text-white dark:bg-cinza-950"></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Organograma;
