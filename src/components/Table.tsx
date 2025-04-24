import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Checkbox } from "./ui/checkbox";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEdit, faInfoCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

const AcoesBotoes = () => (
  <span className="flex gap-2">
    <Button rounded="full" variant="ghost" square>
      <FontAwesomeIcon icon={faEdit} />
    </Button>
    <Button rounded="full" variant="ghost" square>
      <FontAwesomeIcon icon={faTrashAlt} />
    </Button>
  </span>
);

  
const processos = [
  {
    processo: "10271.000995/2024-23 - Interessado: 123.456.789-10 - Fernanda Martins Nunes de Alencar - Procedimento: 88688",
    destinatarios: [
      {
        checkbox: <Checkbox />,
        info: <FontAwesomeIcon icon={faInfoCircle} />,
        destinatario: "Fernanda Martins Nunes de Alencar",
        situacao_dte: "Ativa e com DTE válido",
        tipo_correspondencia: "Digital",
        natureza_correspondencia: "Pessoal",
        documento_principal: "Proc. 12345/2025",
        acoes: <AcoesBotoes/>,
      },
     
    ],
  },
  {
    processo: "10271.000995/2024-58 - Interessado: 123.456.789-10 - Fernanda Martins Nunes de Alencar - Procedimento: 88688",
    destinatarios: [
      {
        checkbox: <Checkbox />,
        info: <FontAwesomeIcon icon={faInfoCircle} />,
        destinatario: "Fernanda Martins Nunes de Alencar",
        situacao_dte: "Ativa e com DTE válido",
        tipo_correspondencia: "Digital",
        natureza_correspondencia: "Pessoal",
        documento_principal: "Proc. 12345/2025",
        acoes: <AcoesBotoes/>,
      },
      {
        checkbox: <Checkbox />,
        info: <FontAwesomeIcon icon={faInfoCircle} />,
        destinatario: "Fernanda Martins Nunes de Alencar",
        situacao_dte: "Ativa e com DTE válido",
        tipo_correspondencia: "Digital",
        natureza_correspondencia: "Pessoal",
        documento_principal: "Proc. 12345/2025",
        acoes: <AcoesBotoes/>,
      },
    ],
  },
];

  
export function TableDemo() {
  return (
    <div className="w-full overflow-x-auto space-y-12">
      {processos.map((proc, procIndex) => (
        <div key={procIndex}>
          <Table className="table-auto w-full">
            <TableCaption className="text-left">
              <Checkbox className="mr-2" />
              <span>{proc.processo}</span>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead><Checkbox /></TableHead>
                <TableHead><FontAwesomeIcon icon={faInfoCircle} /></TableHead>
                <TableHead>Destinatário</TableHead>
                <TableHead>Situação Cadastral e DTE</TableHead>
                <TableHead>Tipo de Correspondência</TableHead>
                <TableHead>Natureza da Correspondência</TableHead>
                <TableHead>Documento Principal</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {proc.destinatarios.map((dest, destIndex) => (
                <TableRow key={destIndex}>
                  <TableCell>{dest.checkbox}</TableCell>
                  <TableCell>{dest.info}</TableCell>
                  <TableCell>{dest.destinatario}</TableCell>
                  <TableCell>{dest.situacao_dte}</TableCell>
                  <TableCell>{dest.tipo_correspondencia}</TableCell>
                  <TableCell>{dest.natureza_correspondencia}</TableCell>
                  <TableCell>{dest.documento_principal}</TableCell>
                  <TableCell>{dest.acoes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}

  